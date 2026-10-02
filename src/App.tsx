import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { SolutionsPage } from '@/pages/SolutionsPage'
import { GsapShowcasePage } from '@/pages/GsapShowcasePage'
import { IconsPage } from '@/pages/IconsPage'
import { ComingSoonPage } from '@/pages/ComingSoonPage'
import { TechnologyPartnersPage } from '@/pages/TechnologyPartnersPage'
import { IndustriesPage } from '@/pages/IndustriesPage'
import { ProjectsOpportunitiesPage } from '@/pages/ProjectsOpportunitiesPage'
import { PartnershipsPage } from '@/pages/PartnershipsPage'
import { ContactPage } from '@/pages/ContactPage'

const AppLayout: React.FC = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F2] text-[#102A56] selection:bg-[#00AFA9]/30 selection:text-[#102A56]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/technology-partners" element={<TechnologyPartnersPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/opportunities" element={<ProjectsOpportunitiesPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/services" element={<ComingSoonPage />} />
          <Route path="/work" element={<ComingSoonPage />} />
          <Route path="/testimonials" element={<ComingSoonPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gsap-showcase" element={<GsapShowcasePage />} />
          <Route path="/icons" element={<IconsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
