import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">เกี่ยวกับเรา</h1>
          <p className="text-xl text-white mb-8">เรียนรู้เพิ่มเติมเกี่ยวกับบริษัทและภารกิจของเรา</p>
        </section>

        {/* About Content */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">เราเป็นใคร</h2>
            <p className="text-lg mb-6">
            บริษัทของเราซึ่งก่อตั้งขึ้นในปี 2023 เป็นผู้นำด้านนวัตกรรมด้าน AI และเทคโนโลยี
            เรามุ่งมั่นที่จะสร้างโซลูชันที่จะส่งผลกระทบเชิงบวกต่อชีวิตและธุรกิจของผู้คน
            </p>
            <Button asChild>
              <Link href="/contact">ติดต่อเรา</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Team"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">คุณค่าของเรา</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "นวัตกรรม", description: "ขยายขอบเขตของสิ่งที่เป็นไปได้ด้วยเทคโนโลยี" },
              { title: "ความเป็นส่วนตัว", description: "ตรวจสอบความถูกต้องของข้อมูล" },
              { title: "ผลกระทบ", description: "สร้างแผนการดำเนินการที่จะส่งผลกระทบต่อชีวิตและธุรกิจของผู้คน" },
            ].map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

