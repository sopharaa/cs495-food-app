import MealCard from "./MealCard"

export default function MealList({ meals }) {
  return (
    <>
      {meals.map(meal => (
        <div key={meal.idMeal} className="col-md-3 col-sm-6 mb-4">
          <MealCard meal={meal} />
        </div>
      ))}
    </>
  )
}
