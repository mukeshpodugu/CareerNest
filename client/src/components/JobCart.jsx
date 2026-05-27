import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const JobCart = ({job}) => {

  const navigate = useNavigate()
  const { savedJobIds, toggleSaveJob } = useContext(AppContext)
  const isSaved = savedJobIds.includes(job._id)

  return (
    <div className='border p-6 shadow rounded hover:shadow-md transition-shadow bg-white'>
      <div className='flex justify-between items-center '>
        <img className='h-8' src={job.companyId.image} alt="" />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleSaveJob(job._id);
          }} 
          className='text-gray-400 hover:text-blue-600 transition-all p-1.5 rounded-full hover:bg-gray-100'
          title={isSaved ? "Remove Bookmark" : "Save Job"}
        >
          {isSaved ? (
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          )}
        </button>
      </div>
      <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
      <div className='flex items-center gap-3 text-xs mt-2'>
        <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>{job.location}</span>
        <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>{job.level}</span>
      </div>
      <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
      <div className='mt-4 flex gap-4 text-sm'>
        <button onClick={()=>{navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='bg-blue-600 text-white px-4 py-2 rounded'>Apply now</button>
        <button onClick={()=>{navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='text-gray-500 border border-gray-500 rounded px-4 py-2'>Learn more</button>
      </div>
    </div>
  )
}

export default JobCart
