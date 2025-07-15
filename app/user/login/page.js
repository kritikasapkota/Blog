'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/userLogin.css';

export default function UserLogin() {
  const [u, setU] = useState('');
  const r = useRouter();

  const login = () => {
    if (u === 'user') {
      localStorage.role = 'user';
      r.push('/user/dashboard');
    } else {
      alert('Invalid');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>User Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={u}
          onChange={e => setU(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
