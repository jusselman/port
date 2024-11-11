'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  console.log('Navbar component rendering');
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
  className="fixed top-0 left-0 w-full bg-black/50 text-white"
  style={{ 
    zIndex: 9999,
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0
  }}
>
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
     
      <div className="flex-1 flex justify-center space-x-12"> {/* Increased space-x and centered */}
      <Link 
          href="/" 
          className="text-2xl font-bold text-white"
        >
          Joshua
        </Link>
        <Link 
          href="/about" 
          className="text-white hover:text-gray-300"
        >
          About
        </Link>
        <Link 
          href="/projects" 
          className="text-white hover:text-gray-300"
        >
          Projects
        </Link>
        <Link 
          href="/contact" 
          className="text-white hover:text-gray-300"
        >
          Contact
        </Link>
      </div>
      
      {/* Right side - empty div for balance */}
      <div className="flex-1"></div>
    </div>
  </div>
</nav>
  )
}