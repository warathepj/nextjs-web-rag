'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">ติดต่อเรา</h1>
          <p className="text-xl text-white mb-8">เราต้องการช่องทางการติดต่อของคุณ</p>
        </section>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>ติดต่อเรา</CardTitle>
            <CardDescription>กรอกฟอร์มด้านล่างเพื่อติดต่อเรา</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">ชื่อ</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">อีเมล</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">ข้อความ</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  rows={4}
                />
              </div>
              <Button type="submit">ส่งข้อความ</Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <section className="mt-20 grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>ที่อยู่</CardTitle>
            </CardHeader>
            <CardContent>
              <p>123 ถนน AI</p>
              <p>เมือง เทคโนโลยี, TC 12345</p>
              <p>ประเทศไทย</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>โทรศัพท์</CardTitle>
            </CardHeader>
            <CardContent>
              <p>+1 (555) 123-4567</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>อีเมล</CardTitle>
            </CardHeader>
            <CardContent>
              <p>info@roboco.com</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  )
}

