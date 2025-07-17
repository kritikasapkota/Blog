'use client';

import { useEffect, useState } from 'react';
import UserNavbar from '../components/UserNavbar';
import BlogCard from '../components/BlogCard';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    let parsedBlogs = [];

    try {
      parsedBlogs = JSON.parse(storedBlogs);
    } catch (e) {
      console.error('Failed to parse blogs from localStorage', e);
    }

    if (!Array.isArray(parsedBlogs) || parsedBlogs.length === 0) {
      const defaultBlogs = [
         { id: 1, title: 'Cat lover', img: 'blog1.png', desc: 'Cats are small, carnivorous mammals that are one of the most popular pets in the world. Known for their agility, independence, and playful behavior, cats belong to the species Felis catus. They have been companions to humans for thousands of years..' },
        { id: 2, title: 'Beach Paradise', img: 'blog2.png', desc: 'Relaxing on a sunny beach with soft sand beneath your feet and the soothing sound of waves crashing is the perfect way to unwind and escape the hustle of daily life..'},
        { id: 3, title: 'Technology', img: 'blog3.png', desc: 'Artificial Intelligence is a branch of computer science that focuses on creating machines capable of performing tasks that typically require human intelligence. From voice assistants and self-driving cars to personalized recommendations and medical diagnostics, AI is transforming industries and reshaping the way we live and work..'},
        { id: 4, title: 'Thali-set', img: 'blog4.png', desc: 'Food is not just a basic necessity; it a source of joy, culture, and connection. From spicy street snacks to gourmet meals, every dish tells a story and brings people together around the worlds.' },
        { id: 5, title: 'Mount Everest', img: 'blog5.png', desc: '  Mount Everest is the highest mountain in the world, rising to a height of 8,848.86 meters (29,031.7 feet) above sea level. It is located in the Himalayas on the border between Nepal and the Tibet Autonomous Region of China. Known as Sagarmatha in Nepali and Chomolungma in Tibetan, it attracts climbers and adventurers from all over the globe. The first successful ascent was made in 1953 by Sir Edmund Hillary of New Zealand and Tenzing Norgay, a Sherpa of Nepal. Climbing Everest is extremely challenging due to freezing temperatures, low oxygen, and dangerous terrain, but it remains a symbol of human courage and determination..' },
        { id: 6, title: 'Ghandruk', img: 'blog6.png', desc: 'Explore snow-covered landscapes and cozy cabins. best place of Pokhara' },
        { id: 7, title: 'National Flag', img: 'blog7.png', desc: 'Shows the identity of Nepal.' },
        { id: 8, title: 'Historic Sites', img: 'blog8.png', desc: 'Walk through history with ancient ruins and cultural heritage.' },
        { id: 9, title: 'Countryside Charm', img: 'blog9.png', desc: 'Enjoy the simplicity and beauty of rural living.' },
        { id: 10, title: 'Gatherment ', img: 'blog10.png', desc: 'Sometimes Gatherment is memorable.' },
        { id: 11, title: 'Rhododendron', img: 'blog11.png', desc: `The national flower of Nepal is the Rhododendron, locally known as Lali Gurans. It is a beautiful, vibrant flower that grows abundantly in the hilly and mountainous regions of Nepal, especially during the spring season. The flower is admired for its bright red petals and symbolizes natural beauty, strength, and resilience. Rhododendrons are found in forests and are also important in Nepalese culture and traditions. The blooming of Lali Gurans paints the hills of Nepal with color and is a sign that warmer days are approaching.` },
        { id: 12, title: 'Cultural-Dress', img: 'blog12.png', desc: 'Replicate about a culture.' },
        { id: 13, title: ' Gastronomic Delights', img: 'blog13.png', desc: 'avor delicious dishes and culinary wonders.' },
        { id: 14, title: 'Holi', img: 'blog14.png', desc: 'The festivals about Clours' },
        { id: 15, title: 'Cultural Celebrations', img: 'image15.jpg', desc: 'Join the vibrant festivals and traditions around the world.' },
      ];

      localStorage.setItem('blogs', JSON.stringify(defaultBlogs));
      setBlogs(defaultBlogs);
    } else {
      setBlogs(parsedBlogs);
    }
  }, []);

  return (
    <>
      <UserNavbar />
      <main style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', color: 'white' }}>All Blogs</h2>
        <div
          className="blog-list"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {blogs.map((b) => (
            <BlogCard key={b.id} blog={b} />
          ))}
        </div>
      </main>
    </>
  );
}
