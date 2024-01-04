import { CTA } from "../../../components/CTA"



export const Texts = () => {
    const lila = "lila"
  return (
    <>
        <div className="flex mx-auto text-center flex-col gap-6 mb-8 md:text-center ">
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:max-w-xl md:mx-auto">
                Start your free trial today just in one click 
            </h3>
            <p className="text-gray-text font-normal text-md leading-7 mb-2 md:mx-auto">
                To get started with out task manager, simply sign up for an account and start creating tasks. You can assign tasks to yourself or other team members, set deadlines and reminders, and track progress.
            </p>

            <div className="flex justify-center items-center md:max-w-xs md:mx-auto">
                <CTA color={ lila } />
            </div>
        </div>
    </>
  )
}