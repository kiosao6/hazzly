import { useRef, useState } from "react";

export const UseToggleNavbar = () => {

    const first = useRef();
    const second = useRef();
    
    const [showMenu, setShowMenu] = useState(false);
    
    const showMobileNavbar = () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.classList.add('hidden'));

        setShowMenu((prev) => !prev);
        // document.body.classList.toggle("!overflow-y-hidden")
        first.current.classList.add('rotate-45', 'absolute');
        second.current.classList.add('-rotate-45');
        
        // close menu if showMenu is true by calling function below 
        
        showMenu && closeMobileNavbar();
      }
      
      const closeMobileNavbar = () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.classList.remove('hidden'));

        // document.body.classList.remove("!overflow-y-hidden");
        first.current.classList.remove('rotate-45', 'absolute');
        second.current.classList.remove('-rotate-45');
        setShowMenu(false);
    }

  return {
    first, second,
    showMenu,
    showMobileNavbar,
    closeMobileNavbar
  }
}