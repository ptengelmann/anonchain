// client/src/components/Dashboard.tsx
import React from 'react';
import styles from './Dashboard.module.css';

interface DataCardProps {
  title: string;
  value: string;
  description: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, value, description }) => {
  return (
    <div className={styles.dataCard}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardValue}>{value}</p>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

const Dashboard: React.FC = () => {
  // Placeholder summary data for the marketplace.
  const summaryData = [
    {
      title: 'Total Datasets',
      value: '150',
      description: 'Datasets available in the marketplace.',
    },
    {
      title: 'Transactions Today',
      value: '25',
      description: 'Data transactions processed today.',
    },
    {
      title: 'Total Revenue',
      value: '$12,500',
      description: 'Revenue from data trades.',
    },
  ];

  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.dashboardHeader}>Dashboard</h2>
      <p className={styles.dashboardIntro}>
        Welcome to your dashboard. This is a protected route.
      </p>
      <div className={styles.cardGrid}>
        {summaryData.map((data, index) => (
          <DataCard
            key={index}
            title={data.title}
            value={data.value}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
