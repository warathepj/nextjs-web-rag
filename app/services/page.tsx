import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const services = [
  {
    id: 1,
    title: "การให้คำปรึกษาด้าน AI",
    description: "คำแนะนำจากผู้เชี่ยวชาญในการบูรณาการโซลูชั่น AI เข้ากับกระบวนการทางธุรกิจของคุณ",
    image: "https://warathepj.github.io/js-ai-gallery/public/image/bot-website/consult.jpg",
    features: [
      "กลยุทธ์ AI เฉพาะบุคคล",
      "การประเมินเทคโนโลยี",
      "แผนงานการดำเนินงาน"
    ]
  },
  {
    id: 2,
    title: "การพัฒนา AI ที่กำหนดเอง",
    description: "โซลูชั่น AI ที่ได้รับการออกแบบมาโดยเฉพาะเพื่อตอบสนองความต้องการทางธุรกิจของคุณ",
    image: "https://warathepj.github.io/js-ai-gallery/public/image/bot-website/custom.jpg",
    features: [
      "โมเดล AI ที่กำหนดเอง",
      "การบูรณาการกับระบบที่มีอยู่",
      "การสนับสนุนและการบำรุงรักษาอย่างต่อเนื่อง"
    ]
  },
  {
    id: 3,
    title: "การฝึกอบรมและเวิร์คช็อปด้าน AI",
    description: "โปรแกรมการฝึกอบรมที่ครอบคลุมเพื่อเสริมสร้างความรู้ให้กับทีมของคุณด้วยปัญญาประดิษฐ์",
    image: "https://warathepj.github.io/js-ai-gallery/public/image/bot-website/training.jpg",
    features: [
      "เวิร์กช็อปเชิงปฏิบัติการด้าน AI",
      "เซสชันออนไลน์และแบบตัวต่อตัว",
      "หลักสูตรที่ปรับแต่งได้"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">บริการของเรา</h1>
        <p className="text-xl text-white mb-8">เสริมพลังธุรกิจของคุณด้วยโซลูชั่น AI ล้ำสมัย</p>
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="flex flex-col">
            <CardHeader>
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-t-lg"
                />
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc pl-5 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">เรียนรู้เพิ่มเติม</Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* Call to Action Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">พร้อมที่จะเปลี่ยนแปลงธุรกิจของคุณด้วย AI หรือไม่?</h2>
        <p className="text-xl mb-8">ติดต่อเราได้วันนี้เพื่อรับคำปรึกษาฟรี</p>
        <Button size="lg">เริ่มต้นใช้งาน</Button>
      </section>
    </div>
  )
}

