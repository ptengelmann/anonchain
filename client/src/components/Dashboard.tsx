// client/src/components/Dashboard.tsx
import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h2>Dashboard</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3>Your Data Listings</h3>
          <p>Manage and update your listed datasets.</p>
        </div>
        <div className={styles.card}>
          <h3>Recent Transactions</h3>
          <p>View your recent purchases or sales.</p>
        </div>
        <div className={styles.card}>
          <h3>Account Details</h3>
          <p>Manage your profile and settings.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
