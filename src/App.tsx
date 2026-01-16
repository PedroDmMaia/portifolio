import { Toaster } from 'sonner'
import About from './components/about'
import Contact from './components/contact'
import Experience from './components/experience'
import Hero from './components/Hero'
import NavBar from './components/navBar'
import Projects from './components/projects'
import Technologies from './components/technologies'

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300/20 selection:text-cyan-300">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          {/* Grid Pattern */}
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <NavBar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Pedro Maia. Todos os direitos reservados.
            </p>
            <p className="text-neutral-500 text-sm">
              Desenvolvido com ❤️ usando React + TypeScript
            </p>
          </div>
        </div>
      </footer>

      <Toaster position="top-right" richColors />
    </div>
  )
}

export default App
