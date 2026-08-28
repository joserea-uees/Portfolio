export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center">
      <span className="text-lg font-bold text-white">Jose Rea</span>
      <ul className="hidden md:flex gap-8 text-sm text-neutral-300">
        <li><a href="#projects" className="hover:text-white transition-colors">Proyectos</a></li>
        <li><a href="#about" className="hover:text-white transition-colors">Sobre mí</a></li>
        <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
      </ul>
    </nav>
  )
}