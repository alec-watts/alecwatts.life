import React, { useEffect } from 'react';
// React Components
import Header from '../components/Header'
import Bio from '../components/Bio'
import Project from '../components/Project'
import Education from '../components/Education';

// Project JSON Files
import recreation from '../content/recreation.json'
import consume from '../content/consume.json'
import sendblue from '../content/sendblue.json'
import umich_plugin from '../content/umich_plugin.json'

const Home = () => {
  useEffect(() => {
    document.title = 'Alec Watts'
  }, [])

  const projects = [umich_plugin, sendblue, consume, recreation]

  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-5xl p-6 space-y-4'>
        <Header/>
        {/* <Bio /> */}
        <h1 className='font-bold text-3xl'>Education</h1>
        <Education />
        <h1 className='font-bold text-3xl'>Work Experience</h1>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </div>
    
  )
}

export default Home