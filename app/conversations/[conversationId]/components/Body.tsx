import useConversation from '@/app/hooks/useConversation'
import { FullMessageType } from '@/app/types'
import React from 'react'
import { Message } from 'react-hook-form'

interface BodyProps{
  messages:FullMessageType[]
}

const Body:React.FC<BodyProps> = () => {

  return (
    <div className='flex-1 overflow-y-auto'>Body</div>
  )
}

export default Body