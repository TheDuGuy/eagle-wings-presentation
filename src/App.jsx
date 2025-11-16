import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TitleSlide from './components/TitleSlide'
import AboutSlide from './components/AboutSlide'
import ColorPalette from './components/ColorPalette'
import LogoGallery from './components/LogoGallery'
import Applications from './components/Applications'
import FinalSelection from './components/FinalSelection'
import Navigation from './components/Navigation'

const slides = [
  { id: 0, component: TitleSlide },
  { id: 1, component: AboutSlide },
  { id: 2, component: ColorPalette },
  { id: 3, component: LogoGallery },
  { id: 4, component: Applications },
  { id: 5, component: FinalSelection },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const SlideComponent = slides[currentSlide].component

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1a2b4a] via-[#2d3548] to-[#364159]">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
        onDotClick={goToSlide}
      />
    </div>
  )
}

export default App
