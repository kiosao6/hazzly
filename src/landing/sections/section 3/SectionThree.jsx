import { Star } from "./components/Star"
import { Swiperr } from "./components/Swiper"




export const SectionThree = () => {
  return (
    <section className="section py-14 bg-white">
        <div className="flex px-8 flex-col mb-8 max-w-4xl md:justify-evenly md:mx-auto lg:px-0">
            <div className="flex justify-between">
              <div className="max-w-[30rem]">
                <span className="uppercase text-gray-500 font-medium tracking-wider text-xs ">features</span>
                <h2 className="text-3xl mb-6 font-bold tracking-tight text-gray-800 sm:text-4xl">Hazzly offers comprehensive features to help you stay on top of your tasks</h2>
              </div>
            <Star />
            </div>
            <Swiperr />
        </div>
    </section>
  )
}