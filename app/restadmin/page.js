'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function RestAdminPage() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { imageUrl, price, description });
    alert('Food item submitted!');
  };

  return (
    <div className={styles.container}>
      <h2>Add Food Item</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
          className={styles.input}
        />
        <label className={styles.label}>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className={styles.input}
        />
        <label className={styles.label}>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          required
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>Save</button>
      </form>
    </div>
  );
}

