import { Pen, Monitor, Code, Settings } from "lucide-react"
import Image from "next/image"

export const SERVICES = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Arquitetura de Sistema",
    description: "Estruturando e organizando uma arquitetura adequada para o seu projeto"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Web & Mobile App",
    description: "Transformando ideias em sites e aplicativos móveis funcionais"
  },
  {
    icon: <Pen className="w-6 h-6" />,
    title: "Design & Criatividade",
    description: "Criando soluções visualmente deslumbrantes com o foco na sua marca"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Desenvolvimento",
    description: "Dando vida às suas ideias com as mais recentes tecnologias e tendências de design"
  }
]

export const CLIENTS = [
  {logo: <Image 
    src="/actdigital.logo.svg"
    alt="Profile"
    width={80}
    height={80}
  />},
  {logo: <Image 
    src="/avanade.logo.svg"
    alt="Profile"
    width={150}
    height={150}
  />},
  {logo: <Image 
    src="/csptech.logo.svg"
    alt="Profile"
    width={100}
    height={100}
  />},
  {logo: <Image 
    src="/rededor.logo.svg"
    alt="Profile"
    width={150}
    height={150}
  />},
]