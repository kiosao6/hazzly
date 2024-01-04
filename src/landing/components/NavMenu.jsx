import { NavLink } from "react-router-dom"




export const NavMenu = () => {
  return (
    <nav className="hidden items-center sm:flex">
        <div className="flex gap-8 text-gray-text text-sm">
            <NavLink className="hover:text-white" to="/">Home</NavLink>
            <NavLink className="hover:text-white" to="/features">Features</NavLink>
            <NavLink className="hover:text-white" to="/pricing">Pricing</NavLink>
            <NavLink className="hover:text-white" to="/faq">FAQ</NavLink>
        </div>
    </nav>
  )
}