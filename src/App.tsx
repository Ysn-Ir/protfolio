import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './index.css'

import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Discover from './components/Discover'
import About from './components/About'
import Services from './components/Services'
import InteractiveLab from './components/InteractiveLab'
import Work from './components/Work'
import Experiences from './components/Experiences'
import GitHubContributionSection from './components/github/GitHubContributionSection'
import FAQs from './components/FAQs'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import NotFoundPage from './components/NotFoundPage'

const HomePage: React.FC<{ isLoading: boolean }> = ({ isLoading }) => (
  <div
    style={{
      opacity: isLoading ? 0 : 1,
      transition: 'opacity 0.5s ease-out',
    }}
  >
    <Navbar />
    {/* Navbar is fixed — main needs top padding to clear it */}
    <main style={{ paddingTop: 80 }}>
      <Hero />
      <Discover />
      <About />
      <Services />
      <InteractiveLab />
      <Work />
      <Experiences />
      <GitHubContributionSection username="Ysn-Ir" />
      <Publications />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  </div>
)

const AppRoutes: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage isLoading={isLoading} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  )
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loader"
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      <AppRoutes isLoading={isLoading} />
    </BrowserRouter>
  )
}

export default App
