import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">นโยบายความเป็นส่วนตัว</h1>
        <p className="text-xl text-white mb-8">ความเป็นส่วนตัวของคุณมีความสำคัญต่อเรา</p>
      </section>

      {/* Privacy Content */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>ความมุ่งมั่นของเราต่อความเป็นส่วนตัว</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            ที่ RoboCo เรามุ่งมั่นที่จะปกป้องความเป็นส่วนตัวของคุณและรับรองความปลอดภัยของข้อมูลส่วนบุคคลของคุณ
            นโยบายความเป็นส่วนตัวนี้ระบุถึงวิธีการที่เราเก็บรวบรวม ใช้ เปิดเผย และปกป้องข้อมูลของคุณเมื่อคุณ
            ใช้เว็บไซต์หรือบริการของเรา
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>ข้อมูลที่เราเก็บรวบรวม</AccordionTrigger>
              <AccordionContent>
                <p>เราอาจเก็บรวบรวมข้อมูลตามประเภทดังนี้:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>ข้อมูลส่วนบุคคล (เช่น ชื่อ, ที่อยู่อีเมล, เบอร์โทรศัพท์)</li>
                  <li>ข้อมูลการใช้งาน (เช่น ที่อยู่ IP, ชนิดเบราว์เซอร์, หน้าที่ที่เข้าถึง)</li>
                  <li>ข้อมูลการติดตาม (เช่น คุกกี้และเครื่องมือติดตาม)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>วิธีการใช้ข้อมูลของคุณ</AccordionTrigger>
              <AccordionContent>
                <p>เราใช้ข้อมูลของคุณเพื่อ:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>ให้บริการและปรับปรุงบริการของเรา</li>
                  <li>ติดต่อกับคุณเกี่ยวกับสินค้าและบริการของเรา</li>
                  <li>วิเคราะห์รูปแบบการใช้งานและปรับปรุงประสบการณ์ผู้ใช้</li>
                  <li>เป็นผู้ปกป้องตามกฎหมาย</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>ความปลอดภัยของข้อมูล</AccordionTrigger>
              <AccordionContent>
                <p>
                  เราใช้การเข้ารหัสและการจัดการข้อมูลเพื่อป้องกันการเข้าถึงไม่ได้ตามความต้องการ
                  และป้องกันการเข้าถึง แก้ไข และปรับปรุงข้อมูล
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>สิทธิของคุณ</AccordionTrigger>
              <AccordionContent>
                <p>คุณมีสิทธิในการ:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>เข้าถึงและรับคัดลอกข้อมูลส่วนตัวของคุณ</li>
                  <li>แก้ไขข้อมูลส่วนตัวที่ไม่ถูกต้อง</li>
                  <li>ขอลบข้อมูลส่วนตัวของคุณ</li>
                  <li>ปฏิเสธการดําเนินการด้วยข้อมูลส่วนตัวของคุณ</li>
                  <li>ขอจํากัดการดําเนินการด้วยข้อมูลส่วนตัวของคุณ</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>การเปลี่ยนแปลงนโยบายนี้</AccordionTrigger>
              <AccordionContent>
                <p>
                เราอาจอัปเดตนโยบายความเป็นส่วนตัวนี้เป็นระยะๆ เราจะแจ้งให้คุณทราบถึงการเปลี่ยนแปลงใดๆ โดยการโพสต์
                นโยบายความเป็นส่วนตัวฉบับใหม่บนหน้านี้และอัปเดตวันที่ &quot;อัปเดตล่าสุด&quot;
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="mt-6">
          หากคุณมีคำถามใด ๆ เกี่ยวกับนโยบายความเป็นส่วนตัวนี้ โปรดติดต่อเราที่ privacy@roboco.com
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

