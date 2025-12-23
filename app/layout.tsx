import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DV Public School - Excellence in Education',
  description:
    'DV Public School provides quality education with modern facilities and experienced faculty. Nurturing young minds for a bright future.',
  keywords: 'school, education, DV Public School, academics, admission',
  openGraph: {
    title: 'DV Public School - Excellence in Education',
    description:
      'Quality education with modern facilities and experienced faculty',
    type: 'website',
    url: 'https://dvpsrohini.com',
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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="PASTE_YOUR_VERIFICATION_CODE_HERE"
        />

        {/* Google Analytics (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>

      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
