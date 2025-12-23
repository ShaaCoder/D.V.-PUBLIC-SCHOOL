import { Metadata, ResolvingMetadata } from 'next';
import Script from 'next/script';
import Hero from '@/components/home/Hero';
import SchoolIntro from '@/components/home/SchoolIntro';
import NoticeBoard from '@/components/home/NoticeBoard';
import Highlights from '@/components/home/Highlights';
import Testimonials from '@/components/home/Testimonials';

// Dynamic metadata (expandable for CMS integration)
export async function generateMetadata(
  { params, searchParams }: { params: { slug: string }; searchParams: { [key: string]: string | string[] | undefined } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: {
      default: 'D.V. Public School Rohini - Premier CBSE School in Delhi | Admissions 2026 Open',
      template: '%s | D.V. Public School Rohini',
    },
    description: "Discover D.V. Public School Rohini: CBSE-affiliated excellence from Nursery to Class XII in Vijay Vihar. State-of-the-art facilities, holistic curriculum, and experienced faculty. Admissions for 2026 now open—join our Rohini community today.",
    keywords: 'D.V. Public School Rohini, CBSE school Rohini Delhi, school admissions 2026, Vijay Vihar school, best CBSE school North Delhi',
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
    openGraph: {
      title: 'D.V. Public School Rohini - CBSE Excellence in Rohini Delhi',
      description: 'Nurturing future leaders since 1989. Modern facilities, expert faculty, and vibrant extracurriculars in Vijay Vihar.',
      url: 'https://dvpsrohini.com',
      siteName: 'D.V. Public School Rohini',
      images: [
        {
          url: 'https://dvpsrohini.com/og-hero.jpg',
          width: 1200,
          height: 630,
          alt: 'D.V. Public School Rohini Campus, Vijay Vihar',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'D.V. Public School Rohini - Admissions 2026',
      description: 'CBSE school in Rohini Delhi: Holistic education, top facilities. Enroll now!',
      images: ['https://dvpsrohini.com/twitter-hero.jpg'],
      // Add creator: '@dvpsrohini' once active
    },
    alternates: {
      canonical: 'https://dvpsrohini.com/',
    },
    verification: {
      google: 'your-google-site-verification-code', // Add post-launch
    },
  };
}

// JSON-LD Schema with real school data
const SchoolSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'D.V. Public School Rohini',
  url: 'https://dvpsrohini.com',
  logo: 'https://dvpsrohini.com/logo.png',
  description: 'CBSE-affiliated public school in Rohini Delhi, offering Nursery to Class XII with a focus on holistic development and academic excellence since 1989.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'F-205, Phase-I, Vijay Vihar',
    addressLocality: 'Rohini',
    addressRegion: 'Delhi',
    postalCode: '110085',
    addressCountry: 'IN',
  },
  telephone: '+91 99906 16167',
  email: 'info@dvpsrohini.com', // Confirm/update
  foundingDate: '1989',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Educational Programs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'CBSE Nursery to Class XII',
          description: 'Comprehensive CBSE curriculum with STEM, arts, and sports in Rohini.',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '3.8',
    reviewCount: '81',
    bestRating: '5',
  },
  sameAs: [
    'https://www.facebook.com/p/D-V-Public-School-100094225887331/',
    'https://www.instagram.com/dvps89/',
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="school-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SchoolSchema) }}
      />
      <div>
        <Hero /> {/* H1: "D.V. Public School Rohini: Your Gateway to CBSE Success" */}
        <SchoolIntro /> {/* Infuse: "CBSE Rohini," "Vijay Vihar facilities" */}
        <NoticeBoard /> {/* 2025/26 admissions notice? */}
        <Highlights /> {/* Alt text: "Rohini school labs," etc. */}
        <Testimonials /> {/* Pull Justdial reviews if dynamic */}
      </div>
    </>
  );
}