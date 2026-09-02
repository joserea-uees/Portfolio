import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
}

export default function Button({ children, href, onClick, variant = 'primary', type = 'button' }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full font-medium inline-block'
  const variants = {
    primary: 'bg-white text-black',
    secondary: 'border border-white/20 text-white',
  }

  const classes = `${baseStyles} ${variants[variant]}`

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 },
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  )
}