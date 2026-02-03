import { getMealDetail } from "../../../services/mealdb"
import Header from "../../../components/layout/Header"
import Link from "next/link"
export default async function MealDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params        // ✅ unwrap params
  const data = await getMealDetail(id)

  const meal = data.meals[0]

  return (
    <div>
      <Header />
    <br /><br /><br />
      <br />
      <div className="container p-6 flex flex-col md:flex-row gap-8">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-72 rounded-xl"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {meal.strMeal}
          </h1>

          <p className="text-gray-600 mb-2">
            🍽️ {meal.strCategory}
          </p>

          <p className="text-gray-600 mb-4">
            🌍 {meal.strArea}
          </p>

          <p className="leading-relaxed">
            {meal.strInstructions}
          </p>
          <Link href="/" className="btn btn-dark mt-3">
              Back
          </Link>
        </div>
      </div>
    </div>
  )
}
