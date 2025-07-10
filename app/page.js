import Navbar from './components/Navbar';
import TopRestaurants from './components/TopRestaurants';
import FoodScroll from './components/FoodScroll';
import RestaurantCards from './components/RestaurantCards';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <TopRestaurants />
      <FoodScroll />
      <RestaurantCards />
    </>
  );
}
