import React, { useEffect } from 'react';
// React Components
import Header from '../components/Header'
import Bio from '../components/Bio'
import Project from '../components/Project'

// Project JSON Files
import recreation from '../content/recreation.json'
import consume from '../content/consume.json'
import sendblue from '../content/sendblue.json'

const Home = () => {
  useEffect(() => {
    document.title = 'Alec W.'
  }, [])

  const projects = [sendblue, consume, recreation]

  return (
    <div className='p-6 space-y-4'>
      <Header/>
      <Bio />
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </div>
  )
}

export default Home