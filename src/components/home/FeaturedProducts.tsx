import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    title: '产品一',
    description: '这是一个优秀的产品描述，展示了产品的特点和优势。',
    image: '/images/product1.jpg',
    link: '/products/1'
  },
  {
    id: 2,
    title: '产品二',
    description: '这是另一个优秀的产品描述，展示了产品的特点和优势。',
    image: '/images/product2.jpg',
    link: '/products/2'
  },
  {
    id: 3,
    title: '产品三',
    description: '这是第三个优秀的产品描述，展示了产品的特点和优势。',
    image: '/images/product3.jpg',
    link: '/products/3'
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">精选产品</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  href={product.link}
                  className="text-primary hover:text-blue-600 font-medium"
                >
                  了解更多 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
