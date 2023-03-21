import React from 'react'
import { FC } from 'react'
// import { Link } from 'react-router-dom'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import headshot from '../images/headshot.jpg'
import linkPng from '../images/resume.png'
import links from '../content/links.json'


const Header:FC = () => {
  return (
    <div className='flex flex-wrap gap-5 bg-slate-100 p-5 rounded-lg'>
      <img 
        style={{ minWidth: '200px', minHeight: '200px', maxWidth: '200px', maxHeight: '200px'}} className='w-1/5 h-1/5 object-contain overflow-hidden rounded-full' 
        src={headshot} alt="Headshot"
      />
      

      {/* Right side */}
      <div className='flex flex-col gap-1'>
        {/* Name + Logos */}
        <div className="flex items-center gap-2">
          <h1 className='text-4xl'> <b>Alec Watts</b> </h1>

          <a href={links.github} rel="noopener noreferrer" target="_blank">
            <img src={github} alt="GitHub Logo" width="30" />
          </a>

          <a href={links.linkedin} rel="noopener noreferrer" target="_blank">
            <img src={linkedin} alt="LinkedIn" width="30" />
          </a>
        </div>

        <h5 className='text-lg'>ahwatts@umich.com <br /> 310-922-1006</h5>

        <a className='flex items-center' href={links.resume} target="_blank" rel="noreferrer">
          <h5 className='text-lg'>Resume</h5>
          <img className='ml-1 w-6 h-6 object-contain' src={linkPng} alt="Open Window" />
        </a>
      </div>
      <p>
        Check out the <a className='underline' href={links.website_github} target="_blank" rel="noreferrer">React repository</a> for this website! Below you can find the projects I have been working on... Please reach out if you have any questions or would like to collaborate!
      </p>
    </div>
  )
}

export default Header