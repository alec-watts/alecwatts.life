import React from 'react'
import { FC } from 'react'
// import { Link } from 'react-router-dom'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import headshot from '../images/headshot.jpg'

const Header:FC = () => {
  return (
    <div className='flex items-center gap-5 bg-slate-100 p-5 rounded-lg'>
      <img className='w-1/5 h-1/5 object-contain object-contain overflow-hidden rounded-full' src={headshot} alt="Headshot" />

      <div>
        <h1 className='text-4xl'> <b>Alec Watts</b> </h1>
        <h3>alecwatts1@gmail.com</h3>
        <h3>310-922-1006</h3>
        <a className='underline' href="https://drive.google.com/file/d/186pzIW6Fw6gQDf0TDNnCZvq_vZQeWMT4/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
        <div className="flex">
          <a href="https://github.com/alec-watts/">
            <img src={github} alt="GitHub Logo" width="30" />
          </a>

          <a href="https://www.linkedin.com/in/alexander-h-watts/">
            <img src={linkedin} alt="LinkedIn" width="30" />
          </a>
        </div>
      </div>

      
      {/* <Link to={'../Resume'}>Home</Link> */}
    </div>
  )
}

export default Header