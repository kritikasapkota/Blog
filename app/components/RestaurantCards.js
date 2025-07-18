import Link from 'next/link';
import styles from '../styles/restaurantcards.module.css';
import { foodItems } from '../data/foodData';

export default function RestaurantCards() {
  return (
    <div className={styles.container}>
      <h2>Restaurants with Online Food Delivery in Kathmandu</h2>
      <div className={styles.grid}>
        {foodItems.map((item) => (
          <Link key={item.id} href={`/order/${item.id}`} className={styles.card}>
            <image src={item.image} alt={item.name} className={styles.img}/>
            <h3>{item.name}</h3>
            <p>Rs {item.price}</p>
            <p>⭐ {item.rating}</p>
          </Link>
        ))} 
      </div>
    </div>
  );
}
