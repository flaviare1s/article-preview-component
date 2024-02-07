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
    <div className='bg-lightGrayishBlue font-Manrope min-h-full flex flex-col items-center justify-center m-auto'>
      <div className='max-w-327 sm:flex sm:flex-row my-auto'>
        <div>
          <img className='sm:hidden w-screen' src={ image } alt="Drawers picture" />
          <img className='hidden sm:block' src={ imageDesktop } alt="Drawers picture" />
        </div>
      
        <div>
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
            <div className='bg-white p-8 flex justify-between items-center'>
              <div className='flex justify-start items-center gap-5'>
                <div>
                  <img className='w-10 h-10 rounded-full' src={ avatar } alt="Michelle Appleton" />
                </div>
                <div>
                  <p className='text-veryDarkGrayishBlue text-13 font-bold leading-5 tracking-normal'>Michelle Appleton</p>
                  <p className='text-grayishBlue text-13 leading-5 tracking-normal'>28 Jun 2020</p>
                </div>
              </div>
              <div><img src={ share } alt="Share Icon" /></div>
            </div>
            <div>
              <p>SHARE</p>
              <img src={ facebook } alt="Facebook Icon" />
              <img src={ twitter } alt="Twitter Icon" />
              <img src={ pinterest } alt="Pinterest Icon" />
              <img src={ share } alt="Share Icon" />
            </div>
          </div>
                </div>
        </div>

        <div>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded by <a href="#">Flávia Reis</a>.
        </div>
    </div>
  )
}
