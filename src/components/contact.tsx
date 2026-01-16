import { motion } from 'motion/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { toast } from 'sonner'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // Simular envio (você pode integrar com um serviço de email como EmailJS, Formspree, etc.)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'pedrodelmonico@hotmail.com',
      href: 'mailto:pedrodelmonico@hotmail.com',
    },
    {
      icon: HiPhone,
      label: 'Telefone',
      value: '(11) 98805-0110',
      href: 'tel:+5511988050110',
    },
    {
      icon: HiLocationMarker,
      label: 'Localização',
      value: 'São Paulo, SP',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-display font-bold text-center mb-4"
        >
          Entre em <span className="text-gradient">Contato</span>
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto"
        >
          Vamos conversar sobre seu próximo projeto ou oportunidade
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-neutral-100 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -20 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 glass-effect rounded-lg p-4 hover:bg-white/10 transition-colors group"
                    >
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                        <Icon className="text-xl text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-neutral-400">{info.label}</div>
                        <div className="text-neutral-100 font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-neutral-100 mb-6">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/pedrodmmaia/', label: 'LinkedIn' },
                  { icon: FaGithub, href: 'https://github.com/PedroDmMaia', label: 'GitHub' },
                  { icon: FaInstagram, href: 'https://www.instagram.com/pedroo._.maia/', label: 'Instagram' },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 glass-effect rounded-lg text-2xl text-neutral-400 hover:text-cyan-400 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass-effect rounded-xl p-8 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Nome
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="Seu nome"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Mensagem
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                placeholder="Sua mensagem..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
