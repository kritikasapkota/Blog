'use client';
import '../styles/userNavbar.css';


export default function UserNavbar() {
  return (
    <nav className="user-navbar">
      <a href="/blogs">Blogs</a>
      <a href="/user/dashboard">My Dashboard</a>
    </nav>
  );
}

