import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import TreatmentsSection from './sections/TreatmentsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import AppointmentSection from './sections/AppointmentSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TreatmentsSection />
        <TestimonialsSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
