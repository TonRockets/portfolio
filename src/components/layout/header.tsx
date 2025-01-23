import Link from "next/link"
import { Container } from "components/ui/container"

export const Header = () => {
  return (
    <header className="p-4">
      <Container className="flex justify-between items-center xs:flex-col xs:gap-6">
        <div className="text-sm text-zinc-500">wellington.pereira@al.forsoft.org.br</div>
        <nav className="flex gap-4 text-sm text-zinc-500">
          <Link href="https://linkedin.com/in/wellingtonpsantos" target="_blank" className="hover:text-white transition-colors cursor-pointer">
            LinkedIn
          </Link>
          <Link href="https://github.com/TonRockets" target="_blank" className="hover:text-white transition-colors cursor-pointer">
            GitHub
          </Link>
          <Link href="https://instagram.com/ton.rockets" target="_blank" className="hover:text-white transition-colors cursor-pointer">
            Instagram
          </Link>
        </nav>
      </Container>
    </header>
  )
}