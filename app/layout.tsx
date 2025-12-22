import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DV Public School - Excellence in Education',
  description: 'DV Public School provides quality education with modern facilities and experienced faculty. Nurturing young minds for a bright future.',
  keywords: 'school, education, DV Public School, academics, admission',
  openGraph: {
    title: 'DV Public School - Excellence in Education',
    description: 'Quality education with modern facilities and experienced faculty',
    type: 'website',
    url: 'https://dvpublicschool.edu.in',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}