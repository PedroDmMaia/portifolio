import { experiences } from '../constants'
import { motion } from 'motion/react'
import { HiCalendar, HiBriefcase } from 'react-icons/hi'

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-display font-bold text-center mb-4"
        >
          Experiência
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto"
        >
          Minha jornada profissional e projetos desenvolvidos
        </motion.p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-xl p-6 lg:p-8 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Timeline */}
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <HiCalendar className="text-lg" />
                    <span className="text-sm font-semibold">{item.year}</span>
                  </div>
                  {item.company && (
                    <div className="flex items-center gap-2 text-purple-400">
                      <HiBriefcase className="text-lg" />
                      <span className="text-sm">{item.company}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-100 mb-3">
                    {item.role}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + techIndex * 0.05,
                        }}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
