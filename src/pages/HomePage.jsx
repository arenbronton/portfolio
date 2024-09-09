import React from 'react'

import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Footer from '../components/layout/Footer'
import Skills from '../components/sections/Skills'
import Extra from '../components/sections/Extra'

import './HomePage.scss'

export default function HomePage() {
    return (
        <main className="home-page page">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Extra />
            {/* Others below */}
            <Footer />
        </main>
    )
}