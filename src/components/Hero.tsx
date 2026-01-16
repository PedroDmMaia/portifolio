import { motion } from 'motion/react'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const container = (delay: number) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  },
})

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Main Title */}
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
          >
            <span className="block text-neutral-100">Pedro</span>
            <span className="block text-gradient">Maia</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-400">
              Desenvolvedor{' '}
              <span className="text-gradient font-semibold">Full Stack</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={container(0.4)}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-base sm:text-lg text-neutral-400 mb-8 leading-relaxed"
          >
            Transformando ideias em soluções digitais inovadoras. Especializado em
            criar aplicações web modernas, escaláveis e de alta performance com
            React, TypeScript, Node.js e as mais recentes tecnologias.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
            >
              Entre em Contato
            </motion.button>
            <motion.a
              href="https://github.com/PedroDmMaia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 glass-effect rounded-lg font-semibold text-neutral-100 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
            >
              <FaGithub className="text-xl" />
              Ver Projetos
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-6 mb-12"
          >
            <motion.a
              href="https://www.linkedin.com/in/pedrodmmaia/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-neutral-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/PedroDmMaia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-neutral-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-neutral-500">Role para explorar</span>
            <motion.button
              onClick={() => scrollToSection('#about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="Scroll down"
            >
              <HiArrowDown className="text-3xl" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
