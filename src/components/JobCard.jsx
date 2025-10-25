import React from 'react'
import { Link } from 'react-router-dom'

function JobCard({ job }) {
    return (
        <div className='bg-gray-400 w-[25%] rounded-lg flex flex-col py-4'>
            <div className='mx-auto font-bold'>{job.title}</div>
            <div className='mx-auto'><span className='font-bold'>company</span> : {job.company}</div>
            <div className='mx-auto'><span className='font-bold'>Location</span> : {job.location}</div>
            <div className='mx-auto'><span className='font-bold'>AI Match Score</span> : {job.ai_match_score}</div>
            <Link to={`jobs/${job.id}`} className='text-blue-600 mx-auto'>View</Link>
        </div>
    )
}

export default JobCard