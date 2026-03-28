'use client'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false })

export default function Hero() {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="hero-grid min-h-screen pt-16 flex items-center">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-20">
        <div className="order-2 md:order-1 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ec4899]/30 text-[#ec4899] text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] animate-pulse-glow"></span>
            Now in Private Beta
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Education<br />
            <span className="text-[#ec4899]">That Adapts</span>
          </h1>
          <p className="text-lg text-[#94a3b8] mb-8 leading-relaxed">
            Complete adaptive learning paths, assessments, and training — built by AI, personalized for every learner.
          </p>
          <div className="flex gap-4">
            <button
              onClick={scrollToCTA}
              className="px-6 py-3 bg-[#ec4899] text-white font-semibold rounded-lg hover:bg-[#ec4899]/90 transition-colors"
            >
              Get Early Access
            </button>
            <button className="px-6 py-3 border border-white/10 text-white rounded-lg hover:border-[#ec4899]/50 transition-colors">
              See Demo
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 h-[400px] md:h-[500px]">
          <Scene3D />
        </div>
      </div>
    </section>
  )
}
