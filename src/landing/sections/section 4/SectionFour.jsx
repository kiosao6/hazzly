import { useLayoutEffect, useRef } from "react"
import { Phones } from "./components/Phones"
import { Texts } from "./components/Texts"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"




export const SectionFour = () => {
  const div = useRef()
  const section = useRef()

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(div.current, {
        scrollTrigger: {
            trigger: section.current,
            scrub: true,
            start: "top bottom",
            end: "center+=200px bottom",
        },
        scale: 1,
        opacity: 1,
        ease: "power3.Out"
    })


}, [])
  return (
    <>
      <section ref={section} className="section">
        <div ref={div} className="relative opacity-0 scale-75 py-14 mx-8 lg:max-w-4xl lg:mx-auto">
          <Texts />
          <Phones />
        </div>
      </section>
    </>
  )
}