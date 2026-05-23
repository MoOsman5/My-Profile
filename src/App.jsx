import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, CustomCursor, Preloader } from './components'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {/* Premium introductory splash preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="loader" finishLoading={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <div className='relative z-0 bg-primary'>
        <CustomCursor />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <div className='relative z-0'>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
