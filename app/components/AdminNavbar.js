'use client';
import '../styles/adminNavbar.css'
import Link from 'next/link';
export default function AdminNavbar() {
  return (
    <nav className="admin-navbar">
      <Link href="/admin/dashboard">Dashboard</Link>
      <Link href="/admin/new-blog">New Blog</Link>
      <Link href="/blogs">All Blogs</Link>
      <Link href="/admin/manage-blogs">Manage Blogs</Link>

    </nav>
  );
}
