import { Inter } from "next/font/google"
import "./globals.css"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wellington Pereira",
  description: "Construindo produtos, marcas e experiências digitais.",
  openGraph: {
    title: "Wellington Pereira | Construindo produtos, marcas e experiências digitais",
    description: "Construindo produtos, marcas e experiências digitais. Desenvolvendo soluções inovadoras para marcas e empresas.",
    url: "https://www.seusite.com",
    type: "website",
    images: "/logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellington Pereira | Construindo produtos, marcas e experiências digitais",
    description: "Construindo produtos, marcas e experiências digitais. Desenvolvendo soluções inovadoras para marcas e empresas.",
    images: "/logo.svg",
    creator: "@HS_ToN",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="icon" href="/logo.svg" />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
      </head>
      <body className={`${inter.className} min-h-screen bg-zinc-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}