import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'
import { useAuth, useUser } from '@clerk/clerk-react'
import axios from 'axios'
import { toast } from 'react-toastify'
import JobCart from '../components/JobCart'

const Applications = () => {

  const { user } = useUser()
  const { getToken } = useAuth()

  const [isEdit, setIsEdit] = useState(false)
  const [resume, setResume] = useState(null)
  const [activeTab, setActiveTab] = useState('applied')
  const { backendUrl, userData, userApplications, fetchUserData, fetchUserApplications, savedJobIds, jobs } = useContext(AppContext)

  const updateResume = async () => {

    try {

      const formdata = new FormData()
      formdata.append('resume', resume)

      const token = await getToken()
      const { data } = await axios.post(backendUrl + '/api/users/update-resume', formdata,
        { headers: { Authorization: `Bearer ${token}` } }
      )

      if (data.success) {
        toast.success(data.message)
        fetchUserData()
      }
      else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error);
      toast(error.message)
    }

    setIsEdit(null)
    setResume(null)

  }

  useEffect(() => {
    if (user) {
      fetchUserApplications()
    }
  }, [user])

  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        <h2 className='text-xl font-semibold'>Your Resume</h2>
        <div className='flex gap-2 mb-6 mt-3'>
          {
            isEdit || userData && userData.resume === ''
              ? <>
                <label className='flex items-center' htmlFor="resumeUpload">
                  <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2'>{resume ? resume.name : 'Select Resume'}</p>
                  <input id='resumeUpload' onChange={e => setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
                  <img src={assets.profile_upload_icon} alt="" />
                </label>
                <button onClick={updateResume} className='bg-green-100 text-green-600 px-4 py-2 rounded-lg '>Save</button>
              </>
              : <div className='flex gap-2'>
                <a className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg' href={userData.resume} target='_blank'>Resume</a>
                <button onClick={() => setIsEdit(true)} className='tex-gray-500 border border-gray-300 rounded-lg px-4 py-2'>Edit</button>
              </div>
          }
        </div>
        <div className='flex gap-6 border-b border-gray-200 mb-6'>
          <button 
            onClick={() => setActiveTab('applied')} 
            className={`pb-3 text-lg font-medium border-b-2 transition-all ${activeTab === 'applied' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            Jobs Applied
          </button>
          <button 
            onClick={() => setActiveTab('saved')} 
            className={`pb-3 text-lg font-medium border-b-2 transition-all ${activeTab === 'saved' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            Saved Jobs ({savedJobIds.length})
          </button>
        </div>

        {activeTab === 'applied' ? (
          <div>
            <table className='min-w-full bg-white border rounded-lg'>
              <thead>
                <tr>
                  <th className='py-3 px-4 border-b text-left'>Company</th>
                  <th className='py-3 px-4 border-b text-left'>Job Title</th>
                  <th className='py-3 px-4 border-b text-left max-sm:hidden'>Location</th>
                  <th className='py-3 px-4 border-b text-left max-sm:hidden'>Date</th>
                  <th className='py-3 px-4 border-b text-left'>Status</th>
                </tr>
              </thead>
              <tbody>
                {userApplications.map((job, index) => true ? (
                  <tr key={index}>
                    <td className='py-3 px-4 flex items-center gap-2 border-b'>
                      <img className='w-8 h-8' src={job.companyId.image} alt="" />
                      {job.companyId.name}
                    </td>
                    <td className='py-2 px-4 border-b'>{job.jobId.title}</td>
                    <td className='py-2 px-4 border-b max-sm:hidden'>{job.jobId.location}</td>
                    <td className='py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('ll')}</td>
                    <td className='py-2 px-4 border-b'>
                      <span className={`${job.status === 'Accepted' ? 'bg-green-100' : job.status === 'Rejected' ? 'bg-red-100' : 'bg-blue-100'} px-4 py-1.5 rounded `}>
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ) : (null))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            {jobs.filter(job => savedJobIds.includes(job._id)).length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {jobs.filter(job => savedJobIds.includes(job._id)).map((job, index) => (
                  <JobCart key={index} job={job} />
                ))}
              </div>
            ) : (
              <div className='text-center py-10 bg-slate-50 border rounded-xl border-dashed border-slate-200'>
                <p className='text-slate-500'>You haven't saved any jobs yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Applications
