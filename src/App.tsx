import React, { lazy, Suspense, useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const HomePage = lazy(() => import('@/pages/HomePage').then((module) => ({ default: module.HomePage })))
const AboutPage = lazy(() => import('@/pages/AboutPage').then((module) => ({ default: module.AboutPage })))
const SolutionsPage = lazy(() => import('@/pages/SolutionsPage').then((module) => ({ default: module.SolutionsPage })))
const GsapShowcasePage = lazy(() => import('@/pages/GsapShowcasePage').then((module) => ({ default: module.GsapShowcasePage })))
const IconsPage = lazy(() => import('@/pages/IconsPage').then((module) => ({ default: module.IconsPage })))
const ComingSoonPage = lazy(() => import('@/pages/ComingSoonPage').then((module) => ({ default: module.ComingSoonPage })))
const TechnologyPartnersPage = lazy(() => import('@/pages/TechnologyPartnersPage').then((module) => ({ default: module.TechnologyPartnersPage })))
const IndustriesPage = lazy(() => import('@/pages/IndustriesPage').then((module) => ({ default: module.IndustriesPage })))
const ProjectsOpportunitiesPage = lazy(() => import('@/pages/ProjectsOpportunitiesPage').then((module) => ({ default: module.ProjectsOpportunitiesPage })))
const PartnershipsPage = lazy(() => import('@/pages/PartnershipsPage').then((module) => ({ default: module.PartnershipsPage })))
const ContactPage = lazy(() => import('@/pages/ContactPage').then((module) => ({ default: module.ContactPage })))

const AppLayout: React.FC = () => {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F2] text-[#102A56] selection:bg-[#00AFA9]/30 selection:text-[#102A56]">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div role="status" className="flex min-h-[50vh] items-center justify-center px-6 text-xs font-bold uppercase tracking-[0.18em] text-[#084d3c]">Loading page…</div>}>
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
        </Suspense>
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
