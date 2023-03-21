import React from 'react'
import { FC } from 'react'
import linkPng from '../images/link-img.png'


interface ProjectProps {
    name: string;
    position: string;
    link: string;
    video_link?: string;
    logo: string;
    color: string;
    technologies: string;
    story: string;
}
// bg-slate-100

const Project:FC<ProjectProps> = (props) => {
  return (
    <div style={{backgroundColor: props.color}} className='bg-blue-100 p-5 rounded-lg'>
        <a className='flex items-center pb-4 space-x-4' href={props.link} target="_blank" rel="noreferrer">
          <img className='w-12 h-12 object-contain' src={process.env.PUBLIC_URL + '/images/' + props.logo} alt="Logo"/>
          <div>
            <div className="flex items-center">
              <h1 className='text-2xl'>{ props.name }</h1>
              <img className='ml-1 w-6 h-6 object-contain' src={linkPng} alt="Open Window" />
            </div>
            <h3 className='text-xl'>{ props.position }</h3>
          </div>
          
        </a>
        <div className='flex pb-4 space-x-4'>
          
        </div>

        <p><span className='font-bold'>Skills: </span> { props.technologies  }</p>

        <br />


        {/* <span className='font-bold'>Product: </span> */}
        <div dangerouslySetInnerHTML={{ __html: props.story}}></div>


        { props.video_link &&
          <>
            <br />
            <div className='flex justify-center'>
              <iframe className='rounded-md overflow-hidden' width="560" height="315" src={props.video_link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
          </>
        }
    </div>
  )
}

export default Project