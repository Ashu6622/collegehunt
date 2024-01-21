import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className='bg-gray-800 text-white select-none'>
      <div className='flex flex-col justify-center items-center p-6'>
        <div>
        <h1 className='sm:text-2xl text-sm'>Created By Ashutosh Roy</h1>
        </div>
        <div className='mt-8'>
          <h1 className='text-center sm:text-base text-xs mb-4'>Connect to me</h1>
          <ul className=' mt-2 flex gap-8 sm:text-4xl text-2xl'>
            <a href="https://www.linkedin.com/in/ashutosh-roy-6ba156244/" target='_blank' title='Linkedin' className='text-blue-500 bg-white rounded'> <GrLinkedin/></a><a href="https://twitter.com/royashutosh004" target='blank' title='_Twitter' className='text-blue-500'> <FaTwitter/></a><a href="https://github.com/Ashu6622" target='_blank'title='Github' className='rounded-lg'><FaGithub/></a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer