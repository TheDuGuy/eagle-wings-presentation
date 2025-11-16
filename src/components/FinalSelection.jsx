import { motion } from 'framer-motion'
import { useState } from 'react'

const ccLogos = [
  { id: 21, src: '/logos/21.png', darkBg: true, title: 'CC Design - Variant 1' },
  { id: 22, src: '/logos/22.png', darkBg: true, title: 'CC Design - Variant 2' },
  { id: 23, src: '/logos/23.png', darkBg: false, title: 'CC Design - Variant 3' },
  { id: 24, src: '/logos/24.png', darkBg: false, title: 'CC Design - Variant 4' },
  { id: 25, src: '/logos/25.png', darkBg: false, title: 'CC Design - Variant 5' },
]

const FinalSelection = () => {
  const [selectedLogo, setSelectedLogo] = useState(null)
  const [hoveredLogo, setHoveredLogo] = useState(null)

  return (
    <div className="w-full h-full overflow-y-auto p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Final Selection
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-white/80 mb-2">
            Eagle Wings Consulting
          </p>
          <p className="text-lg text-white/60">
            Select your preferred design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {ccLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -8 }}
              onClick={() => setSelectedLogo(logo.id === selectedLogo ? null : logo.id)}
              onMouseEnter={() => setHoveredLogo(logo.id)}
              onMouseLeave={() => setHoveredLogo(null)}
              className="cursor-pointer group relative"
            >
              <div
                className={`glass-effect rounded-2xl p-6 transition-all duration-300 relative overflow-hidden ${
                  selectedLogo === logo.id
                    ? 'ring-4 ring-[#D4AF37] shadow-2xl shadow-[#D4AF37]/50'
                    : 'hover:bg-white/20'
                }`}
              >
                {/* Selection Indicator */}
                {selectedLogo === logo.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 z-20 bg-[#D4AF37] rounded-full p-2 shadow-lg"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                )}

                {/* Logo Number Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-[#1a2b4a] px-4 py-2 rounded-full text-sm font-bold">
                    #{logo.id}
                  </div>
                </div>

                {/* Logo Container */}
                <div
                  className="rounded-xl p-8 md:p-12 min-h-[350px] md:min-h-[400px] flex items-center justify-center transition-transform duration-300"
                  style={{ backgroundColor: logo.darkBg ? '#242424' : '#ffffff' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Hover/Selection overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#D4AF37]/30 to-transparent rounded-2xl transition-opacity duration-300 ${
                    hoveredLogo === logo.id || selectedLogo === logo.id
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                />

                {/* Title */}
                <div className="mt-4 text-center">
                  <p className="text-white text-lg font-semibold">{logo.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selection Confirmation */}
        {selectedLogo && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="glass-effect rounded-2xl p-6 md:p-8 text-center max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse" />
              <p className="text-white text-xl md:text-2xl font-bold">
                Logo #{selectedLogo} Selected
              </p>
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse" />
            </div>
            <p className="text-white/70 text-base md:text-lg">
              Click the logo again to deselect, or choose a different option
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default FinalSelection
