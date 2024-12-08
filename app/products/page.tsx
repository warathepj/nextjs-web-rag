import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "AI Assistant Pro",
    description: "ผู้ช่วยเสมือนขั้นสูงที่ขับเคลื่อนด้วย AI สำหรับทุกความต้องการของคุณ",
    price: 3500,
    image: "https://warathepj.github.io/js-ai-gallery/public/image/bot-website/assist.jpg",
    badge: "ใหม่"
  },
  {
    id: 2,
    name: "Smart Home Hub",
    description: "ควบคุมทั้งบ้านของคุณด้วยฮับอัจฉริยะนี้",
    price: 5300,
    image: "https://warathepj.github.io/js-ai-gallery/public/image/bot-website/home.jpg",
    badge: "เป็นที่นิยม"
  },
  {
    id: 3,
    name: "Neural Network Kit",
    description: "สร้างโมเดล AI ของคุณเองด้วยชุดคิทนี้",
    price: 7000,
    image: "https://warathepj.github.io/js-ai-gallery/public/image/bot-website/network.jpg",
    badge: "ขั้นสูง"
  }
]

export default function ProductsPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">สินค้าของเรา</h1>
          <p className="text-xl text-white mb-8">ค้นพบโซลูชั่น AI ล้ำสมัยของเรา</p>
        </section>

        {/* Products Section */}
        <section className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{objectFit: "cover"}}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <CardTitle>{product.name}</CardTitle>
                  <Badge>{product.badge}</Badge>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-bold">฿{product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">เพิ่มลงรถเข็น</Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>
    </>
  )
}

