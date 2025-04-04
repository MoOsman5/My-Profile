import {Html, useProgress} from '@react-three/drei'

const Loader = () => {
  const {progress}=useProgress()
  return (
    <Html>
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize:16,
          color:'#f1f1f1',
          fontWight:800,
          marginTop:50
        }}
      >{progress.toFixed(2)}%</p>
    </Html>
    )
}

export default Loader