import '/src/index.css'

import { Marquee } from "./components/Marquee"
import { SectionOne } from "./sections/section 1/SectionOne"
import { SectionTwo } from "./sections/section 2/SectionTwo"
import { SectionThree } from "./sections/section 3/SectionThree"
import { SectionFour } from "./sections/section 4/SectionFour"




export const LandingHome = () => {
  return (
    <>
      <SectionOne />
      <Marquee />
      <SectionTwo />
      <SectionThree/>
      <SectionFour />
    </>
  )
}