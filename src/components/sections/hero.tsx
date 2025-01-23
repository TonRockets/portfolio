import Image from "next/image"
import { Button } from "components/ui/button"
import { Container } from "components/ui/container"
import Link from "next/link"

export const Hero = () => {
  return (
    <section className="py-16 text-center">
      <Container>
        <div className="flex justify-center mb-6">
          <Image 
            src="/images/perfil-02.webp"
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <p className="text-lg mb-4">Olá, eu sou Wellington Pereira 👋</p>
        <h1 className="text-4xl md:text-5xl font-light mb-8">
          Construindo <span className="text-zinc-400">produtos</span>, <span className="text-zinc-400">marcas</span>,{" "}
          e <span className="text-zinc-400">experiências</span>, digitais.
        </h1>
        <Button variant="outline" size="lg" className="rounded-full">
          <Link href="https://axissuite.rededor.com.br">Trabalho recente</Link>
        </Button>
      </Container>
    </section>
  )
}