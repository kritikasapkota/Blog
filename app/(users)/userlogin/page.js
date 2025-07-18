'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';


export default function UserLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.length > 0) {
      localStorage.setItem('userLoggedIn', 'true');
      router.push('/');
    } else {
      alert('Enter username');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Login</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleLogin} className={styles.button}>
        Login
      </button>
    </div>
  );
}
