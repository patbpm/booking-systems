import React from 'react';
import {Link} from 'react-router-dom';
import avatar from '../../images/avatar.png'

const Navbar = () => {
  const links = [
    {name: 'First link', to: '/'},
    {name: 'Second link', to: '/'},
  ]
  return (
    <nav className="fixed w-screen bg-green-500 h-16 flex items-center">
      <div className="w-full flex justify-between items-center px-4">
        <div className="text-white font-bold">ABS</div>
        <div className="md:hidden text-white text-2xl">
          &#9776;
        </div>
        <div className="hidden md:flex">
          {links.map((link, index) => {
            return <Link key={index} to={link.to} className="text-white px-2">{link.name}</Link>
          })}
        </div>
        <div className="hidden md:inline">
          <div className="flex items-center text-white">
            <img src={avatar} alt="avatar" className="h-8 w-8" />
            Staff name
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;