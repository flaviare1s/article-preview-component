import shareWhite from '../assets/icon-share-white.svg'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'


export const ShareComponent = ({ setShowShare, setShowAvatar }) => {
    const handleMouseLeave = () => {
        setShowShare(false)
        setShowAvatar(true)
      }

    
  return (
    <div className='lg:relative'>
        <div  onMouseLeave={handleMouseLeave} className='flex justify-between items-center py-6 px-8 bg-veryDarkGrayishBlue lg:justify-center lg:h-67 lg:w-248 lg:rounded-xl lg:absolute lg:right-0 lg:translate-x-20 lg:bottom-4 lg:z-50'>
            <div className='lg:w-6 lg:h-6 lg:absolute lg:top-14 lg:bg-veryDarkGrayishBlue lg:rotate-45 lg:z-10'/>
            <div className='flex justify-start items-center gap-3'>
            <p className='tracking-widest text-13 text-desaturatedDarkBlue'>SHARE</p>
            <a href="#"><img src={ facebook } alt="Facebook Icon" /></a>
            <a href="#"><img src={ twitter } alt="Twitter Icon" /></a>
            <a href="#"><img src={ pinterest } alt="Pinterest Icon" /></a>
            </div>
            <div>
                <button><img className='bg-desaturatedDarkBlue p-2 rounded-full lg:hidden' src={ shareWhite } alt="Share Icon" /></button>
            </div>
        </div>
    </div>
  )
}
