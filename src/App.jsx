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
            <h1 className='text-veryDarkGrayishBlue font-bold leading-6 px-8 pt-9 pb-4'>
              Shift the overall look and feel by adding these wonderful
              touches to furniture in your home
            </h1>
            <p className='px-8 text-13 leading-5 text-grayishBlue'>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips
              to help you make any room feel complete.
            </p>
          </div>
          <div>
            <div>
              <div>
                <img src={ avatar } alt="Michelle Appleton" />
              </div>
              <p>Michelle Appleton</p>
              <p>28 Jun 2020</p>
              <img src={ share } alt="Share Icon" />
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
