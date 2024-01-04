import { Phones } from "./components/Phones"
import { Texts } from "./components/Texts"




export const SectionFour = () => {
  return (
    <>
      <section className="py-14 mx-8 lg:max-w-4xl lg:mx-auto">
        <Texts />
        <Phones />
      </section>
    </>
  )
}