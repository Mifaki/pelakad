import '~/styles/globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pelakad',
  description: 'Sistem pengajuan layanan masyarakat dawuhan',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} bg-white text-black`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
