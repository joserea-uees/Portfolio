import FadeIn from '../ui/FadeIn'

const skills = [
  'React', 'TypeScript', 'Tailwind CSS', 'Next.js',
  'Three.js', 'Framer Motion', 'Node.js', 'Git',
]

export default function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-16">
      <FadeIn>
        <p className="text-neutral-400 text-sm tracking-widest uppercase mb-3">
          Quién soy
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
          Sobre mí
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <FadeIn>
          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
            Soy desarrollador frontend enfocado en construir interfaces
            modernas, rápidas y con atención al detalle. Me interesa la
            intersección entre diseño e ingeniería: cómo una animación bien
            pensada o una micro-interacción pueden cambiar por completo la
            percepción de un producto.
          </p>
          <p className="text-neutral-500 text-base md:text-lg leading-relaxed mt-6">
            Actualmente enfocado en React, TypeScript y experiencias
            interactivas con Three.js. Siempre buscando aprender algo nuevo
            que valga la pena aplicar.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">
            Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm px-4 py-2 rounded-full border border-white/10 text-neutral-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}