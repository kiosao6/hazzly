import phone1 from '/src/images/iphone1.png'
import phone2 from '/src/images/Phone1.png'
import phone3 from '/src/images/iphone2.png'


export const Phones = () => {
  return (
    <div className="relative mx-auto flex justify-center mt-7 gap-4 text-dark py-[15px] font-medium text-xl uppercase overflow-hidden md:gap-10">
        <img className="w-40 sm:w-52 md:w-64" src={phone1} alt="" />
        <img className="w-40 sm:w-52 md:w-64" src={phone2} alt="" />
        <img className="w-40 sm:w-52 md:w-64" src={phone3} alt="" />
    </div>
  )
}