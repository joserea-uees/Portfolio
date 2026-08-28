import FadeIn from '../ui/FadeIn'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 md:px-16">
      <FadeIn>
        <p className="text-neutral-400 text-sm tracking-widest uppercase mb-3">
          Trabajo seleccionado
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
          Proyectos
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}