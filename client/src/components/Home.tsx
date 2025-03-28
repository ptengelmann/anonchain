import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styles from './Home.module.css';

type DataSet = {
  _id: string;
  title: string;
  description: string;
  dataUrl: string;
  createdAt: string;
};

const Home: React.FC = () => {
  const [dataSets, setDataSets] = useState<DataSet[]>([]);

  useEffect(() => {
    axios
      .get<DataSet[]>('/api/data')
      .then((response: AxiosResponse<DataSet[]>) => {
        setDataSets(response.data);
      })
      .catch((error: unknown) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to AnonChain</h1>
      <p className={styles.subtitle}>
        Your secure and anonymous data marketplace
      </p>
      <ul>
        {dataSets.map((item) => (
          <li key={item._id}>
            <strong>{item.title}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
