import { motion } from 'framer-motion'
import { useState } from 'react'

const logos = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `/logos/${i + 1}.png`,
}))

const LogoGallery = () => {
  const [selectedLogo, setSelectedLogo] = useState(null)

  return (
    <div className="w-full h-full overflow-y-auto p-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-6xl font-bold mb-4 text-white border-l-8 border-[#D4AF37] pl-6">
            Logo Design Portfolio
          </h2>
          <p className="text-xl text-white/70 ml-8">
            Explore 20 unique design concepts
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedLogo(logo)}
              className="cursor-pointer group"
            >
              <div className="glass-effect rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-[#1a2b4a] px-3 py-1 rounded-full text-sm font-bold">
                    {String(logo.id).padStart(2, '0')}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 h-64 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={`Logo ${logo.id}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for selected logo */}
      {selectedLogo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-12"
          onClick={() => setSelectedLogo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="glass-effect rounded-3xl p-8 max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl p-12">
              <img
                src={selectedLogo.src}
                alt={`Logo ${selectedLogo.id}`}
                className="max-w-full max-h-[60vh] object-contain mx-auto"
              />
            </div>
            <p className="text-center text-white mt-6 text-lg">
              Logo Design #{selectedLogo.id}
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default LogoGallery
