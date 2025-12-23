import { Metadata } from 'next';
import Script from 'next/script';
import VisionMission from '@/components/about/VisionMission';
import PrincipalMessage from '@/components/about/PrincipalMessage';
import History from '@/components/about/History';
import ProspectusCTA from '@/components/shared/ProspectusCTA';

// Static metadata (or make dynamic if pulling from CMS)
export const metadata: Metadata = {
  title: {
    default: 'About D.V. Public School Rohini - CBSE Excellence Since 1989 | Vision & Mission',
    template: '%s | D.V. Public School Rohini',
  },
  description: "Discover the story of D.V. Public School Rohini: A CBSE-affiliated leader in Vijay Vihar since 1989, committed to holistic education, innovative pedagogy, and nurturing future leaders in Rohini, Delhi.",
  keywords: 'About D.V. Public School Rohini, DVPS Rohini history, CBSE school Vijay Vihar, school vision mission Delhi, DV Public School principal message',
  authors: [{ name: 'D.V. Public School Rohini Administration' }],
  creator: 'D.V. Public School Rohini',
  publisher: 'D.V. Public School Rohini',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Open Graph for shares (e.g., LinkedIn education groups)
  openGraph: {
    title: 'About Us - D.V. Public School Rohini: Holistic CBSE Education Since 1989',
    description: 'Explore our vision, mission, and journey as a premier CBSE school in Rohini Delhi, fostering integrity, truth, and learning.',
    url: 'https://dvpsrohini.com/about',
    siteName: 'D.V. Public School Rohini',
    images: [
      {
        url: 'https://dvpsrohini.com/og-about.jpg', // 1200x630: e.g., campus/timeline image
        width: 1200,
        height: 630,
        alt: 'D.V. Public School Rohini - Journey of Excellence Since 1989',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'About D.V. Public School Rohini - Vision, Mission & History',
    description: 'CBSE school in Vijay Vihar Rohini: Committed to inclusive education and global values since 1989.',
    images: ['https://dvpsrohini.com/twitter-about.jpg'], // 1200x675
  },
  alternates: {
    canonical: 'https://dvpsrohini.com/about',
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

// JSON-LD Schema: WebPage + Organization extension + Persons for leadership
const AboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'About D.V. Public School Rohini',
  url: 'https://dvpsrohini.com/about',
  description: 'Learn about D.V. Public School Rohini\'s vision, mission, motto, leadership, and 35+ years of CBSE excellence in Vijay Vihar, Delhi.',
  publisher: {
    '@type': 'EducationalOrganization',
    name: 'D.V. Public School Rohini',
    url: 'https://dvpsrohini.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'F-205, Phase-I, Vijay Vihar',
      addressLocality: 'Rohini',
      addressRegion: 'Delhi',
      postalCode: '110085',
      addressCountry: 'IN',
    },
    telephone: '+91 99906 16167',
    foundingDate: '1989',
    affiliation: {
      '@type': 'Organization',
      name: 'Central Board of Secondary Education (CBSE)',
    },
  },
  // Timeline as ItemList for history snippet
  mainEntity: {
    '@type': 'ItemList',
    name: 'DV Public School Rohini Journey',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '1989: Foundation - Holistic education begins',
        description: 'Established with a mission to foster Integrity, Truth, and Learning.',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '1995: CBSE Affiliation - Up to Class XII',
        description: 'Achieved CBSE recognition; introduced modern labs and expeditions.',
      },
    ],
  },
  // Persons for E-E-A-T
  author: [
    {
      '@type': 'Person',
      name: 'Thakur D.P. Singh',
      jobTitle: 'Chairman, D.V. Public School Rohini',
      description: 'Founder inspired by holistic education; committed to innovative, affordable learning.',
      url: 'https://dvpsrohini.com/about#chairman', // Anchor if added
    },
    {
      '@type': 'Person',
      name: 'Mrs. Poonam Singh',
      jobTitle: 'Principal, D.V. Public School Rohini',
      description: 'Leads with focus on academic and personal development in a supportive environment.',
      url: 'https://dvpsrohini.com/about#principal',
    },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://dvpsrohini.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: 'https://dvpsrohini.com/about',
      },
    ],
  },
};

export default function About() {
  return (
    <>
      {/* Schema in <head> */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AboutSchema) }}
      />
      <main className="pt-20"> {/* Semantic wrapper for accessibility */}
        <VisionMission /> {/* Suggest: H1 "About D.V. Public School Rohini: Shaping Tomorrow's Leaders" + H2s for Vision/Mission/Motto */}
        <PrincipalMessage /> {/* Internal link: To /admissions in CTA */}
        <History /> {/* H2 "Our Journey: 35+ Years of Excellence in Rohini" + timeline schema tie-in */}
        <ProspectusCTA /> {/* Keyword: "Download Prospectus for CBSE Admissions 2026" */}
      </main>
    </>
  );
}