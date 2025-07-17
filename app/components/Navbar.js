'use client';

import { useRouter } from 'next/navigation';
import style from '../styles/navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn'); 
    localStorage.removeItem('userLoggedIn');  
    router.push('/userlogin'); 
  };

  return (
    <nav className={style.navbar}>
      <ul style={{ display: 'flex', gap: '20px', padding: 0, listStyle: 'none', alignItems: 'center' }}>
        <li className={style.navItem}>
          <Link href="/" className={style.link}>Home</Link>
        </li>
        <li className={style.navItem}>
          <Link href="#" className={style.link}>Help</Link>
        </li>
        <li className={style.navItem}>
          <Link href="#" className={style.link}>Search</Link>
        </li>
        <li className={style.navItem}>
          <Link href="#" className={style.link}>Cart</Link>
        </li>
        <li className={style.navItem}>
          <button onClick={handleLogout} className={style.logoutButton}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
