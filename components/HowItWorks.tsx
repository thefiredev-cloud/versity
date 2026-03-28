export default function HowItWorks() {
  const steps = [
    { number: '01', title: 'Define Learning Goals', description: 'Input skills, competencies, or certifications your learners need to achieve.' },
    { number: '02', title: 'AI Builds the Path', description: 'Versity generates a full adaptive curriculum — content, assessments, and pacing — for each individual learner.' },
    { number: '03', title: 'Track Mastery', description: 'Real-time dashboards show progress, predict completion, and flag learners who need intervention.' },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It <span className="text-[#ec4899]">Works</span></h2>
          <p className="text-[#94a3b8]">From goals to mastery — automatically.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#ec4899]/30 to-transparent z-10" />
              )}
              <div className="glass rounded-xl p-8">
                <div className="text-5xl font-bold text-[#ec4899]/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[#94a3b8]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
