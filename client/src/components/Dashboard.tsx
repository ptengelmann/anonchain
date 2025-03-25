// client/src/components/Dashboard.tsx
import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard. This is a protected route.</p>
    </div>
  );
};

export default Dashboard;
