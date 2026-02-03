"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"
export default function LoginForm() {
  const router = useRouter(); 
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // 🔐 MOCK credentials
    const MOCK_EMAIL = "student@test.com"
    const MOCK_PASSWORD = "123456"

    setTimeout(() => {
        if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
        document.cookie = "food_token=mock_token_123; path=/"
        router.push("/")
        } else {
        setError("Invalid email or password")
        setLoading(false)
        }
    }, 1000)
  }

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-gray-100 p-8">
          <div className="mb-8 text-center">
            {/* <img
              alt="Brand"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="mx-auto h-10 w-10"
            /> */}
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900">
              Welcome to Food App
            </h2>
            <p className="mt-2 text-sm text-red-600">
              Sign in to continue
            </p>
          </div>

          <form className="login space-y-5" method="POST"  onSubmit={handleSubmit}>

            {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="username@gmail.com"
                onChange={(e) => { setEmail(e.target.value); setError("") }}
                className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                Password
              </label>
              <div className="relative mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  onChange={(e) => { setPassword(e.target.value); setError("") }}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-12 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
                <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-3 my-auto flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                    {showPassword ? (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-5 w-5"
                        >
                        <path
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
                        />
                        <circle cx="12" cy="12" r="3" strokeWidth="2" />
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-5 w-5"
                        >
                        <path
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3l18 18M10.585 10.585A3 3 0 0012 15a3 3 0 002.414-4.414M7.303 7.303C5.57 8.45 4.207 10.093 3.5 12c1.86 4.65 6.23 7 8.5 7 1.226 0 3.17-.67 5.087-2.027M16.697 16.697C18.43 15.55 19.793 13.907 20.5 12c-1.86-4.65-6.23-7-8.5-7-.873 0-2.37.38-3.997 1.303"
                        />
                        
                        </svg>
                    )}
                </button>

              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-red-500 transition"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
