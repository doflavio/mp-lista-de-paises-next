import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de Paises',
  description: 'Uma lista de paises criada com Next.js 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <main className='bg-gray-100 min-h-screen flex flex-col items-center'>
          <nav className='w-full bg-white h-16 flex items-center justify-center'>
            <section className="font-bold text-2xl flex items-center gap-3">
              <Image src="/logo.svg" alt="Logo da Aplicação - emoji de globo" width={48} height={48} />
              <h1 className='font-bold'>Lista de Paises</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
