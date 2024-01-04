import { useRef, useState } from "react";

export const UseToggleNavbar = () => {

    const first = useRef();
    const second = useRef();

    const [showMenu, setShowMenu] = useState(false);

    const showMobileNavbar = () => {
        setShowMenu((prev) => !prev);
        document.body.classList.toggle("!overflow-y-hidden")
        first.current.classList.add('rotate-45', 'absolute');
        second.current.classList.add('-rotate-45');
        console.log('añadido')

        // close menu if showMenu is true by calling down function

        showMenu && closeMobileNavbar();
    }

    const closeMobileNavbar = () => {
        console.log('quitado')
        document.body.classList.remove("!overflow-y-hidden");
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