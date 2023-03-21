import React from 'react'
import { FC } from 'react'

const Bio:FC = () => {
  return (
    <div className='bg-slate-100 p-5 rounded-lg'>
        Hi! Check out the  <a className='underline' href="https://github.com/alec-watts/react-alecwatts.life" target="_blank" rel="noreferrer">React code</a> for this website. Below you can find the projects I have been working on with a story of their creation... Please reach out if you have any questions or would like to collaborate!
        <br />
        <br />
        I was born and raised in Los Angeles, California. I am currently a senior studying Computer Science at the University of Michigan, looking for full-time opportunities starting in Summer 2023!
    </div>
  )
}

export default Bio