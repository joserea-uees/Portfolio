import { motion } from 'framer-motion'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={project.liveUrl || project.githubUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 mb-4">
        {/* Placeholder visual mientras no hay imagen real */}
        <div className="absolute inset-0 flex items-center justify-center text-neutral-600 text-sm">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : null}
        </div>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

        {project.featured && (
          <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-white text-black font-medium">
            Destacado
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-neutral-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-neutral-500 text-sm mt-1 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-3 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full border border-white/10 text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  )
}