import { Accordion2 } from "../Accordion2"
import { motion } from "framer-motion"


export const FAQ = () => {
  return (
    <motion.div 
        className="bg-dark my-16 sm:my-32"
        initial= {{ opacity: 0, y: 40, scale: .95 }}
        animate= {{ opacity: 1, y: 0, scale: 1 }}
        exit={{opacity: 0, y: 40, scale: .95}}
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-lila">FAQ</h2>
          <h2 className="text-3xl mt-2 font-bold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-6 text-md leading-8 text-gray-text">Our Frequently Asked Questions (FAQ) section is designed to address common queries and provide quick, informative answers to streamline your experience.</p>
        </div>
      </div>

      <Accordion2 />
    
    
    </motion.div>
  )
}