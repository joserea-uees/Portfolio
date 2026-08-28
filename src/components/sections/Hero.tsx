import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative overflow-hidden">
      <p className="text-neutral-400 text-sm md:text-base tracking-widest uppercase mb-4">
        Desarrollador Frontend
      </p>

      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.95] tracking-tight">
        Construyo
        <br />
        experiencias
        <br />
        <span className="text-neutral-500">digitales.</span>
      </h1>

      <p className="text-neutral-400 text-base md:text-lg max-w-md mt-8 leading-relaxed">
        Diseño y desarrollo sitios web modernos, interactivos y con atención
        al detalle. Explora mis proyectos abajo.
      </p>

      <div className="flex gap-4 mt-10">
        <Button href="#projects">Ver proyectos</Button>
        <Button href="#contact" variant="secondary">Contáctame</Button>
      </div>
    </section>
  )
}