import { Routes, Route } from 'react-router-dom';
import { JobList } from 'pages/JobList';
import { DetailedJob } from 'pages/DetailedJob';
// import { lazy } from 'react';

export const App = () => {
  return (
    <Routes>
      <Route index element={<JobList />} />
      <Route path="/:jobId/" element={<DetailedJob />} />
    </Routes>
  );
};
