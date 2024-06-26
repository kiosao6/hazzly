

import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { NavMenu } from './NavMenu'
import { MobileNavbar } from './MobileNavbar'
import { UseToggleNavbar } from '/src/hooks/UseToggleNavbar'
import { useEffect } from 'react'


export const NavBar = () => {


    const { first, second, showMenu, showMobileNavbar, closeMobileNavbar } = UseToggleNavbar(); 
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
          
          case "/pricing":
            return "Pricing - Hazzly";
          case "/features":
            return "Features - Hazzly";
          case "/faq":
            return "FAQ - Hazzly";

          default:
            return "Hazzly - An easy way to get control of your tasks";
        }
      };
    
    useEffect(() => {
      const title = getTitle();
      document.title = title;
    }, [location.pathname])   
    
    return (
        <>
        <header className="flex justify-between mt-7 mx-8 opacity-100 pb-4 border-b border-zinc-700 z-20">
            <div className='flex gap-10 items-center'>
                  <NavLink aria-label='Home Button' onClick={closeMobileNavbar} to="/" className="flex gap-x-4 items-center">
                      <svg width="30" height="30" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M20 0C8.9543 0 0 8.95432 0 20V280C0 291.046 8.9543 300 20 300H280C291.046 300 300 291.046 300 280V20C300 8.95432 291.046 0 280 0H20ZM106 99C102.134 99 99 102.134 99 106V194C99 197.866 102.134 201 106 201H194C197.866 201 201 197.866 201 194V106C201 102.134 197.866 99 194 99H106Z" fill="#C3B3EE"/>
                      </svg>
                      <span className='text-white font-satoshi mr-9 tracking-wide font-bold text-2xl hidden sm:block '>Hazzly</span>
                  </NavLink>
                <NavMenu />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5">
                <button className="text-white transition-all font-normal border px-5 py-3 rounded-[0.70rem] text-xs hover:bg-lila hover:border-lila hover:text-dark">
                    Sign In
                </button>
            
                    <button aria-label='Menu Button' onClick={showMobileNavbar} className="burguer-menu flex justify-center items-center sm:hidden">

                        <div className='flex flex-col gap-[.3rem] justify-start relative'>
                            <div ref={first} className='w-[25px] h-[0.8px] bg-white transition-all'>
                                
                            </div>
                            <div ref={second} className='w-[25px] h-[0.8px] bg-white transition-all'>
                                
                            </div>
                        </div>
                    </button>
            </div>
        </header>
        
        {showMenu && <MobileNavbar closeMobileNavbar={closeMobileNavbar} />}

        <Outlet />
        <Footer />
    
    </>
  )
}