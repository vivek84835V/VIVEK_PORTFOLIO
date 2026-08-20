import './styles/App.css'
import Header from './Components/Header'
import Navigation from './Routes/Navigation'
import Footer from './Components/Footer'
import CustomCursor from './Components/CustomCursor'

function App() {
  return (
    <>
      <div className='relative z-[9999]'>
        <CustomCursor />
        <Header />
        <Navigation />
        <Footer />
      </div>
    </>
  )
}

export default App
