import './App.css'
import image from './assets/drawers.jpg'
import imageDesktop from './assets/drawers-desktop.jpg'
import { AvatarComponent } from './components/AvatarComponent'
import { ShareComponent } from './components/ShareComponent'


export function App() {

  return (
    <div className='bg-lightGrayishBlue font-Manrope min-h-screen flex flex-col items-center justify-center m-auto'>
      <div className='h-full w-11/12 my-auto sm:w-730 sm:h-280 sm:grid sm:grid-cols-3 overflow-hidden rounded-lg shadow-lg'>
        <div className='sm:col-span-1'>
          <img className='sm:hidden max-w-full h-auto rounded-t-lg' src={ image } alt="Drawers picture" />
          <img className='hidden sm:block sm:w-285 sm:h-280 sm:rounded-l-lg' src={ imageDesktop } alt="Drawers picture" />
        </div>
        
        <div className='sm:col-span-2 sm:h-280'>
          <div className='bg-white'>
            <h1 className='text-veryDarkGrayishBlue font-bold leading-6 px-8 pt-9 pb-4 tracking-wide sm:text-xl sm:tracking-wider'>
              Shift the overall look and feel by adding these wonderful
              touches to furniture in your home
            </h1>
            <p className='px-8 text-13 leading-5 text-desaturatedDarkBlue tracking-normal'>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips
              to help you make any room feel complete.
            </p>
          </div>
          <div>
            <AvatarComponent/>
            <ShareComponent/>
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
