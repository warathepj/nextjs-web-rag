import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Everyday Life",
    description: "Explore how artificial intelligence is shaping our daily routines and what to expect in the coming years.",
    date: "2023-06-15",
    author: "Jane Doe",
    category: "Technology",
    image: "https://warathepj.github.io/js-ai-gallery/public/image/bot-website/future.jpg",
    slug: "future-of-ai-in-everyday-life"
  },
  {
    id: 2,
    title: "10 Tips for Sustainable Living",
    description: "Discover practical ways to reduce your carbon footprint and live a more environmentally friendly lifestyle.",
    date: "2023-06-10",
    author: "John Smith",
    category: "Lifestyle",
    image: "https://warathepj.github.io/js-ai-gallery/public/image/bot-website/sustain.jpg",
    slug: "10-tips-for-sustainable-living"
  },
  {
    id: 3,
    title: "The Rise of Remote Work: Challenges and Opportunities",
    description: "An in-depth look at how remote work is changing the employment landscape and what it means for workers and businesses.",
    date: "2023-06-05",
    author: "Alice Johnson",
    category: "Business",
    image: "https://warathepj.github.io/js-ai-gallery/public/image/bot-website/remote.jpg",
    slug: "rise-of-remote-work-challenges-and-opportunities"
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">บล็อกของเรา</h1>
        <p className="text-xl text-white mb-8">ข้อมูลเชิงลึก ความคิด และความเชี่ยวชาญจากทีมงานของเรา</p>
      </section>

      {/* Blog Posts Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-t-lg"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <Badge>{post.category}</Badge>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>โดย {post.author}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">{post.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/blog/${post.slug}`}>อ่านเพิ่มเติม</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  )
}

