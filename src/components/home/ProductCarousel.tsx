'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: '焦糖核桃派',
    image: '/images/test.png',
    description: '经典焦糖口味'
  },
  {
    id: 2,
    name: '巧克力核桃派',
    image: '/images/test.png',
    description: '浓郁巧克力风味'
  },
  {
    id: 3,
    name: '抹茶核桃派',
    image: '/images/test.png',
    description: '清新抹茶口感'
  },
  {
    id: 4,
    name: '原味核桃派',
    image: '/images/test.png',
    description: '纯正原味'
  },
  {
    id: 5,
    name: '坚果核桃派',
    image: '/images/test.png',
    description: '丰富坚果口感'
  }
]

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageError, setImageError] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">精选产品</h2>
        <div className="relative h-[500px] overflow-hidden rounded-xl">
          {/* 主图片 */}
          <div className="relative h-full">
            <Image
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              fill
              className="object-cover transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">{products[currentIndex].name}</h3>
              <p className="text-lg">{products[currentIndex].description}</p>
            </div>
          </div>

          {/* 左右箭头 */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 p-2 rounded-full shadow-lg transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 p-2 rounded-full shadow-lg transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 缩略图预览 */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 