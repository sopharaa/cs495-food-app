import Link from "next/link"

export default function MealCard({ meal }) {
  return (
    <Link href={`/meal/${meal.idMeal}`} className="text-dark text-decoration-none">
      <div className="bg-white rounded-xl shadow hover:scale-105 transition overflow-hidden">
        
        {/* Image */}
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-78 object-cover"
        />

        {/* Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-dark">
            {meal.strMeal}
          </h3>

          <p className="text-sm text-gray-500">
            🍽️ {meal.strCategory}
          </p>

          <p className="text-sm text-gray-500">
            🌍 {meal.strArea}
          </p>
        </div>
      </div>
    </Link>
  )
}
