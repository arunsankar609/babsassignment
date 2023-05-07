import React from 'react'
import { Outlet } from 'react-router-dom'

const MessageBody = () => {
  return (
    <div className='w-[40%] bg-slate-500 text-white'>
        <Outlet/>
    </div>
  )
}

export default MessageBody