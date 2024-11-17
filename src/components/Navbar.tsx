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
    className="backdrop-blur-sm"
    style={{ 
      zIndex: 9999,
      position: 'fixed',
      top: '0rem',
      left: '0rem',
      right: '0rem',
      padding: '1.5rem',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.3)'  
    }}
  >
          <div className="flex-1 flex gap-6 items-center">
        <Link 
          href="/" 
          className=" text-white hover:text-gray-300 transition-colors"
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className="text-white hover:text-gray-300 transition-colors"
        >
          About
        </Link>
        <Link 
          href="/projects" 
          className="text-white hover:text-gray-300 transition-colors"
        >
          Projects
        </Link>
        <Link 
          href="/contact" 
          className="text-white hover:text-gray-300 transition-colors"
        >
          Contact
        </Link>
      </div>
</nav>
  )
}