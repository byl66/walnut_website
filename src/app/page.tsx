import Hero from '@/components/home/Hero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import ProductCarousel from '@/components/home/ProductCarousel'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <ProductCarousel />
      <FeaturedProducts />
    </div>
  )
}