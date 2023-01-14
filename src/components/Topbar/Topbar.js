import React from 'react'
import './Topbar.css'

function Topbar() {
  return (
    <div className='Topbar'>
    <div className='Logo'>
    <img className='Logoimage' src='https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr'/>
    </div>
    <div className='Search'>
    <input placeholder='search'/>
    </div>
    <div className='Options'>
    <ul className='Optionlist'>
    <li className='listitem'>About us</li>
    <li className='listitem'>Training and Education</li>
    <li className='listitem'>Downloads</li>
    <li className='listitem'>Media</li>
    <li className='listitem'>FAQs</li>
    <li className='listitem'>Careers</li>
    <li className='listitem'>English</li>
    </ul>
    </div>
    
    </div>
  )
}

export default Topbar