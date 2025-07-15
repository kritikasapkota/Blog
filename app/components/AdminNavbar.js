'use client';
import '../styles/adminNavbar.css'

export default function AdminNavbar() {
  return (
    <nav className="admin-navbar">
      <a href="/admin/dashboard">Dashboard</a>
      <a href="/admin/new-blog">New Blog</a>
      <a href="/blogs">All Blogs</a>
      <a href="/admin/manage-blogs">Manage Blogs</a>

    </nav>
  );
}
