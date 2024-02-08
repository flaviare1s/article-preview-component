import './App.css'
import image from './assets/drawers.jpg'
import imageDesktop from './assets/drawers-desktop.jpg'
import { AvatarComponent } from './components/AvatarComponent'
import { ShareComponent } from './components/ShareComponent'
import { useState, useEffect } from 'react'

export function App() {
  const [showShare, setShowShare] = useState(false)
  const [showAvatar, setShowAvatar] = useState(true)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='bg-lightGrayishBlue font-Manrope min-h-screen flex flex-col items-center justify-center m-auto'>
      <div className={`h-full w-11/12 my-auto sm:w-full sm:max-w-2xl sm:h-280 sm:grid sm:grid-cols-3 rounded-lg shadow-lg ${isLargeScreen ? 'overflow-visible' : 'overflow-hidden'}`}>
        <div className='sm:col-span-1'>
          <img className='sm:hidden max-w-full h-auto rounded-t-lg' src={ image } alt="Drawers picture" />
          <img className='hidden sm:block sm:w-285 sm:h-280 sm:rounded-l-lg' src={ imageDesktop } alt="Drawers picture" />
        </div>
        
        <div className='sm:col-span-2 sm:h-280'>
          <div className='bg-white lg:rounded-tr-lg'>
            <h1 className='text-veryDarkGrayishBlue font-bold leading-6 px-8 pt-9 pb-4 tracking-wide sm:text-xl sm:tracking-wider'>
              Shift the overall look and feel by adding these wonderful
              touches to furniture in your home
            </h1>
            <p className='px-8 pb-3 text-13 leading-5 text-desaturatedDarkBlue tracking-normal'>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips
              to help you make any room feel complete.
            </p>
          </div>
          <div>
            <AvatarComponent className='lg:flex' setShowShare={setShowShare} showAvatar={showAvatar} setShowAvatar={setShowAvatar}/>
            {showShare && <ShareComponent setShowShare={setShowShare} setShowAvatar={setShowAvatar}/>}
          </div>
        </div>
      </div>

      <div className='text-xs'>
        Challenge by <a className='text-blue-500' href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a className='text-blue-500' href="https://github.com/flaviare1s/">Flávia Reis</a>.
      </div>
    </div>
  )
}
