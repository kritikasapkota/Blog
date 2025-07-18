'use client';
import '../styles/userNavbar.css';

import Link from 'next/link';
export default function UserNavbar() {
  return (
    <nav className="user-navbar">
      <Link href="/blogs">Blogs</Link>
      <Link href="/user/dashboard">My Dashboard</Link>
    </nav>
  );
}

