import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getJobList } from '../utils/API';

export const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (jobs.length !== 0) {
      return;
    }
    getJobList().then(data => {
      setJobs(data);
    });
  }, [jobs]);

  return (
    <ul>
      {jobs.map(item => {
        return (
          <li key={item.id}>
            <NavLink to={`/${item.id}`}>
              <p>{item.description}</p>
              <p>{item.name}</p>
              <p>{item.title}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
