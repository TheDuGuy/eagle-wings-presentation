import { motion } from 'framer-motion'

const Navigation = ({ currentSlide, totalSlides, onNext, onPrev, onDotClick }) => {
  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[#D4AF37] to-yellow-400"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Navigation arrows */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex items-center gap-4 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="glass-effect p-3 md:p-4 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-300"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        <div className="glass-effect px-6 py-3 rounded-full">
          <span className="text-white font-semibold">
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="glass-effect p-3 md:p-4 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-300"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Dot navigation */}
      <div className="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => onDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-[#D4AF37] scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </>
  )
}

export default Navigation
