'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { foodItems } from '../../data/foodData'; 

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@admin.com' && password === 'admin123') {
      
      localStorage.setItem('adminLoggedIn', 'true');

     
      const firstFoodId = foodItems?.[0]?.id || 'momo';

      
      router.push("/restadmin");
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{
      padding: '40px',
      maxWidth: '400px',
      margin: '80px auto',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Admin Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      <button
        onClick={handleLogin}
        style={{ width: '100%', padding: '10px', backgroundColor: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Login
      </button>
    </div>
  );
}








