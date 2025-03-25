import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import styles from './DataForm.module.css';

const DataForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dataUrl, setDataUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/data', { title, description, dataUrl });
      setMessage('Dataset created successfully!');
      setTitle('');
      setDescription('');
      setDataUrl('');
    } catch (error) {
      console.error('Error creating dataset:', error);
      setMessage('Failed to create dataset.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Add New Dataset</h2>
      {message && <p className={styles.message}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="dataUrl">Data URL:</label>
          <input
            type="url"
            id="dataUrl"
            value={dataUrl}
            onChange={(e) => setDataUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataForm;
