import './App.css'
import image from './assets/drawers.jpg'
import avatar from './assets/avatar-michelle.jpg'
import share from './assets/icon-share.svg'
import facebook from './assets/icon-facebook.svg'
import twitter from './assets/icon-twitter.svg'
import pinterest from './assets/icon-pinterest.svg'


export function App() {

  return (
    <div className='bg-lightGrayishBlue font-Manrope'>
      <div>
        <div>
          <img src={ image } alt="Drawers picture" />
        </div>
      
        <div>
          <h1>
            Shift the overall look and feel by adding these wonderful
            touches to furniture in your home
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps
            it felt slightly bare and uninviting. I’ve got some simple tips
            to help you make any room feel complete.
          </p>
        </div>
      
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

        <div>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded by <a href="#">Flávia Reis</a>.
        </div>
    </div>
  )
}
