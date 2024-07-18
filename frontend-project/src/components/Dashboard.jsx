import React from 'react';
import CreateShortURL from './CreateShortURL';
import URLTable from './URLTable';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <CreateShortURL />
      <URLTable />
    </div>
  );
}

export default Dashboard;
