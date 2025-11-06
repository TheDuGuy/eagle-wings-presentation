import { motion } from 'framer-motion'

const colors = [
  {
    name: 'Royal Gold',
    hex: '#D4AF37',
    description: 'Premium, trustworthy, successful',
    bg: 'bg-[#D4AF37]',
  },
  {
    name: 'Navy Blue',
    hex: '#1a2b4a',
    description: 'Professional, stable, reliable',
    bg: 'bg-[#1a2b4a]',
  },
  {
    name: 'Vibrant Red',
    hex: '#DC2626',
    description: 'Energy, passion, action',
    bg: 'bg-[#DC2626]',
  },
  {
    name: 'Elegant Gray',
    hex: '#6B7280',
    description: 'Sophisticated, balanced',
    bg: 'bg-[#6B7280]',
  },
]

const ColorPalette = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-bold mb-16 text-white border-l-8 border-[#D4AF37] pl-6">
            Brand Color Palette
          </h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-8">
          {colors.map((color, index) => (
            <motion.div
              key={color.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
            >
              <div className="glass-effect rounded-3xl p-6 h-full hover:bg-white/20 transition-all duration-300">
                <motion.div
                  className={`${color.bg} rounded-2xl h-48 mb-6 shadow-2xl`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {color.name}
                  </h3>
                  <p className="text-lg font-mono text-white/60 mb-3">
                    {color.hex}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {color.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 glass-effect rounded-3xl p-8 text-center"
        >
          <p className="text-xl text-white/80">
            A carefully selected palette that balances professionalism with warmth and energy
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ColorPalette
