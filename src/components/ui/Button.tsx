import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, href, onClick, variant = 'primary' }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full font-medium transition-all duration-300'
  const variants = {
    primary: 'bg-white text-black hover:bg-neutral-200',
    secondary: 'border border-white/20 text-white hover:border-white/50',
  }

  const classes = `${baseStyles} ${variants[variant]}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}