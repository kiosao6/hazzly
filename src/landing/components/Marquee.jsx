import '../../../src/keyframes.css'


export const Marquee = () => {

  return (
    <>
        <section className="section relative mt-7 bg-white text-dark py-[25px] font-semibold text-xl uppercase overflow-hidden ">
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
        </section>
    </>
  )
}