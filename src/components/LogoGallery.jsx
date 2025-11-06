import { motion } from 'framer-motion'
import { useState } from 'react'

const logos = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  src: `/logos/${i + 1}.png`,
}))

const LogoGallery = () => {
  const [selectedLogo, setSelectedLogo] = useState(null)

  return (
    <div className="w-full h-full overflow-y-auto p-4 md:p-8 lg:p-12">
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

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedLogo(logo)}
              className="cursor-pointer group"
            >
              <div className="glass-effect rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-[#1a2b4a] px-4 py-2 rounded-full text-base font-bold">
                    {String(logo.id).padStart(2, '0')}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 md:p-12 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
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
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedLogo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8 w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-xl md:rounded-2xl p-8 md:p-16">
              <img
                src={selectedLogo.src}
                alt={`Logo ${selectedLogo.id}`}
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
            </div>
            <div className="flex items-center justify-between mt-4 md:mt-6 px-2">
              <p className="text-white text-lg md:text-xl font-semibold">
                Logo Design #{selectedLogo.id}
              </p>
              <button
                onClick={() => setSelectedLogo(null)}
                className="glass-effect px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default LogoGallery
