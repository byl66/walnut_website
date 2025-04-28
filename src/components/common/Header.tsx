'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const categories = [
    { name: '贴纸书', href: '/products/stickerBook' },
    { name: '挂件', href: '/products/keychain' },
    { name: '贴纸', href: '/products/sticker' },
    { name: '本子', href: '/products/notebook' }
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="relative">
      <div className="absolute inset-0">
        <Image
          src="/images/header.jpg"
          alt="Header Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/2" />
      </div>
      <nav className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-bold text-amber-800">
              焦糖核桃派
            </Link>
            <Image
              src="/images/walnut_logo.gif"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center space-x-8">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-white text-amber-800 flex items-center"
              >
                按类别
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {categories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about" className="hover:text-white text-amber-800">
              关于我
            </Link>
            <Link href="/contact" className="hover:text-white text-amber-800">
              联系方式
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}