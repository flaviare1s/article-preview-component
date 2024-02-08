import avatar from '../assets/avatar-michelle.jpg'
import share from '../assets/icon-share.svg'

export const AvatarComponent = ({setShowShare, showAvatar, setShowAvatar}) => {
    const handleMouseEnter = () => {
        setShowShare(true)
        setShowAvatar(false)
      }

  return (
    <div className={`bg-white px-8 pt-4 pb-7 flex justify-between items-center lg:h-72 lg:rounded-r-lg ${showAvatar ? '' : 'hidden'}`}>
        <div className='flex justify-start items-center gap-5'>
        <div>
            <img className='w-10 h-10 rounded-full' src={ avatar } alt="Michelle Appleton" />
        </div>
        <div>
            <p className='text-veryDarkGrayishBlue text-13 font-bold leading-5 tracking-normal'>Michelle Appleton</p>
            <p className='text-grayishBlue text-13 leading-5 tracking-normal'>28 Jun 2020</p>
        </div>
        </div>
        <div>
            <button onMouseEnter={handleMouseEnter}><img className='bg-lightGrayishBlue rounded-full text-center p-2' src={ share } alt="Share Icon" /></button>
        </div>
    </div>
  )
}

