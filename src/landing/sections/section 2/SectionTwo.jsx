import { CTA } from "../../components/CTA"

import group from '/src/images/group6.png'


export const SectionTwo = () => {
  return (
    <section className="py-14 mx-8">
          <div className="md:flex md:flex-row md:justify-evenly max-w-8xl mx-auto">
            <div className="bg-[#BBBFF2] flex justify-center items-center rounded-3xl mb-8 lg:px-12">
                {/* <div className="size-48 mx-auto bg-center bg-no-repeat bg-cover w-auto rounded-3xl"> */}
                    <img className="w-80 mx-auto rounded-3xl sm:max-w-[20rem] md:w-auto md:max-w-[30rem] md:max-h-[30rem]" src={group} alt="" />
                {/* </div> */}
            </div>
            <div className="flex flex-col mb-8 md:max-w-sm md:pl-8 lg:pl-0">
                <span className="uppercase mb-2 text-gray-text font-medium tracking-wider text-xs ">about the app</span>
                <div className="flex flex-col gap-6 mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Stay organized and increase productivity</h2>
                    <p className="text-gray-text font-normal text-md leading-7">Our task manager allows you to stay on top of your deadlines, reducing stress and ensuring that you have a clear picture of your progress. Messaging system and task assingment features  make it easy to collaborate with your team, ensuring that everyone is on the same page and working towards the same goals.</p>
                </div>
                <CTA color="white" />
            </div>
          </div>

    </section>
  )
}