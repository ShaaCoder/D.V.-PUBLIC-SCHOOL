import { Metadata } from 'next';
import Script from 'next/script';
import NoticeList from '@/components/notices/NoticeList';

// Dynamic metadata: Fetch latest notice for personalization (e.g., via API/CMS)
export async function generateMetadata({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
  // Placeholder: Fetch latest (e.g., const latestNotice = await getLatestNotice();)
  const latestTitle = 'Admissions Open Dec 2025 - Best CBSE School in Rohini'; // Dynamic fallback

  return {
    title: {
      default: `Notices & Announcements - DV Public School Rohini | Latest ${latestTitle}`,
      template: '%s | DV Public School Rohini - Top Delhi School Notices',
    },
    description: "Stay updated with DV Public School Rohini notices: Admissions 2026 (open Dec 4-27, 2025), events, holidays, and announcements from the best school in Rohini. CBSE excellence in Vijay Vihar Delhi—your top Delhi school source.",
    keywords: 'Notices DV Public School Rohini, best school in Rohini announcements, CBSE school Rohini updates 2025, Rohini school events, Delhi best schools notices, Vijay Vihar admissions notice',
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
      title: 'Latest Notices - DV Public School Rohini: CBSE Announcements & Events',
      description: 'Rohini school updates: Admissions, holidays, and more from top Delhi CBSE institution.',
      url: 'https://dvpsrohini.com/notices',
      siteName: 'D.V. Public School Rohini',
      images: [
        {
          url: 'https://dvpsrohini.com/og-notices.jpg', // e.g., admissions banner
          width: 1200,
          height: 630,
          alt: 'DV Public School Rohini Notices - Best CBSE School Announcements 2025',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'DVPS Rohini Notices - Premier Rohini School Updates',
      description: 'Latest CBSE announcements from the best school in Rohini Delhi—admissions now open!',
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

// JSON-LD Schema: CollectionPage with ItemList of NewsArticle (for announcements)
const NoticesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Latest Notices & Announcements - D.V. Public School Rohini',
  url: 'https://dvpsrohini.com/notices',
  description: 'Timely updates from the best CBSE school in Rohini: Admissions, events, and notices for Vijay Vihar Delhi community.',
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
  // ItemList: Sample notices (dynamic from <NoticeList /> data)
  mainEntity: {
    '@type': 'ItemList',
    name: 'DV Public School Rohini Notices',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'NewsArticle',
          headline: 'Admissions Open for 2026 - Best School in Rohini',
          datePublished: '2025-12-04',
          dateModified: '2025-12-04',
          description: 'CBSE Nursery to XII admissions at DV Public School Rohini open Dec 4-27, 2025. Apply now for top Delhi school spots in Vijay Vihar.',
          author: {
            '@type': 'Organization',
            name: 'D.V. Public School Rohini',
          },
          publisher: {
            '@type': 'EducationalOrganization',
            name: 'D.V. Public School Rohini',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            url: 'https://dvpsrohini.com/notices/admissions-2026',
          },
        },
      },
      // Add more dynamically, e.g.:
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'NewsArticle',
          headline: 'Winter Holiday Notice - Rohini CBSE School',
          datePublished: '2025-12-20',
          description: 'School closed Dec 24, 2025 - Jan 5, 2026. Wishing our Delhi community joy from the best school in Rohini.',
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

export default function Notices() {
  return (
    <>
      <Script
        id="notices-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(NoticesSchema) }}
      />
      <main className="pt-20"> {/* Semantic wrapper */}
        <NoticeList /> {/* H1: "Latest Notices from DV Public School Rohini - Top CBSE Updates" + per-notice <article> with keywords */}
        {/* Optional: RSS link <link rel="alternate" type="application/rss+xml" title="DVPS Rohini Notices" href="/rss/notices.xml" /> */}
      </main>
    </>
  );
}