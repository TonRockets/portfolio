import { SERVICES } from "lib/constants"
import { Container } from "components/ui/container"
import { Card, CardContent, CardHeader } from "components/ui/card"

export const Services = () => {
  return (
    <section className="py-16">
      <Container>
        <p className="text-xl mb-16 text-center">
        Colaboramos com <span className="text-zinc-400">marcas</span> e{" "}
          <span className="text-zinc-400">agências</span> para criar resultados impactantes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}