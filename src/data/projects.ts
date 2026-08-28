import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Restaurante Baru',
    description: 'Aplicación web para la  gestión de pedidos de restaurante universitario.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    imageUrl: '/projects/project-1.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'App de finanzas personales',
    description: 'Aplicación para rastrear gastos e ingresos con gráficos interactivos y categorización automática.',
    tags: ['React', 'Chart.js', 'Firebase'],
    imageUrl: '/projects/project-2.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'Lorem Ipsum Generator',
    description: 'Lorem Ipsum Generator es una aplicación web que permite generar texto de relleno (Lorem Ipsum) de manera rápida y sencilla. Los usuarios pueden especificar la cantidad de párrafos, palabras o caracteres que desean generar, y la aplicación proporciona el texto correspondiente para su uso en diseño web, maquetación y pruebas de contenido.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    imageUrl: '/projects/project-3.jpg',
    liveUrl: '#',
    githubUrl: '#',
  }
  
]