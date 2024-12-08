import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function FloatingAvatar() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center">
      <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
        <AvatarImage src="https://warathepj.github.io/js-ai-gallery/public/image/fri11.jpeg" alt="AI Avatar" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <Button asChild className="mt-2 bg-white text-black hover:bg-gray-100 shadow-md">
        <Link href="http://localhost:8501/" target="_blank">
          แช็ทกับ AI
        </Link>
      </Button>
    </div>
  )
}

