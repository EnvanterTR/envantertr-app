import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EnvanterTR — Modern Envanter Yönetimi',
  description: 'Bulut tabanlı, çok kiracılı envanter yönetim sistemi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, fontFamily: 'Inter, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
