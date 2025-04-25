import Hero from '@/components/home/Hero'
import FeaturedProducts from '@/components/home/FeaturedProducts'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <FeaturedProducts />
    </div>
  )
}