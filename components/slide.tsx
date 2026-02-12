import type { ReactNode } from "react"

interface SlideProps {
  title: string
  subtitle?: string
  icon?: ReactNode
  children: ReactNode
}

export function Slide({ title, subtitle, icon, children }: SlideProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            {icon && <div className="bg-white p-3 rounded-lg text-black">{icon}</div>}
            <h1 className="text-4xl md:text-6xl tracking-tight font-semibold">{title}</h1>
          </div>
          {subtitle && <p className="text-xl md:text-2xl text-zinc-400 font-light">{subtitle}</p>}
        </div>
        <div className="text-lg leading-relaxed">{children}</div>
      </div>
    </section>
  )
}
