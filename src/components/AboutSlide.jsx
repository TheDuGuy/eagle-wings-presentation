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
    <div className="w-full h-full flex items-center justify-center p-12">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-bold mb-6 text-white border-l-8 border-[#D4AF37] pl-6">
            About Eagle Wings Consulting
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl text-white/80 mb-16 max-w-4xl"
        >
          A family consultancy dedicated to supporting Portuguese-speaking families with comprehensive social and career services.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-3xl p-8 hover:bg-white/20 transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-[#D4AF37] mb-6">Core Services</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-3 text-2xl">→</span>
                <div>
                  <span className="font-semibold text-[#D4AF37]">Social Support</span>
                  <br />
                  <span className="text-white/70">Benefits, housing, education</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-3 text-2xl">→</span>
                <div>
                  <span className="font-semibold text-[#D4AF37]">Career Pathways</span>
                  <br />
                  <span className="text-white/70">Transport & customer service</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-3 text-2xl">→</span>
                <div>
                  <span className="font-semibold text-[#D4AF37]">Community</span>
                  <br />
                  <span className="text-white/70">Cultural support & guidance</span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-3xl p-8 hover:bg-white/20 transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-[#D4AF37] mb-6">Brand Values</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-3 text-2xl">→</span>
                <span className="text-white/90">Trust & Reliability</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-3 text-2xl">→</span>
                <span className="text-white/90">Protection & Support</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-3 text-2xl">→</span>
                <span className="text-white/90">Growth & Opportunity</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-3 text-2xl">→</span>
                <span className="text-white/90">Community & Family</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 glass-effect rounded-3xl p-8"
        >
          <p className="text-xl text-white/80 leading-relaxed">
            The eagle and wings represent <span className="text-[#D4AF37] font-semibold">protection, guidance, and elevation</span> - core to the mission of helping families rise and succeed.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSlide
