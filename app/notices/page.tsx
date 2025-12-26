import { Metadata } from 'next';
import Script from 'next/script';
import NoticeList from '@/components/notices/NoticeList';

// Dynamic metadata: Use real latest notice (DVPS/07, 24/12/2025)
export async function generateMetadata({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
  const latestNotice = {
    title: 'Online Classes Due to AQI - Rohini CBSE School Update',
    date: '2025-12-24',
  }; // Fetch/parse from content/API

  return {
    title: {
      default: `Notices & Announcements - DV Public School Rohini | ${latestNotice.title}`,
      template: '%s | DV Public School Rohini - Best Delhi School Updates',
    },
    description: "Latest DV Public School Rohini notices: Online mode from 26 Dec 2025 (AQI GRAP IV), Christmas holiday 25 Dec, winter vacation 31 Dec-07 Jan 2026, and more holidays/PTMs from the best CBSE school in Rohini Vijay Vihar Delhi.",
    keywords: 'Notices DV Public School Rohini, best school in Rohini holidays 2025, CBSE Rohini AQI online classes, Delhi school winter vacation 2026, Rohini school PTM November, Vijay Vihar Gurupurab holiday',
    authors: [{ name: 'DV Public School Rohini Administration' }],
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
      title: `DVPS Rohini Notices: AQI Updates & Holidays - Top CBSE School`,
      description: 'Stay informed on Rohini school holidays, online classes, and events from premier Delhi institution.',
      url: 'https://dvpsrohini.com/notices',
      siteName: 'D.V. Public School Rohini',
      images: [
        {
          url: 'https://dvpsrohini.com/og-notices.jpg',
          width: 1200,
          height: 630,
          alt: 'DV Public School Rohini - Latest CBSE Notices & Holidays December 2025',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Latest DVPS Rohini Notices - Holidays & AQI Alerts',
      description: 'Christmas break, online mode starts today 26 Dec—updates from best Rohini CBSE school!',
      images: ['https://dvpsrohini.com/twitter-notices.jpg'],
    },
    alternates: {
      canonical: 'https://dvpsrohini.com/notices',
    },
    verification: {
      google: 'your-google-site-verification-code',
    },
  };
}

// JSON-LD Schema: Updated with all 8 real notices (reverse-chrono; as NewsArticle for snippets)
const NoticesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Latest Notices & Announcements - D.V. Public School Rohini',
  url: 'https://dvpsrohini.com/notices',
  description: 'Current updates from best CBSE school in Rohini: AQI online classes (26 Dec 2025+), Christmas holiday, winter vacation, and prior holidays/PTMs in Vijay Vihar Delhi.',
  publisher: {
    '@type': 'EducationalOrganization',
    name: 'D.V. Public School Rohini',
    url: 'https://dvpsrohini.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'F Block Vijay Vihar Phase-1, Near Shri Hanuman Mandir',
      addressLocality: 'Rohini',
      addressRegion: 'Delhi',
      postalCode: '110085',
      addressCountry: 'IN',
    },
    telephone: '+91 9990616167',
    affiliation: {
      '@type': 'Organization',
      name: 'Central Board of Secondary Education (CBSE)',
    },
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'DV Public School Rohini Notices 2025-26',
    numberOfItems: 8,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'NewsArticle',
          headline: 'DVPS/07/2025-26: Online Classes for Nursery-VIII Due to AQI GRAP Stage IV',
          datePublished: '2025-12-24',
          dateModified: '2025-12-24',
          description: 'Classes online from 26 Dec 2025 till further orders for Rohini CBSE school—mandatory attendance.',
          author: { '@type': 'Organization', name: 'D.V. Public School Rohini' },
          publisher: { '@type': 'EducationalOrganization', name: 'D.V. Public School Rohini' },
          mainEntityOfPage: { '@type': 'WebPage', url: 'https://dvpsrohini.com/notices/aqi-online-2025' },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'NewsArticle',
          headline: 'DVPS/06/2025-26: Christmas Holiday 25 Dec 2025 - Best School in Rohini',
          datePublished: '2025-12-24',
          description: 'Holiday for Nursery-XII; reopen 26 Dec on usual timings at DV Public School Rohini Delhi.',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'NewsArticle',
          headline: 'DVPS/09/2025-26: Winter Vacation 31 Dec 2025 - 07 Jan 2026',
          datePublished: '2025-12-29',
          description: 'Vacation for all classes; school reopens 08 Jan 2026 (Thu) at top Rohini CBSE institution.',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'NewsArticle',
          headline: 'DVPS/04/2025-26: Hybrid Mode for Nursery-KG from 24 Nov Due to AQI GRAP III',
          datePublished: '2025-11-22',
          description: 'Adhere to schedule for Vijay Vihar Rohini school classes amid Delhi pollution.',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'NewsArticle',
          headline: 'DVPS/05/2025-26: Guru Teg Bahadur Martyrdom Day Holiday 25 Nov 2025',
          datePublished: '2025-11-24',
          description: 'Holiday Nursery-XII; reopen 26 Nov (Wed) at DVPS Rohini.',
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'NewsArticle',
          headline: 'DVPS/03/2025-26: Gurupurab Holiday 05 Nov 2025',
          datePublished: '2025-11-03',
          description: 'Holiday for all classes; reopen 06 Nov (Thu) from best Delhi school.',
        },
      },
      {
        '@type': 'ListItem',
        position: 7,
        item: {
          '@type': 'NewsArticle',
          headline: 'DVPS/02/2025-26: PTM 01 Nov 2025 for Nursery-V',
          datePublished: '2025-10-29',
          description: 'Parent-Teacher Meeting timings 08:00am-10:30am at Rohini CBSE school.',
        },
      },
      {
        '@type': 'ListItem',
        position: 8,
        item: {
          '@type': 'NewsArticle',
          headline: 'DVPS/01/2025-26: Half-Day 31 Oct 2025 - Last Working Day',
          datePublished: '2025-10-29',
          description: 'Dispersal at 11:00am for Nursery-XII at DV Public School Rohini.',
        },
      },
    ],
  },
  // FAQ for queries like "Rohini school reopen January 2026"
  mainEntityOfPage: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When does DV Public School Rohini reopen after winter vacation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'School reopens on 08 January 2026 (Thursday) after vacation from 31 Dec 2025.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are classes online at Rohini schools due to AQI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, DVPS Nursery-VIII online from 26 Dec 2025 per GRAP IV; IX-XII physical.',
        },
      },
    ],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dvpsrohini.com' },
      { '@type': 'ListItem', position: 2, name: 'Notices', item: 'https://dvpsrohini.com/notices' },
    ],
  },
};

export const revalidate = 3600; // Revalidate hourly for timely updates

export default function Notices() {
  return (
    <>
      <Script
        id="notices-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(NoticesSchema) }}
      />
      <main className="pt-20">
        <NoticeList /> {/* Render provided notices: H1 "DV Public School Rohini Latest Notices - CBSE Holidays & Updates 2025" + <article> per circular with keywords */}
        {/* RSS: <link rel="alternate" type="application/rss+xml" title="DVPS Rohini Notices RSS" href="/rss/notices.xml" /> */}
      </main>
    </>
  );
}