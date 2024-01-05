
import background from '/src/images/Background.png'


export const HoldingPhone = () => {
  return (
    <div id="phone" className="bg-[#BBBFF2] rounded-3xl lg:grid">
        <div  className="mx-auto bg-bg-phone size-64 bg-center bg-no-repeat bg-cover w-auto h-[30rem] max-w-[23rem] rounded-3xl lg:bg-none lg:h-auto lg:w-auto">
            {/* <img className="hidden md:block" src="/src/portraits/bgstar2.png" alt="" /> */}
            <img className="hidden rounded-3xl lg:block " src={background} alt="" />
        </div>
    </div>
  )
}