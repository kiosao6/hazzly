import { TextAndButtons, UsersBadged } from "./components"
import { HoldingPhone } from "./components/HoldingPhone"



export const SectionOne = () => {
  return (
    // <section id="main" className="py-7 mx-8 max-w-8xl md:grid md:grid-cols-6">
    //     <div className="md:grid md:justify-evenly">
    //       <div className="flex flex-col md:grid">
    //         <TextAndButtons />
    //       </div>

    //       <HoldingPhone />
    //     </div>

    //     <UsersBadged />
    // </section>
    <section id="main" className="py-7 px-8 sm:max-w-2xl sm:mx-auto lg:grid lg:grid-cols-6 lg:mx-auto">
          
            <TextAndButtons />

          <HoldingPhone />

        <UsersBadged />
    </section>
  )
}