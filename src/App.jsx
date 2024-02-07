import './App.css'
import image from './assets/drawers.jpg'
import avatar from './assets/avatar-michelle.jpg'
import share from './assets/icon-share.svg'
import facebook from './assets/icon-facebook.svg'
import twitter from './assets/icon-twitter.svg'
import pinterest from './assets/icon-pinterest.svg'


export function App() {

  return (
    <div>
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
          Michelle Appleton
          28 Jun 2020
          Share
        </div>
        <div>
          <img src={ share } alt="" />
          <img src={ facebook } alt="" />
          <img src={ twitter } alt="" />
          <img src={ pinterest } alt="" />
        </div>
      </div>

        <div>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded by <a href="#">Flávia Reis</a>.
        </div>
    </div>
  )
}
