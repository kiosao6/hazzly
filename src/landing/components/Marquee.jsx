import '../../../src/keyframes.css'


export const Marquee = () => {

  return (
    <>
        <div className="relative mt-7 bg-white text-dark py-[15px] font-semibold text-xl uppercase overflow-hidden ">
            <div className="flex w-fit flex-auto flex-row">
                <span className="marqueeText animate-moveText flex items-center shrink-0 px-[15px]">
                     30 days free trial subscription for new users
                </span>
                <span className="marqueeText animate-moveText flex items-center shrink-0 px-[15px]">
                    30 days free trial subscription for new users
                </span>
                <span className="marqueeText animate-moveText flex items-center shrink-0 px-[15px]">
                     30 days free trial subscription for new users
                </span>
                <span className="marqueeText animate-moveText flex items-center shrink-0 px-[15px]">
                    30 days free trial subscription for new users
                </span>
            </div>
        </div>
    </>
  )
}