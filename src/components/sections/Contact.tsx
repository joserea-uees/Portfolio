import { useState } from 'react'
import FadeIn from '../ui/FadeIn'
import Button from '../ui/Button'

const FORMSPREE_URL = 'https://formspree.io/f/TU_ID_AQUI'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 px-8 md:px-16 flex flex-col items-center text-center">
      <FadeIn>
        <p className="text-neutral-400 text-sm tracking-widest uppercase mb-3">
          Hablemos
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-neutral-400 max-w-md mx-auto mb-12">
          Escríbeme y hablamos sobre cómo puedo ayudarte a construirlo.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/50 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            required
            className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/50 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Cuéntame sobre tu proyecto"
            required
            rows={4}
            className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/50 transition-colors resize-none"
          />

            <Button type="submit" variant="primary">
                {status === 'sending' ? 'Enviando...' : status === 'sent' ? 'Enviado ✓' : 'Enviar mensaje'}
            </Button>               

          {status === 'error' && (
            <p className="text-red-400 text-sm">Hubo un error. Intenta de nuevo.</p>
          )}
        </form>
      </FadeIn>
    </section>
  )
}