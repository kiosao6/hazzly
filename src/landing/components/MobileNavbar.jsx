import { NavLink } from "react-router-dom"
import { ArrowLink } from "./ArrowLink"
import { Footer } from "./Footer"




export const MobileNavbar = ({closeMobileNavbar}) => {
  return (
    <>
    
        <nav className="bg-dark z-40 py-7 px-8 h-[80vh] flex flex-col justify-between">            
            <div className="flex flex-col gap-1">

                <NavLink onClick={closeMobileNavbar} to="/" className="link flex items-center py-2 border-b border-zinc-700 justify-between text-lg text-gray-text font-medium">Home
                    <ArrowLink />
                </NavLink>

                <NavLink onClick={closeMobileNavbar} to="/features" className="link delay-100 flex items-center py-2 border-b border-zinc-700 justify-between text-lg text-gray-text font-medium">Features
                    <ArrowLink />
                </NavLink>

                <NavLink onClick={closeMobileNavbar} to="/pricing" className="link delay-150 flex items-center py-2 border-b border-zinc-700 justify-between text-lg text-gray-text font-medium">Pricing
                    <ArrowLink />
                </NavLink>

                <NavLink onClick={closeMobileNavbar} to="/faq" className="link delay-200 flex items-center py-2 border-b border-zinc-700 justify-between text-lg text-gray-text font-medium">FAQ
                    <ArrowLink />
                </NavLink>

            </div>

            {/* <Footer /> */}
        </nav>
    </>
  )
}