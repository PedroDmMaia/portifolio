import aboutImage from '../assets/about-image.jpg'
import { motion } from 'motion/react'

export default function About() {
  const stats = [
    { label: 'Anos de Experiência', value: '2+' },
    { label: 'Projetos Concluídos', value: '10+' },
    { label: 'Tecnologias Dominadas', value: '15+' },
    { label: 'Clientes Satisfeitos', value: '5+' },
  ]

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-display font-bold text-center mb-4"
        >
          Sobre <span className="text-gradient">Mim</span>
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto"
        >
          Conheça um pouco mais sobre minha jornada e paixão por desenvolvimento
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl w-full max-w-md shadow-2xl"
                src={aboutImage}
                alt="Pedro Maia"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                Olá, sou <span className="text-cyan-400 font-semibold">Pedro Maia</span>, um
                desenvolvedor full stack apaixonado por criar soluções web completas e
                escaláveis. Com experiência em tecnologias modernas como React, TypeScript,
                Tailwind CSS, Node.js, Prisma, e bancos de dados como MySQL e PostgreSQL.
              </p>
              <p>
                Minha abordagem é sempre focada em entender as necessidades do cliente e
                entregar soluções eficientes que proporcionem uma excelente experiência para
                os usuários. Utilizo Docker para garantir escalabilidade e facilidade de
                gerenciamento das aplicações.
              </p>
              <p>
                Se você busca um desenvolvedor comprometido em transformar ideias em
                soluções robustas e inovadoras, estou à disposição para colaborar no seu
                próximo projeto.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-effect rounded-lg p-4 text-center card-hover"
                >
                  <div className="text-3xl font-display font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
