"use client"

import { useRouter } from "next/navigation"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {

    // ❌ delete cookie
    document.cookie = "food_token=; path=/; max-age=0"

    // 🔁 go to login
 
      router.push("/login");

  }

  return (
    <button
      onClick={handleLogout}
     
      className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      Logout
    </button>
  )
}
