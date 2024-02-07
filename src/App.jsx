import './App.css'
import image from './assets/drawers.jpg'
import imageDesktop from './assets/drawers-desktop.jpg'
import avatar from './assets/avatar-michelle.jpg'
import share from './assets/icon-share.svg'
import facebook from './assets/icon-facebook.svg'
import twitter from './assets/icon-twitter.svg'
import pinterest from './assets/icon-pinterest.svg'


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
            <div className='bg-white px-8 pt-4 pb-7 flex justify-between items-center'>
              <div className='flex justify-start items-center gap-5'>
                <div>
                  <img className='w-10 h-10 rounded-full' src={ avatar } alt="Michelle Appleton" />
                </div>
                <div>
                  <p className='text-veryDarkGrayishBlue text-13 font-bold leading-5 tracking-normal'>Michelle Appleton</p>
                  <p className='text-grayishBlue text-13 leading-5 tracking-normal'>28 Jun 2020</p>
                </div>
              </div>
              <div><img className='bg-lightGrayishBlue rounded-full text-center p-2' src={ share } alt="Share Icon" /></div>
            </div>
            <div className='hidden flex'>
              <p>SHARE</p>
              <img src={ facebook } alt="Facebook Icon" />
              <img src={ twitter } alt="Twitter Icon" />
              <img src={ pinterest } alt="Pinterest Icon" />
              <img src={ share } alt="Share Icon" />
            </div>
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
