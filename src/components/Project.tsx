import React from 'react'
import { FC } from 'react'
import link from '../images/link.png'


interface ProjectProps {
    name: string;
    position: string;
    link: string;
    logo: string;
    story: string;
}

const Project:FC<ProjectProps> = (props) => {
  return (
    <div className='bg-slate-100 p-5 rounded-lg'>
        <a className='flex items-center pb-4 space-x-4' href={props.link} target="_blank" rel="noreferrer">
          <img className='w-12 h-12 object-contain' src={process.env.PUBLIC_URL + '/images/' + props.logo} alt="Logo"/>
          <div>
            <div className="flex items-center">
              <h1 className='text-2xl'>{ props.name }</h1>
              <img className='ml-1 w-6 h-6 object-contain' src={link} alt="Open Window" />
            </div>
            <h3 className='text-xl'>{ props.position }</h3>
          </div>
          
        </a>
        <div className='flex pb-4 space-x-4'>
          
        </div>

        <div dangerouslySetInnerHTML={{ __html: props.story}}></div>
    </div>
  )
}

export default Project