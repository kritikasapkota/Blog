'use client';
import { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import '../../styles/newBlog.css'; 

export default function NewBlog() {
  const [title, setT] = useState('');
  const [img, setI] = useState('');
  const [desc, setD] = useState('');

  const submit = () => {
    const B = JSON.parse(localStorage.blogs || '[]');
    B.push({ id: Date.now(), title, img, desc });
    localStorage.blogs = JSON.stringify(B);
    alert('Created');
    setT('');
    setI('');
    setD('');
  };

  return (
    <>
      <AdminNavbar />
      <div className="new-blog-container">
        <h2>Create New Blog</h2>
        <input
          className="new-blog-input"
          placeholder="Title"
          value={title}
          onChange={e => setT(e.target.value)}
        />
        <input
          className="new-blog-input"
          placeholder="Image Filename (e.g., blog16.png)"
          value={img}
          onChange={e => setI(e.target.value)}
        />
        <textarea
          className="new-blog-textarea"
          placeholder="Description"
          value={desc}
          onChange={e => setD(e.target.value)}
        />
        <button className="new-blog-button" onClick={submit}>
          Submit
        </button>
      </div>
    </>
  );
}
