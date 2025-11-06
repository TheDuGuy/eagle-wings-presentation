import { motion } from 'framer-motion'

const Applications = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-bold mb-16 text-white border-l-8 border-[#D4AF37] pl-6">
            Next Steps
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          {[
            {
              title: '1. Select Primary Logo',
              description: 'Review all 20 concepts and choose the main logo that best represents Eagle Wings Consulting\'s mission and values.',
            },
            {
              title: '2. Refine Details',
              description: 'Adjust colors, typography, or proportions based on feedback. Create variations for different use cases.',
            },
            {
              title: '3. Create Brand Assets',
              description: 'Multiple file formats (PNG, SVG, PDF), color and monochrome versions, various sizes, and brand guidelines.',
            },
            {
              title: '4. Launch & Implement',
              description: 'Deploy across all touchpoints: website, social media, print materials, signage, and communications.',
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect rounded-3xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-[#D4AF37] mb-4">{step.title}</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="glass-effect rounded-3xl p-12 text-center bg-gradient-to-r from-[#D4AF37]/10 to-transparent"
        >
          <h3 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#D4AF37] via-yellow-300 to-[#D4AF37] bg-clip-text text-transparent">
              Thank You
            </span>
          </h3>
          <p className="text-2xl text-white/90 mb-6">
            We look forward to your feedback
          </p>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-xl text-white/70">Eagle Wings Consulting Ltd</p>
            <p className="text-white/50 mt-2">Empowering families • Building futures</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Applications
