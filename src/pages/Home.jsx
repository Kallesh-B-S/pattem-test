import React from 'react'
import JobCard from '../components/JobCard';
import { useContext } from 'react';
import { JobsContext } from '../context/JobsContext';

function Home() {
    const { jobs} = useContext(JobsContext);

    console.log(jobs);


    return (
        <>
            <div className='flex gap-5 mt-10 mx-12'>
                {
                    jobs.map(x => <JobCard job={x}/>)
                }
            </div>
        </>
    )
}

export default Home