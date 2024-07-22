import '~/styles/globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { type Metadata } from 'next';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Pelakad',
  description: 'Sistem pengajuan layanan masyarakat dawuhan',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" className={`${poppins.className} bg-white text-black`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
