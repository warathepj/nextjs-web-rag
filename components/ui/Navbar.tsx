'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"

const links = [
  { href: '/', label: 'หน้าหลัก' },
  { href: '/about', label: 'เกี่ยวกับเรา' },
  { href: '/products', label: 'สินค้า' },
  { href: '/services', label: 'บริการ' },
  { href: '/blog', label: 'บล็อก' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-purple-600">RoboCo</Link>
          <div className="flex space-x-4">
            {links.map((link) => (
              <Button
                key={link.href}
                asChild
                variant={pathname === link.href ? "default" : "ghost"}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

