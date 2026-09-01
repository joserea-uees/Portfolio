export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}
