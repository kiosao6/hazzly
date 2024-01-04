import { NavLink } from "react-router-dom"
import { ArrowLink } from "./ArrowLink"




export const MobileNavbar = ({closeMobileNavbar}) => {
  return (
    <>
    
        <nav className="bg-dark z-10 py-7 px-8 h-[100vh]">            
            <div className="flex flex-col gap-1">

                <NavLink onClick={closeMobileNavbar} to="/" className=" flex items-center py-2 border-b border-zinc-700 justify-between text-base text-gray-text font-medium">Home
                    <ArrowLink />
                </NavLink>

                <NavLink onClick={closeMobileNavbar} to="/features" className=" flex items-center py-2 border-b border-zinc-700 justify-between text-base text-gray-text font-medium">Features
                    <ArrowLink />
                </NavLink>

                <NavLink onClick={closeMobileNavbar} to="/pricing" className=" flex items-center py-2 border-b border-zinc-700 justify-between text-base text-gray-text font-medium">Pricing
                    <ArrowLink />
                </NavLink>

                <NavLink onClick={closeMobileNavbar} to="/faq" className=" flex items-center py-2 border-b border-zinc-700 justify-between text-base text-gray-text font-medium">FAQ
                    <ArrowLink />
                </NavLink>

            </div>
        </nav>
    </>
  )
}