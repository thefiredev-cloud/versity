import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <section className="py-12 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '4.8x', label: 'Faster Skill Mastery' },
            { value: '89%', label: 'Completion Rate' },
            { value: '500K+', label: 'Learners Served' },
            { value: '97%', label: 'Assessment Accuracy' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-[#ec4899]">{stat.value}</div>
              <div className="text-sm text-[#94a3b8] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
