import { projects } from '../constants'
import { motion } from 'motion/react'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-display font-bold text-center mb-4"
        >
          Projetos
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto"
        >
          Alguns dos projetos que desenvolvi e dos quais me orgulho
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-xl overflow-hidden card-hover group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.github && (
                    <motion.a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-500/90 hover:bg-cyan-500 rounded-lg text-sm font-semibold text-white"
                    >
                      <FaGithub />
                      Código
                    </motion.a>
                  )}
                  {item.url && (
                    <motion.a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 px-4 py-2 bg-purple-500/90 hover:bg-purple-500 rounded-lg text-sm font-semibold text-white"
                    >
                      <HiExternalLink />
                      Ver Site
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-800/50 border border-slate-700 rounded text-xs text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
