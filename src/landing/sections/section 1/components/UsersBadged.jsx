

import users from '/src/images/portraits2.png'

export const UsersBadged = () => {
  return (
    <>
        <div id="badged" className="flex gap-3 mt-10 sm:justify-center lg:justify-start lg:mt-[4.5rem]">
            <div className="flex flex-col">
                <span className="text-lila font-bold text-5xl">1.2M</span>
                <span className="text-gray-text text-sm">Users already got the app</span>
            </div>
            <div className="flex items-center">
                <div className="flex bg-lila px-2 py-2 rounded-full items-center gap-4 justify-between">
                    <img className="min-w-16 w-60" src={users} alt="" />
                </div>
            </div>
        </div>


    </>
  )
}