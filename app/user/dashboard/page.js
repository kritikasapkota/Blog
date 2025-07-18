'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UserNavbar from '../../components/UserNavbar';
import '../../styles/userDashboard.css';

import Image from "next/image";
export default function UserDashboard() {
  const r = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (localStorage.role !== 'user') r.push('/user/login');
    else {
      const b = JSON.parse(localStorage.getItem('blogs') || '[]');
      setBlogs(b);
    }
  }, []);

  return (
    <>
      <UserNavbar />
      <main style={{padding:'2rem'}}>
        <h2>User Dashboard</h2>
        <div className="blog-grid">
          {blogs.map(blog => (
            <div className="blog-card" key={blog.id}>
              <Image src={`/blogImages/${blog.img}`} alt={blog.title} className="blog-img"/>
              <div className="blog-title">{blog.title}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
