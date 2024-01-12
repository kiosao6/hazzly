
import { useEffect } from 'react'
import './index.css'
import { AppRouter } from './router/AppRouter'

function App() {

  useEffect( () => {
    (

      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  }, [])

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
