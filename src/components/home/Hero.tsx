import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">
          欢迎来到我的作品集
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          这里展示了我最新的作品和项目。我专注于创造优秀的用户体验和创新的解决方案。
        </p>
        <div className="space-x-4">
          <Link
            href="/products"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            查看作品
          </Link>
          <Link
            href="/contact"
            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            联系我
          </Link>
        </div>
      </div>
    </section>
  )
}