import { useLayoutEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CTA } from "../../components/CTA"
import group from '/src/images/group6.png'


export const SectionTwo = () => {
    const text = useRef()
    const section = useRef()
    const image = useRef()
    const heading = useRef()
    const title = useRef()
    const cta = useRef()
    
    useLayoutEffect( () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(cta.current, {
          scrollTrigger: {
              trigger: section.current,
              scrub: true,
              start: "top bottom",
              end: "bottom-=50px bottom",

          },
          opacity: 1,
          right: 0,
          ease: "power3.Out"
      })
      gsap.to(title.current, {
          scrollTrigger: {
              trigger: section.current,
              scrub: true,
              start: "top bottom",
              end: "bottom-=50px bottom",

          },
          opacity: 1,
          right: 0,
          ease: "power3.Out"
      })
      gsap.to(text.current, {
          scrollTrigger: {
              trigger: section.current,
              scrub: true,
              start: "top bottom",
              end: "bottom-=50px bottom",

          },
          opacity: 1,
          right: 0,
          ease: "power3.Out"
      })

      gsap.to(heading.current, {
          scrollTrigger: {
              trigger: section.current,
              scrub: true,
              start: "top bottom",
              end: "bottom-=50px bottom",

          },
          opacity: 1,
          right: 0,
          ease: "power3.Out"
      })
      gsap.to(image.current, {
          scrollTrigger: {
              trigger: section.current,
              scrub: true,
              start: "top bottom",
              end: "bottom-=50px bottom",
          },
          scale: 1,
          opacity: 1,
          left: 0,
          ease: "power3.Out"
      })
      
  }, [])
  return (
    <section ref={section} className="section py-14 mx-8 relative z-10">
          <div className="overflow-hidden md:flex md:flex-row md:justify-evenly max-w-8xl mx-auto">
            <div ref={image} className="scale-75 relative opacity-0 -left-[200px] bg-[#BBBFF2] flex justify-center items-center rounded-3xl mb-8 lg:px-12">
                    <img className="w-80 mx-auto rounded-3xl sm:max-w-[20rem] md:w-auto md:max-w-[30rem] md:max-h-[30rem]" src={group} alt="" />
            </div>
            <div className="relative flex flex-col mb-8 md:max-w-sm md:pl-8 lg:pl-0">
                <span ref={title} className="relative opacity-0 -right-[100px] uppercase mb-2 text-gray-text font-medium tracking-wider text-xs ">about hazzly</span>
                <div className="relative flex flex-col gap-6 mb-8">
                    <h2 ref={heading} className="relative opacity-0 -right-[200px] z-20 text-3xl font-bold tracking-tight text-white sm:text-4xl">Stay organized and increase productivity</h2>
                    <p ref={text} className="relative opacity-0 -right-[300px] z-20 text-gray-text font-normal text-md leading-7">Our task manager allows you to stay on top of your deadlines, reducing stress and ensuring that you have a clear picture of your progress. Messaging system and task assingment features  make it easy to collaborate with your team, ensuring that everyone is on the same page and working towards the same goals.</p>
                </div>
                <div ref={cta} className="relative opacity-0 -right-[400px]">
                  <CTA color="white" />
                </div>
            </div>
          </div>
    </section>
  )
}