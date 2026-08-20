import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pro from '../Pages/Pro'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Content from '../Components/Content'
import Assistant from '../Components/Assistant'
import FloatingAsis from '../Components/FloatingAsis'
import ProjectSection from '../Components/ProjectSection'
import Footer from '../Components/Footer'
import Procard from '../Components/Procards'
import About from '../Components/About'
import Contact from '../Components/Contact'
import CustomCursor from '../Components/CustomCursor'

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
