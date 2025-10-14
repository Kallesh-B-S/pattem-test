import React, { createContext, useState, useEffect } from 'react';
import {jobs as jobsArray} from '../data/jobs.js'

export const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applied , setApplied] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        console.log("checking data : ", );
        
        const data = jobsArray
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);


  return (
    <JobsContext.Provider
      value={{
        jobs,
        loading,
        setApplied,
        applied
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};
