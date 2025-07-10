import style from '../styles/navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul style={{ display: 'flex', gap: '20px', padding: 0 }}>
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
      </ul>
    </nav>
  );
}
