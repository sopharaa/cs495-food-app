import Image from "next/image";
import Header from "../components/layout/Header";
import { getMeals } from "../services/mealdb"
import MealList from "../components/meal/MealList"
export default async function Home() {
    const data = await getMeals()
  return (
   <div className="food">
    <Header />
      <br /><br /><br />
      <br />
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        <MealList meals={data.meals} />
      </div>
    </div>
   </div>
  );
}
