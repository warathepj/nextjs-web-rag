'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-gray-100 py-4 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {currentYear} CorgiDev. All rights reserved.
          </p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">เกี่ยวกับเรา</Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">ติดต่อ</Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">นโยบายความเป็นส่วนตัว</Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">ข้อกําหนดการใช้งาน</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

