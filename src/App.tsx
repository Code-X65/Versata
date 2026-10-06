import React, { lazy, Suspense, useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { AmariChatbot } from '@/components/AmariChatbot'

const HomePage = lazy(() => import('@/pages/HomePage').then((module) => ({ default: module.HomePage })))
const AboutPage = lazy(() => import('@/pages/AboutPage').then((module) => ({ default: module.AboutPage })))
const SolutionsPage = lazy(() => import('@/pages/SolutionsPage').then((module) => ({ default: module.SolutionsPage })))
const GsapShowcasePage = lazy(() => import('@/pages/GsapShowcasePage').then((module) => ({ default: module.GsapShowcasePage })))
const IconsPage = lazy(() => import('@/pages/IconsPage').then((module) => ({ default: module.IconsPage })))
const TechnologyPartnersPage = lazy(() => import('@/pages/TechnologyPartnersPage').then((module) => ({ default: module.TechnologyPartnersPage })))
const IndustriesPage = lazy(() => import('@/pages/IndustriesPage').then((module) => ({ default: module.IndustriesPage })))
const ProjectsOpportunitiesPage = lazy(() => import('@/pages/ProjectsOpportunitiesPage').then((module) => ({ default: module.ProjectsOpportunitiesPage })))
const PartnershipsPage = lazy(() => import('@/pages/PartnershipsPage').then((module) => ({ default: module.PartnershipsPage })))
const ContactPage = lazy(() => import('@/pages/ContactPage').then((module) => ({ default: module.ContactPage })))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })))

const AppLayout: React.FC = () => {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F2] text-[#102A56] selection:bg-[#00AFA9]/30 selection:text-[#102A56]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-[#00AFA9] focus:px-4 focus:py-2.5 focus:text-xs focus:font-bold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Suspense fallback={<div role="status" className="flex min-h-[50vh] items-center justify-center px-6 text-xs font-bold uppercase tracking-[0.18em] text-[#084d3c]">Loading page…</div>}>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/technology-partners" element={<TechnologyPartnersPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/opportunities" element={<ProjectsOpportunitiesPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/services" element={<Navigate to="/solutions" replace />} />
          <Route path="/work" element={<Navigate to="/opportunities" replace />} />
          <Route path="/testimonials" element={<Navigate to="/about" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gsap-showcase" element={<GsapShowcasePage />} />
          <Route path="/icons" element={<IconsPage />} />
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <AmariChatbot />
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
