import { Header } from "components/layout/header"
import { Hero } from "components/sections/hero"
import { Clients } from "components/sections/clients"
import { Services } from "components/sections/services"
import { Contact } from "components/sections/contact"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Contact />
      </main>
    </>
  )
}
