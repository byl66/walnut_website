import Link from 'next/link'

export default function Hero() {
  const cards = [
    {
      title: '产品展示',
      description: '浏览我们的特色产品',
      link: '/products',
      color: 'bg-amber-100 hover:bg-amber-200'
    },
    {
      title: '关于我们',
      description: '了解更多品牌故事',
      link: '/about',
      color: 'bg-amber-50 hover:bg-amber-100'
    },
    {
      title: '联系方式',
      description: '随时与我们联系',
      link: '/contact',
      color: 'bg-amber-100 hover:bg-amber-200'
    },
    {
      title: '最新动态',
      description: '查看最新产品资讯',
      link: '/news',
      color: 'bg-amber-50 hover:bg-amber-100'
    }
  ]

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link 
            key={index}
            href={card.link}
            className={`${card.color} p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105`}
          >
            <h3 className="text-xl font-bold text-amber-800 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}