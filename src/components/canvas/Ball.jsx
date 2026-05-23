import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  Float,
} from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const IndividualBall = ({ tech, position }) => {
  const [hovered, setHovered] = useState(false);
  const [texture, setTexture] = useState(null);
  const meshRef = useRef();

  // Generate and compile the texture map on state change (supporting dynamic image drawing)
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    // Category Accent Colors
    let themeColor = "#915eff"; // Backend: Purple
    if (tech.category === "Frontend") themeColor = "#00cea8"; // Frontend: Teal
    else if (tech.category === "Tools") themeColor = "#ff7a00"; // Tools: Orange
    else if (tech.category === "Leadership") themeColor = "#ffd700"; // Leadership: Gold

    const renderTexture = (imgElement = null) => {
      // Clear and draw radial background
      const grad = ctx.createRadialGradient(256, 256, 80, 256, 256, 256);
      grad.addColorStop(0, hovered ? "#221a4f" : "#120d2c");
      grad.addColorStop(1, "#070417");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Glowing outer ring
      ctx.strokeStyle = themeColor;
      ctx.lineWidth = hovered ? 26 : 18;
      ctx.shadowColor = themeColor;
      ctx.shadowBlur = hovered ? 40 : 25;
      ctx.beginPath();
      ctx.arc(256, 256, 220, 0, Math.PI * 2);
      ctx.stroke();

      // Cyber ticks
      ctx.shadowBlur = 0;
      ctx.lineWidth = 6;
      ctx.strokeStyle = `${themeColor}88`;
      ctx.beginPath();
      ctx.moveTo(256, 12); ctx.lineTo(256, 32);
      ctx.moveTo(256, 480); ctx.lineTo(256, 500);
      ctx.moveTo(12, 256); ctx.lineTo(32, 256);
      ctx.moveTo(480, 256); ctx.lineTo(500, 256);
      ctx.stroke();

      // If we have an image logo, draw it in the center!
      if (imgElement) {
        // Draw image resized in center
        const size = 160;
        const x = 256 - size / 2;
        const y = 256 - size / 2 - 25; // Shift up slightly to fit name below
        ctx.drawImage(imgElement, x, y, size, size);

        // Draw skill name at the bottom
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 38px Poppins, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(tech.name, 256, 390);
      } else {
        // Text-only layout: Name in the center
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 52px Poppins, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const words = tech.name.split(" ");
        if (words.length > 1) {
          ctx.fillText(words[0], 256, 200);
          ctx.fillText(words.slice(1).join(" "), 256, 290);
        } else {
          ctx.fillText(tech.name, 256, 256);
        }

        // Draw tag at the bottom
        ctx.fillStyle = `${themeColor}cc`;
        ctx.font = "bold 32px Poppins, sans-serif";
        ctx.textBaseline = "alphabetic";
        ctx.fillText(hovered ? "ACTIVE" : "TECH", 256, 390);
      }

      // Convert to Three.js texture
      const tex = new THREE.CanvasTexture(canvas);
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = true;
      tex.needsUpdate = true;
      setTexture(tex);
    };

    // Load logo if exists
    if (tech.icon) {
      const img = new Image();
      img.src = tech.icon;
      img.onload = () => {
        renderTexture(img);
      };
      img.onerror = () => {
        // Fallback to text layout if image fails to load
        renderTexture(null);
      };
    } else {
      renderTexture(null);
    }
  }, [tech, hovered]);

  // Minor independent self-rotation for a living orbital cloud feel
  useFrame((state) => {
    if (meshRef.current) {
      const slowSpin = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = slowSpin;
    }
  });

  if (!texture) return null;

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh
        ref={meshRef}
        position={position}
        castShadow
        receiveShadow
        scale={hovered ? 2.2 : 1.8}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
      >
        {/* Icosahedron geometry creates a beautiful high-tech faceted crystalline shell */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.2}
          metalness={0.1}
          color={hovered ? "#ffffff" : "#f0ecff"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCluster = ({ techs }) => {
  const groupRef = useRef();

  // Slow orbital rotation of the cluster
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.025) * 0.07;
    }
  });

  if (!techs || techs.length === 0) return null;

  const N = techs.length;
  // Dynamic scale radius to ensure excellent spacing regardless of list size
  const radius = Math.max(6.5, Math.min(11.5, N * 0.38));

  return (
    <group ref={groupRef}>
      {techs.map((tech, i) => {
        // Mathematically bulletproof Fibonacci Sphere algorithm (2*i + 1)/N to ensure range [-1, 1]
        const phi = Math.acos(Math.min(1, Math.max(-1, -1 + (2 * i + 1) / N)));
        const theta = Math.sqrt(N * Math.PI) * phi;

        const rawX = radius * Math.cos(theta) * Math.sin(phi);
        const rawY = radius * Math.sin(theta) * Math.sin(phi);
        const rawZ = radius * Math.cos(phi);

        // Ultimate NaN safety check
        const x = isNaN(rawX) ? 0 : rawX;
        const y = isNaN(rawY) ? 0 : rawY;
        const z = isNaN(rawZ) ? 0 : rawZ;

        return (
          <IndividualBall
            key={tech.name}
            tech={tech}
            position={[x, y, z]}
          />
        );
      })}
    </group>
  );
};

const BallCanvas = ({ techs }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 17], fov: 60 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      className="w-full h-full cursor-grab active:cursor-grabbing"
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-5, -5, 5]} intensity={0.5} />
      <pointLight position={[0, 12, 0]} intensity={0.6} />
      
      <Suspense fallback={<CanvasLoader />}>
        {/* CRITICAL: Set enableZoom={false} to prevent intercepting mouse scrolls, allowing users to scroll the page naturally! */}
        <OrbitControls enableZoom={false} enablePan={false} />
        <BallCluster techs={techs} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
