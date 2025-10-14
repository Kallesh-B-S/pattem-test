import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { JobsContext } from '../context/JobsContext';

function Job() {
    const { jobs, setApplied, applied } = useContext(JobsContext);
    const { jobid } = useParams();

    const jid = Number(jobid);
    const job = jobs.find(x => x.id === jid);

    // ✅ FIXED: canApply should return a boolean and take jid
    const canApply = (id) => {
        return !applied.some(obj => obj.id === id);
    };

    const isAllowedToApply = canApply(jid);

    const handleApply = () => {
        if (isAllowedToApply) {
            setApplied(prev => [...prev, { id: jid }]);
        }
    };

    return (
        <>
            {
                job ? (
                    <div className='bg-gray-300 mt-10 mx-12 py-10 rounded-lg'>
                        <h1 className='font-serif text-2xl ml-10'>Job Description</h1>
                        <div className='mt-2 ml-10 text-xl'><span className='font-bold'>Title</span>: {job.title}</div>
                        <div className='mt-2 ml-10 text-xl'><span className='font-bold'>Company</span>: {job.company}</div>
                        <div className='mt-2 ml-10 text-xl'><span className='font-bold'>Location</span>: {job.location}</div>
                        <div className='mt-2 ml-10 text-xl'><span className='font-bold'>Description</span>: {job.description}</div>

                        <button
                            onClick={handleApply}
                            disabled={!isAllowedToApply}
                            className={`ml-10 ${isAllowedToApply ? 'bg-green-300' : 'bg-gray-500'} text-white rounded-lg p-2 flex justify-center items-center mt-2`}
                        >
                            {isAllowedToApply ? 'Apply Now' : 'Applied'}
                        </button>
                    </div>
                ) : (
                    <div className='mx-auto text-2xl text-center mt-10'>No data Found</div>
                )
            }
        </>
    );
}

export default Job;
