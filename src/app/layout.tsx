import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/global.css'
import Navbar from "@/app/components/navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aryan\'s Personal Website',
  description: 'A personal website for Aryan Baldua.',
}



export default function RootLayout({
  
  children,
}: {
  
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar/>{children}</body>
    </html>
  )
}