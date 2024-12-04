import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">ยินดีต้อนรับสู่ RoboCo</h1>
        <p className="text-xl text-white mb-8">สร้างวันพรุ่งนี้ที่ชาญฉลาดมากขึ้น...ตั้งแต่วันนี้</p>
        <Button asChild>
          <Link href="/about">เกี่ยวกับเรา</Link>
        </Button>
      </section>

      {/* Cards Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Products", description: "Explore our wide range of products", href: "/products" },
          { title: "Services", description: "Check out our professional services", href: "/services" },
          { title: "Blog", description: "Read our latest articles and updates", href: "/blog" },
        ].map((card, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Click below to learn more about our {card.title.toLowerCase()}.</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={card.href}>Visit {card.title}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  )
}

