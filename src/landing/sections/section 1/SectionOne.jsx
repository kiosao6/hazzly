import { TextAndButtons, UsersBadged } from "./components"
import { HoldingPhone } from "./components/HoldingPhone"



export const SectionOne = () => {
  return (
    <section id="main" className="section py-7 px-8 sm:max-w-2xl sm:mx-auto lg:grid lg:grid-cols-6 lg:mx-auto">
          
            <TextAndButtons />

          <HoldingPhone />

        <UsersBadged />
    </section>
  )
}