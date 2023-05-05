import { Icon } from '@iconify/react'
import avatar from '/avatar.jpeg'

export const User = () => {
  const userId = localStorage.getItem('userId')

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userId!)
  }

  return (
    <div className='flex flex-col items-center gap-2 w-full sm:max-w-xs'>
      <img
        src={avatar}
        alt='User profile picture'
        className='h-20 w-20 rounded-xl'
      />
      <p className='text-3xl'>Welcome</p>
      <p
        className='flex flex-row items-center bg-unleash text-white px-4 py-2 rounded cursor-pointer'
        title='Click to copy the userId to your clipboard'
        onClick={copyToClipboard}
      >
        <strong className='mr-1'>userId:</strong>
        {userId}
        <Icon icon='ic:round-content-copy' className='ml-2' />
      </p>
      <p className='text-sm text-center'>Click to copy to your clipboard</p>
      <p className='text-sm text-center'>
        You will need the userId for some of the steps of the demo
      </p>
    </div>
  )
}
