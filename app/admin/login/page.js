'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/adminLogin.css'; 
import '../../styles/userNavbar.css';

export default function AdminLogin() {
  const [u, setU] = useState('');
  const [p, setP] = useState('');
  const r = useRouter();

  const login = () => {
    if (u === 'admin' && p === 'admin') {
      localStorage.role = 'admin';
      r.push('/admin/dashboard');
    } else alert('Invalid');
  };

  return (
    <div className="admin-login-container">
      <h2 className="admin-login-title">Admin Login</h2>
      <input
        className="admin-input"
        placeholder="Username"
        onChange={e => setU(e.target.value)}
      />
      <input
        className="admin-input"
        type="password"
        placeholder="Password"
        onChange={e => setP(e.target.value)}
      />
      <button className="admin-login-button" onClick={login}>
        Login
      </button>
    </div>
  );
}

