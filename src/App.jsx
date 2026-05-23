import {BrowserRouter} from 'react-router-dom';
import {About,Contact,Experience,Hero,Navbar,Tech,Works,StarsCanvas,CustomCursor} from './components'

function App() {

  return (
    <BrowserRouter>
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

export default App
