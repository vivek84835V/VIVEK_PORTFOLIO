import { Route, Routes } from 'react-router-dom'
import Pro from '../Pages/Pro'
import Hero from '../Components/Hero'
import Content from '../Components/Content'
import FloatingAsis from '../Components/FloatingAsis'
import About from '../Components/About'
import Contact from '../Components/Contact'

function Navigation() {
    return (
        <main className='className="relative z-0"'>
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <Content />
                        <About />
                        <Contact />
                        <FloatingAsis />
                    </>
                } />
                <Route path="/projects" element={<Pro />} />
            </Routes>
        </main>
    )
}

export default Navigation
