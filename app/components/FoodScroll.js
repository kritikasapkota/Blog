'use client';
import { useRef } from 'react';
import styles from '../styles/foodscroll.module.css';
import { foodItems } from '../data/foodData';

export default function FoodScroll() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2>Explore Nepali & Bakery Items</h2>
      <div className={styles.scrollWrapper}>
        <button
          className={styles.scrollButton}
          onClick={() => scroll('left')}
        >
          &lt;
        </button>

        <div className={styles.scroll} ref={scrollRef}>
          {foodItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.cardImage}
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <button
          className={styles.scrollButton}
          onClick={() => scroll('right')}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
