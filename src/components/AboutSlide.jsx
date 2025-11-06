import { motion } from 'framer-motion'

const AboutSlide = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-y-auto">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white border-l-4 md:border-l-8 border-[#D4AF37] pl-3 md:pl-6">
            About Eagle Wings Consulting
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-16 max-w-4xl"
        >
          A family consultancy dedicated to supporting Portuguese-speaking families with comprehensive social and career services.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8 hover:bg-white/20 transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-4 md:mb-6">Core Services</h3>
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2 md:mr-3 text-xl md:text-2xl">→</span>
                <div>
                  <span className="font-semibold text-[#D4AF37]">Social Support</span>
                  <br />
                  <span className="text-white/70 text-sm md:text-base">Benefits, housing, education</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2 md:mr-3 text-xl md:text-2xl">→</span>
                <div>
                  <span className="font-semibold text-[#D4AF37]">Career Pathways</span>
                  <br />
                  <span className="text-white/70 text-sm md:text-base">Transport & customer service</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2 md:mr-3 text-xl md:text-2xl">→</span>
                <div>
                  <span className="font-semibold text-[#D4AF37]">Community</span>
                  <br />
                  <span className="text-white/70 text-sm md:text-base">Cultural support & guidance</span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8 hover:bg-white/20 transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-4 md:mb-6">Brand Values</h3>
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-2 md:mr-3 text-xl md:text-2xl">→</span>
                <span className="text-white/90">Trust & Reliability</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-2 md:mr-3 text-xl md:text-2xl">→</span>
                <span className="text-white/90">Protection & Support</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-2 md:mr-3 text-xl md:text-2xl">→</span>
                <span className="text-white/90">Growth & Opportunity</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-2 md:mr-3 text-xl md:text-2xl">→</span>
                <span className="text-white/90">Community & Family</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 md:mt-12 glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8"
        >
          <p className="text-base md:text-xl text-white/80 leading-relaxed">
            The eagle and wings represent <span className="text-[#D4AF37] font-semibold">protection, guidance, and elevation</span> - core to the mission of helping families rise and succeed.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSlide
