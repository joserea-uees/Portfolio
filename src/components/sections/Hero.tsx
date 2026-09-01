import { motion } from 'framer-motion'
import Button from '../ui/Button'
import HeroCanvas from '../three/HeroCanvas'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative overflow-hidden">
      <HeroCanvas />

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
        <motion.p variants={item} className="text-neutral-400 text-sm md:text-base tracking-widest uppercase mb-4">
          Desarrollador Frontend
        </motion.p>

        <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[0.95] tracking-tight">          Construyo
          <br />
          experiencias
          <br />
          <span className="text-neutral-500">digitales.</span>
        </motion.h1>

        <motion.p variants={item} className="text-neutral-400 text-base md:text-lg max-w-md mt-8 leading-relaxed">
          Diseño y desarrollo sitios web modernos, interactivos y con atención
          al detalle. Explora mis proyectos abajo.
        </motion.p>

        <motion.div variants={item} className="flex gap-4 mt-10">
          <Button href="#projects">Ver proyectos</Button>
          <Button href="#contact" variant="secondary">Contáctame</Button>
        </motion.div>
      </motion.div>
    </section>
  )
}