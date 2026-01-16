import { motion } from 'motion/react'
import {
  RiReactjsLine,
  RiNextjsLine,
  RiTailwindCssFill,
  RiAngularjsFill,
} from 'react-icons/ri'
import { FaNodeJs, FaDocker } from 'react-icons/fa'
import { SiNestjs, SiMysql, SiTypescript, SiPrisma } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { TbPackage } from 'react-icons/tb'

const technologies = [
  { name: 'React', icon: RiReactjsLine, color: 'text-cyan-400' },
  { name: 'Next.js', icon: RiNextjsLine, color: 'text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'Angular', icon: RiAngularjsFill, color: 'text-red-500' },
  { name: 'Tailwind CSS', icon: RiTailwindCssFill, color: 'text-cyan-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
  { name: 'NestJS', icon: SiNestjs, color: 'text-rose-500' },
  { name: 'PostgreSQL', icon: BiLogoPostgresql, color: 'text-sky-700' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-teal-400' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
  { name: 'Zustand', icon: TbPackage, color: 'text-orange-500' },
]


export default function Technologies() {
  return (
    <section id="technologies" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-display font-bold text-center mb-4"
        >
          Tecnologias
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto"
        >
          Ferramentas e tecnologias que utilizo para criar soluções incríveis
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="glass-effect rounded-xl p-6 flex flex-col items-center justify-center gap-3 card-hover group"
              >
                <Icon className={`text-5xl ${tech.color} transition-transform group-hover:rotate-12`} />
                <span className="text-sm font-medium text-neutral-300 text-center">
                  {tech.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
