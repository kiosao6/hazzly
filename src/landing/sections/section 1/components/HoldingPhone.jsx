
import { useEffect } from 'react'
import gsap from "gsap";

import background from '/src/images/Background.png'


export const HoldingPhone = () => {

  useEffect(() => {
    gsap.to('#phone', 1, {
      scale: 1,
      opacity: 1,
      duration: 2.5,
      ease: "power3.out",
      delay: .9
  })
  }, [])
  return (
    <div id="phone" className="bg-[#BBBFF2] scale-50 opacity-0 rounded-3xl lg:grid">
        <div  className="mx-auto bg-bg-phone size-64 bg-center bg-no-repeat bg-cover w-auto h-[30rem] max-w-[23rem] rounded-3xl lg:bg-none lg:h-auto lg:w-auto">
            <img className="hidden rounded-3xl lg:block " src={background} alt="" />
        </div>
    </div>
  )
}