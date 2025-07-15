// app/blogs/[id]/page.js
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import UserNavbar from '../../components/UserNavbar';
import '../../styles/blogDetail.css';

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('blogs');
    if (!stored) return;

    try {
      const allBlogs = JSON.parse(stored);
      const foundBlog = allBlogs.find((b) => b.id.toString() === id);
      setBlog(foundBlog);
    } catch (error) {
      console.error('Failed to parse blogs or find blog', error);
    }
  }, [id]);

  if (!blog) return <p style={{ padding: '2rem' }}>Blog not found.</p>;

  return (
    <>
      <UserNavbar />
      <main className="blog-detail-container">
        <h2 className="blog-detail-title">{blog.title}</h2>
        <img
          src={`/blogImages/${blog.img}`}
          alt={blog.title}
          className="blog-detail-image"
        />
        <p className="blog-detail-desc">{blog.desc}</p>
      </main>
    </>
  );
}
