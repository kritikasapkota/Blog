'use client';
import Link from 'next/link';
import '../styles/blogCard.css';
import Image from "next/image";
export default function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }}>
      <div className="blog-card">
        <Image
          src={`/blogImages/${blog.img}`}
          alt={blog.title}
          className="blog-image"
        />
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-desc">{blog.desc}</p>
      </div>
    </Link>
  );
}
