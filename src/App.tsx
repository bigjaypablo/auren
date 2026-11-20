import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Page from './components/Page'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Product from './pages/Product'
import Shop from './pages/Shop'
import Story from './pages/Story'

export default function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/shop" element={<Page><Shop /></Page>} />
          <Route path="/shop/:id" element={<Page><Product /></Page>} />
          <Route path="/collections" element={<Page><Collections /></Page>} />
          <Route path="/story" element={<Page><Story /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
