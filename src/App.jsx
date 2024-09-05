
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MlDomain from './components/MlDomain'
import Navbar from './components/Navbar'
import OurDomain from './components/OurDomain'

function App() {
  
  return (
    <>
      <div className='w-full h-screen'>   

          <Navbar/>
          <Hero/>
          <About/>
          <OurDomain/>
          <MlDomain/>
          <Contact/>
          <Footer/>
       </div>
    </>
  )
}

export default App
