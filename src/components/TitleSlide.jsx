import { motion } from 'framer-motion'

const TitleSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center space-y-8 px-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-8xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-[#D4AF37] via-yellow-300 to-[#D4AF37] bg-clip-text text-transparent">
              EAGLE WINGS
            </span>
          </h1>
          <div className="text-6xl font-light text-white/90 mb-12">
            CONSULTING LTD
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <div className="text-2xl text-[#D4AF37] font-semibold">
            Brand Identity Presentation
          </div>
          <div className="text-lg text-white/60">
            Logo Design Concepts 2025
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
          className="inline-block mt-12"
        >
          <div className="px-8 py-3 rounded-full glass-effect">
            <p className="text-white/80 text-sm">
              Use arrow keys to navigate
            </p>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-red-500/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  )
}

export default TitleSlide
