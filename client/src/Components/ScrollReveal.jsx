
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollReveal() {
  const containerRef = useRef(null)
  const stepsRef = useRef([])

  const steps = [
    {
      number: 1,
      title: "FIND THE COORPORATE ENTIRTY/FARMER THAT MEETS YOUR REQUIREMENTS",
      image: "Rectangle 104.png",
    },
    {
      number: 2,
      title: "SEND IMAGES OF YOUR CROP/ SEE THE QUALITY SHOWN",
      image: "Rectangle 129.png",
    },
    {
      number: 3,
      title: "CONTACT FARMER / ENTITY ",
      image: "Rectangle 130.png",
    },
    {
      number: 4,
      title: "SIGN CONTRACT AND TRACK ALL PAYMENTS, IF NOT MAINTAINED YOU MAY/ MAY BE BLACKLISTED",
      image: "Rectangle 131.png",
    },
  ]

  useEffect(() => {
    const container = containerRef.current
    const stepElements = stepsRef.current

    stepElements.forEach((step, index) => {
      gsap.set(step, { autoAlpha: 0, y: 50 })

      ScrollTrigger.create({
        trigger: step,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
        onEnter: () => gsap.to(step, { autoAlpha: 1, y: 0, duration: 0.5 }),
        onLeave: () => gsap.to(step, { autoAlpha: 0, y: -50, duration: 0.5 }),
        onEnterBack: () => gsap.to(step, { autoAlpha: 1, y: 0, duration: 0.5 }),
        onLeaveBack: () => gsap.to(step, { autoAlpha: 0, y: 50, duration: 0.5 }),
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className='bg-scrollbg'>
    <div ref={containerRef} className=" p-8 max-w-2xl mx-auto">
      <div className="relative">
        {steps.map((step, index) => (
          <div
            key={step.number}
            ref={el => stepsRef.current[index] = el}
            className="flex items-start mb-8 relative"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary3 text-white flex items-center justify-center text-xl font-bold z-10">
              {step.number}
            </div>
            <div className="ml-4 flex-grow">
              <div className={`h-2 ${index < 3 ? 'bg-green-600' : 'bg-yellow-600'} w-full mb-2`}></div>
              <h3 className="text-2xl font-bold text-primary3 mb-2">{step.title}</h3>
              <div className="p-4 ">
                <img src={step.image} alt={`Step ${step.number}`} className="w-full h-full object-cover rounded" />
              </div>
            </div>
            {index < 3 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-400" style={{ height: 'calc(100% + 2rem)' }}></div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}