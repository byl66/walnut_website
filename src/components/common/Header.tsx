import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-bold text-amber-800">
              焦糖核桃派
            </Link>
            <Image
              src="/images/walnut_logo.gif"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="space-x-6">
            <Link href="/" className="hover:text-amber-800">
              首页
            </Link>
            <Link href="/products" className="hover:text-amber-800">
              产品
            </Link>
            <Link href="/about" className="hover:text-amber-800">
              关于我
            </Link>
            <Link href="/contact" className="hover:text-amber-800">
              联系方式
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}