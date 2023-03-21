import React from 'react'

const Education = () => {
  return (
    <div style={{backgroundColor: "rgb(251, 203, 4, 0.2)"}} className='bg-blue-100 p-5 rounded-lg'>
        <div className="flex items-center pb-4 space-x-4">
            <img className='w-12 h-12 object-contain' src={process.env.PUBLIC_URL + '/images/michigan.png'} alt="Logo"/>
            <div>
                <h1 className='text-2xl'>University Of Michigan</h1>
                <h3 className='text-xl'>BS in Computer Science</h3>
            </div>
        </div>
        <p><span className='font-bold'>GPA:</span> 3.55 / 4.00 </p>
        <p><span className='font-bold'>Coursework:</span>  Data Structures & Algorithms, Operating Systems, Intr. Artificial Intelligence, Web Systems, Intr. Computer Security, Foundations of Computer Science Theory, Conversational AI </p>
    </div>
  )
}

export default Education