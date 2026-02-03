import React from 'react'
import LogoutButton from '../auth/LogoutButton'
import Link from 'next/link'
function Header() {
  return (
    <div>
         <header className="fixed top-0 left-0 right-0 z-50 bg-red-800 text-white shadow">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-14 items-center justify-between">
              <Link href="/" className="text-white text-decoration-none">
              <span className="text-lg font-semibold">Food App</span>
              </Link>
              <LogoutButton />
            </div>
          </div>
      </header>
    </div>
  )
}

export default Header
