'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'หน้าหลัก' },
  { href: '/about', label: 'เกี่ยวกับเรา' },
  { href: '/products', label: 'สินค้า' },
  { href: '/services', label: 'บริการ' },
  { href: '/blog', label: 'บล็อก' },
  { href: '/contact', label: 'ติดต่อเรา' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-purple-600">RoboCo</Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
              <div className="flex flex-col items-center space-y-4 py-4">
                {links.map((link) => (
                  <Button
                    key={link.href}
                    asChild
                    variant={pathname === link.href ? "default" : "ghost"}
                    className="w-full"
                    onClick={toggleMenu}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
