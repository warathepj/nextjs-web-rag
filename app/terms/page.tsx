import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">เงื่อนไขการบริการ</h1>
        <p className="text-xl text-white mb-8">โปรดอ่านข้อกำหนดเหล่านี้อย่างละเอียดก่อนใช้บริการของเรา</p>
      </section>

      {/* Terms Content */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>ข้อกำหนดและเงื่อนไข</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
          ยินดีต้อนรับสู่ RoboCo เมื่อเข้าถึงหรือใช้งานเว็บไซต์และบริการของเรา
คุณตกลงที่จะผูกพันตามข้อกำหนดในการให้บริการเหล่านี้ หากคุณไม่เห็นด้วยกับข้อกำหนดส่วนใดส่วนหนึ่ง
คุณจะไม่สามารถเข้าถึงบริการของเราได้
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>1. การใช้บริการของเรา</AccordionTrigger>
              <AccordionContent>
                <p>คุณตกลงที่จะใช้บริการของเราเพื่อวัตถุประสงค์ที่ได้รับอนุญาตโดย:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>ข้อกำหนดของเรา</li>
                  <li>กฎหมาย กฎระเบียบ หรือกฎหมายที่มีอยู่ในประเทศที่เหมาะสม</li>
                </ul>
                <p className="mt-2">คุณไม่สามารถเข้าถึงบริการของเราได้เมื่อมี วัตถุประสงค์ที่ผิดกฎหมายหรือไม่ได้รับอนุญาต</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. ทรัพย์สินทางปัญญา</AccordionTrigger>
              <AccordionContent>
                <p>เนื้อหา คุณลักษณะ และฟังก์ชันการทำงานของบริการของเราเป็นของ RoboCo และได้รับการคุ้มครองโดยกฎหมายลิขสิทธิ์ 
                    เครื่องหมายการค้า สิทธิบัตร ความลับทางการค้า และกฎหมายทรัพย์สินทางปัญญาอื่นๆ ระหว่างประเทศ</p>
                <p className="mt-2">คุณไม่สามารถแก้ไข ทำซ้ำ จัดจำหน่าย สร้างผลงานดัดแปลงหรือดัดแปลง
แสดงต่อสาธารณะหรือแสวงประโยชน์จากเนื้อหาของเราไม่ว่าทั้งหมดหรือบางส่วน ยกเว้น
ได้รับอนุญาตอย่างชัดแจ้งจากเรา</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. บัญชีผู้ใช้</AccordionTrigger>
              <AccordionContent>
                <p>เมื่อคุณสร้างบัญชีกับเรา คุณต้องให้ข้อมูลที่ถูกต้อง สมบูรณ์ และทันสมัยอยู่เสมอ 
                    การไม่ทำเช่นนั้นถือเป็นการละเมิดข้อกำหนด ซึ่งอาจส่งผลให้บัญชีของคุณถูกยกเลิกในบริการของเราทันที</p>
                <p className="mt-2">คุณต้องรักษาความปลอดภัยของรหัสผ่านที่คุณใช้เพื่อเข้าถึงบริการของเราและส่งเสริมให้คุณทุกครั้งที่มี
                    การดําเนินการด้วยรหัสผ่านของคุณ</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>4. การยุติ</AccordionTrigger>
              <AccordionContent>
                <p>เราอาจยุติหรือระงับการเข้าถึงบริการของเราได้ทันที
โดยไม่ต้องแจ้งให้ทราบล่วงหน้าหรือรับผิดชอบใดๆ ทั้งสิ้น ด้วยเหตุผลใดก็ตาม
รวมถึงแต่ไม่จำกัดเพียงการที่คุณละเมิดข้อกำหนด</p>
                <p className="mt-2">ข้อกำหนดทั้งหมดของเงื่อนไขซึ่งโดยธรรมชาติแล้วควรคงอยู่ต่อไปแม้หลังการยุติสัญญา

จะยังคงมีผลต่อไปแม้หลังการยุติสัญญา รวมถึงแต่ไม่จำกัดเพียง ข้อกำหนดเกี่ยวกับกรรมสิทธิ์ 
การปฏิเสธการรับประกัน การชดเชยความเสียหาย และการจำกัดความรับผิด</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>5. การเปลี่ยนแปลงเงื่อนไข</AccordionTrigger>
              <AccordionContent>
                <p>เราขอสงวนสิทธิ์ในการแก้ไขหรือเปลี่ยนแปลงข้อกำหนดเหล่านี้ได้ตามดุลยพินิจของเราแต่เพียงผู้เดียวเมื่อใดก็ได้
                สิ่งที่ถือเป็นการเปลี่ยนแปลงที่สำคัญจะได้รับการพิจารณาตามดุลยพินิจของเราแต่เพียงผู้เดียว</p>
                <p className="mt-2">หากคุณยังคงเข้าถึงหรือใช้บริการของเราต่อไปหลังจากที่การแก้ไขดังกล่าวมีผลบังคับใช้ ถือว่าคุณตกลงที่จะผูกพันตามข้อกำหนดที่แก้ไขแล้ว

หากคุณไม่เห็นด้วยกับข้อกำหนดใหม่ โปรดหยุดใช้บริการ</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>6. การจำกัดความรับผิด</AccordionTrigger>
              <AccordionContent>
                <p>ในกรณีใดๆ RoboCo รวมถึงกรรมการ พนักงาน พันธมิตร ตัวแทน ซัพพลายเออร์ หรือบริษัทในเครือ 
                    จะไม่รับผิดชอบต่อความเสียหายทางอ้อม ความเสียหายโดยบังเอิญ ความเสียหายพิเศษ ความเสียหายที่เป็นผลสืบเนื่อง 
                    หรือความเสียหายเชิงลงโทษ รวมถึงแต่ไม่จำกัดเพียง การสูญเสียผลกำไร ข้อมูล การใช้งาน ชื่อเสียงทางการค้า 
                    หรือการสูญเสียที่จับต้องไม่ได้อื่นๆ อันเป็นผลมาจาก:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>การเข้าถึงหรือใช้งานหรือไม่สามารถเข้าถึงหรือใช้งานบริการของคุณ</li>
                  <li>การดำเนินการหรือเนื้อหาใดๆ ของบุคคลที่สามบนบริการ</li>
                  <li>เนื้อหาใด ๆ ที่ได้รับจากบริการ</li>
                  <li>การเข้าถึง การใช้ หรือการเปลี่ยนแปลงข้อมูลที่ส่งหรือเนื้อหาของคุณโดยไม่ได้รับอนุญาต</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="mt-6">
          หากคุณมีคำถามใดๆ เกี่ยวกับข้อกำหนดเหล่านี้ โปรดติดต่อเราที่ legal@roboco.com
          </p>
          <p className="mt-4 text-sm text-gray-500">
            ปรับปรุงล่าสุด: {new Date().toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

