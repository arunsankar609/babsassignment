import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [tabColor, setTabColor] = useState("")

  const handleClick = (event) => {
    const id = event.target.id
    setTabColor(id)
  }

  return (
    <div className='bg-slate-400 w-[20%] h-[100vh]'>
      <h1 className='font-semibold'>Mailbox</h1>
      <div className='p-2 m-3 text-xl'>
        <Link to="/">
          <h1
            id="inbox"
            onClick={handleClick}
            className={tabColor === "inbox" ? "bg-green-500 text-white p-2 m-3 border border-red-400" : "p-2 m-3 border border-red-400"}
          >
            Inbox
          </h1>
        </Link>
        <Link to="/favorites">
          <h1
            id="favorites"
            onClick={handleClick}
            className={tabColor === "favorites" ? "bg-green-500 text-white p-2 m-3 border border-red-400" : "p-2 m-3 border border-red-400"}
          >
            Favorites
          </h1>
        </Link>
        <h1 className="p-2 m-3 border border-red-400">Sent</h1>
      </div>
    </div>
  )
}

export default Sidebar
