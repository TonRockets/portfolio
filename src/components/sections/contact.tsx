import { ExternalLink } from "lucide-react"
import { Button } from "components/ui/button"
import { Container } from "components/ui/container"
import Link from "next/link"

export const Contact = () => {
  return (
    <section className="py-16 text-center">
      <Container>
        <h2 className="text-2xl mb-4">Conte-me sobre o seu próximo projeto</h2>
        <Button variant="outline" size="lg" className="rounded-full">
          <Link className="flex items-center" href="https://wa.me/5521983838768" target="_blank">Whatsapp <ExternalLink className="ml-2 w-4 h-4" /></Link>
        </Button>
      </Container>
    </section>
  )
}