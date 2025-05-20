import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Custom cursor provider (we'll create this later)
import { CustomCursorProvider } from './context/CustomCursorContext'
import { ThemeProvider } from './context/ThemeContext'

// Components we'll create
// Removed: import CustomCursor from './components/ui/CustomCursor'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Pages we'll create
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Analytics from './pages/Analytics'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import About from './pages/About'
import DashboardEcommerce from './pages/DashboardEcommerce'
import DashboardMarketing from './pages/DashboardMarketing'
import DashboardCustomers from './pages/DashboardCustomers'
import DataAnalyticsDemos from './pages/DataAnalyticsDemos'
import WebsiteDemos from './pages/WebsiteDemos'
import MarketingDemos from './pages/MarketingDemos'
import DesignDemos from './pages/DesignDemos'

function App() {
  // State to track if page has loaded (for animations)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <ThemeProvider>
      <CustomCursorProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            {/* <CustomCursor /> */}
            <Navbar />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                {isLoaded && (
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/dashboard/ecommerce" element={<DashboardEcommerce />} />
                    <Route path="/dashboard/marketing" element={<DashboardMarketing />} />
                    <Route path="/dashboard/customers" element={<DashboardCustomers />} />
                    <Route path="/data-analytics-demos" element={<DataAnalyticsDemos />} />
                    <Route path="/website-demos" element={<WebsiteDemos />} />
                    <Route path="/marketing-demos" element={<MarketingDemos />} />
                    <Route path="/design-demos" element={<DesignDemos />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                )}
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </Router>
      </CustomCursorProvider>
    </ThemeProvider>
  )
}

export default App
