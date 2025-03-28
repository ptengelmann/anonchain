// client/src/components/AboutUs.tsx
import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>About Us</h2>
      <p>This is a marketplace for anonymized data. We empower data owners and buyers by providing a secure, transparent platform for data transactions.</p>
    </div>
  );
};

export default AboutUs;
