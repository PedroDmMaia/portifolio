import { useState, useEffect } from 'react'
import logo from '../assets/logo.jpeg'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Tecnologias', href: '#technologies' },
  { name: 'Experiência', href: '#experience' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3"
          >
            <img
              className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-500/50"
              src={logo}
              alt="Pedro Maia"
            />
            <span className="hidden sm:block font-display text-xl font-bold text-gradient">
              Pedro Maia
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-neutral-300 hover:text-cyan-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/pedrodmmaia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-neutral-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/PedroDmMaia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-neutral-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/pedroo._.maia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-neutral-400 hover:text-cyan-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-neutral-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left text-neutral-300 hover:text-cyan-400 transition-colors py-2"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href="https://www.linkedin.com/in/pedrodmmaia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-neutral-400 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/PedroDmMaia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-neutral-400 hover:text-cyan-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/pedroo._.maia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-neutral-400 hover:text-cyan-400 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
