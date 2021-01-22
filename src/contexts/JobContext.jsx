import React, {createContext, useState} from 'react';

export const JobContext = createContext({})

export default function JobContextProvider({children}) {
    const [jobList, setJobList] = useState(null)
    const [value, setValue] = useState(null)




    return(
        <JobContext.Provider value={{ jobList, setJobList, value, setValue}} >
            {children}
        </JobContext.Provider>
    )
}