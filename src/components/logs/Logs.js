import React, { useState, useEffect } from 'react';

import LogItem from './LogItem';
import PreLoader from '../layouts/PreLoader';

const Logs = () => {

    const [ logs, setLogs ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const getLogs = async () => {
        setLoading(true);

        const res = await fetch('/logs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }

    useEffect(() => {
        getLogs();
    }, [])

    if(loading){
        return(
            <PreLoader /> 
        )
    }
    return (
        <div className='container'>
       <ul className='collection with-header'>

           <li className='collection-header'>
               <h4 className='center'>System Logs</h4>
           </li>
            {!loading && logs.length ==0 ? (<h4>No logs to show</h4>) : (
                logs.map(log => <LogItem log={log} key={log.id} />)
            )}
       </ul>
       </div>
    )
}

export default Logs
