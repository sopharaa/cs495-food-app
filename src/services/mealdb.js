const BASE_URL = process.env.NEXT_PUBLIC_MEALDB_BASE_URL

export async function getMeals() {
  const res = await fetch(`${BASE_URL}/search.php?s=`)
  return res.json()
}

export async function getMealDetail(id) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
  return res.json()
}
