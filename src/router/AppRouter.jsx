import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { NavBar } from "../landing/components/NavBar"
import { LandingHome } from "../landing/LandingHome"
import { Features } from "../landing/components/links/Features"
import { Pricing } from "../landing/components/links/Pricing"
import { FAQ } from "../landing/components/links/FAQ"





export const AppRouter = () => {

    
    
    const routes = createBrowserRouter([

        {
            path: "/",
            element: <NavBar />,
            children: [
                {
                    index: true,
                    element: <LandingHome />
                },


                
                {
                    path: "/features",
                    element: <Features />
                },
        
                {
                    path: "/pricing",
                    element: <Pricing />
                },
        
                {
                    path: "/faq",
                    element: <FAQ />
                },

                

                // Ruta comodin
                {
                    path: "/*",
                    element: <Navigate to="/" />
                }
            ]
        },
    ], { basename: "/hazzly/" } )

    // { basename: "/hazzly/" }

    return <>
        <RouterProvider router={routes} />
    </>
    
}