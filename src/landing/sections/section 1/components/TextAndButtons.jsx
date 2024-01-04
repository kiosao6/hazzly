import { Apple } from "./logos/Apple"
import { Google } from "./logos/Google"



export const TextAndButtons = () => {
  return (
    <>
        <div id="texts" className="flex flex-col gap-6 sm:text-center lg:max-w-lg lg:text-left">
            <h1 className="text-white text-5xl tracking-tight font-bold leading-[1.2] lg:text-6xl lg:leading-[1.3]">
                Easy way to get full control of your tasks
            </h1>
            <p className="text-gray-text font-normal text-md leading-7">
                A powerful tool that can help you stay organized and manage your tasks efficiently. Take control of your tasks and achieve your goals with our new interface.
            </p>
        </div>

        <div id="social" className="my-8 w-full flex flex-shrink gap-4 sm:!justify-center lg:!justify-start">
            <Apple />
            <Google />
        </div>
    </>
  )
}