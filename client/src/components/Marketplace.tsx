// client/src/components/Marketplace.tsx
import React from 'react';
import styles from './Marketplace.module.css';

const Marketplace: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Marketplace</h2>
      <p>Browse available datasets for purchase or trade.</p>
      {/* You can later add filters, search, and data listings here */}
    </div>
  );
};

export default Marketplace;
