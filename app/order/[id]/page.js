import styles from '../../styles/orderpage.module.css';
import { foodItems } from '../../data/foodData';
import Image from 'next/image';

export default function OrderPage({ params }) {
  const food = foodItems.find((item) => item.id === params.id);

  if (!food) return <div>Food not found</div>;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.restaurantName}>{food.name}</h2>

      <div className={styles.tabs}>
        <span className={styles.activeTab}>Order Online</span>
        <span className={styles.tab}>Dineout</span>
      </div>

      <div className={styles.infoBox}>
        <p><strong>3.6 (100+ ratings)</strong> • ₹99 for two</p>
        <p><span className={styles.link}>Nepali</span>, <span className={styles.link}>Chinese</span></p>
        <p>Outlet: Crossing Republic</p>
        <p className={styles.closed}>Closed & not delivering</p>
      </div>

      <h3 className={styles.recommendHeading}>Recommended (8)</h3>

      <div className={styles.recommendedList}>
        <div className={styles.foodLeft}>
          <p className={styles.foodTitle}>La Mushroom Pizza</p>
          <p className={styles.foodPrice}>₹125</p>
          <p className={styles.foodDesc}>
            Farm-fresh mushrooms on toasted pizza with several toppings and cheese.
          </p>
        </div>
        <div className={styles.foodRight}>
          <img src="/mushroom_pizza.jpg" alt="Pizza" className={styles.foodImg} />
          <button className={styles.addButton}>Add</button>
        </div>
      </div>

      <div className={styles.recommendedList}>
        <div className={styles.foodLeft}>
          <p className={styles.foodTitle}>La Capsicum Pizza</p>
          <p className={styles.foodPrice}>₹125</p>
          <p className={styles.foodDesc}>
            Roasted capsicum, creamy cheese base, spicy & soft pizza crust.
          </p>
        </div>
        <div className={styles.foodRight}>
          <img src="/capsicum_pizza.jpg" alt="Pizza" className={styles.foodImg} />
          <button className={styles.addButton}>Add</button>
        </div>
      </div>
    </div>
  );
}



