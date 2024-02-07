import share from '../assets/icon-share.svg'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'


export const ShareComponent = () => {
  return (
    <div className='hidden flex justify-between items-center p-8 bg-veryDarkGrayishBlue text-white'>
        <div className='flex justify-start items-center gap-3'>
        <p className='tracking-widest text-13 text-desaturatedDarkBlue'>SHARE</p>
        <img src={ facebook } alt="Facebook Icon" />
        <img src={ twitter } alt="Twitter Icon" />
        <img src={ pinterest } alt="Pinterest Icon" />
        </div>
        <div><img className='bg-desaturatedDarkBlue text-white p-2 rounded-full' src={ share } alt="Share Icon" /></div>
    </div>
  )
}
