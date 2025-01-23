import Link from "next/link"
import { Container } from "components/ui/container"

export const Header = () => {
  return (
    <header className="p-4">
      <Container className="flex justify-between items-center">
        <div className="text-sm text-zinc-500">wellington.pereira@al.forsoft.org.br</div>
        <nav className="flex gap-4 text-sm text-zinc-500">
          <Link href="https://linkedin.com/in/wellingtonpsantos" target="_blank" className="hover:text-white transition-colors">
            LinkedIn
          </Link>
          <Link href="https://github.com/TonRockets" target="_blank" className="hover:text-white transition-colors">
            GitHub
          </Link>
          <Link href="https://instagram.com/ton.rockets" target="_blank" className="hover:text-white transition-colors">
            Instagram
          </Link>
        </nav>
      </Container>
    </header>
  )
}