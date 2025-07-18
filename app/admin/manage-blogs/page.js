'use client';
import { useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import '../../styles/manageBlogs.css';
import Image from "next/image";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.blogs || '[]');
    setBlogs(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = blogs.filter(b => b.id !== id);
    localStorage.setItem('blogs', JSON.stringify(updated));
    setBlogs(updated);
  };

  const handleEdit = (id) => {
    const title = prompt("Enter new title:");
    const desc = prompt("Enter new description:");
    const img = prompt("Enter new image filename:");
    if (title && desc && img) {
      const updated = blogs.map(b => b.id === id ? { ...b, title, desc, img } : b);
      localStorage.setItem('blogs', JSON.stringify(updated));
      setBlogs(updated);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="manage-container">
        <h2>Manage Blogs</h2>
        <div className="blog-grid">
          {blogs.map(b => (
            <div key={b.id} className="blog-card">
              <Image src={`/blogImages/${b.img}`} alt={b.title} />
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
              <div className="buttons">
                <button className="edit-btn" onClick={() => handleEdit(b.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(b.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
