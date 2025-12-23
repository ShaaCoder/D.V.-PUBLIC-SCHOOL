import { Metadata } from 'next';
import Script from 'next/script';
import PhotoGallery from '@/components/gallery/PhotoGallery';

// Dynamic metadata (e.g., fetch latest gallery highlights)
export async function generateMetadata({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
  return {
    title: {
      default: 'Gallery - D.V. Public School Rohini | Campus, Events & Student Life Photos',
      template: '%s | D.V. Public School Rohini Gallery',
    },
    description: "Browse our photo gallery: Stunning images of D.V. Public School Rohini campus, 2025 events, co-curricular activities, and vibrant student life in Vijay Vihar, Delhi. CBSE excellence captured—explore now!",
    keywords: 'Gallery D.V. Public School Rohini, DVPS Rohini events photos, CBSE school campus images Vijay Vihar, student life gallery Rohini Delhi, school activities 2025',
    authors: [{ name: 'D.V. Public School Rohini Media Team' }],
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
      title: 'Photo Gallery - D.V. Public School Rohini Events & Campus',
      description: 'Discover photos from DVPS Rohini: Annual Day 2025, sports meets, and more in our CBSE school gallery.',
      url: 'https://dvpsrohini.com/gallery',
      siteName: 'D.V. Public School Rohini',
      images: [
        {
          url: 'https://dvpsrohini.com/og-gallery.jpg', // Hero: e.g., 2025 event collage
          width: 1200,
          height: 630,
          alt: 'D.V. Public School Rohini - Vibrant Student Events Gallery 2025',
        },
        // Additional OGs for variety
        {
          url: 'https://dvpsrohini.com/og-campus.jpg',
          width: 1200,
          height: 630,
          alt: 'CBSE Campus Tour - D.V. Public School Rohini Vijay Vihar',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Explore DV Public School Rohini Gallery - Photos & Events',
      description: 'Campus vibes, student achievements, and Rohini school life—see it all!',
      images: ['https://dvpsrohini.com/twitter-gallery.jpg'], // 1200x675
    },
    alternates: {
      canonical: 'https://dvpsrohini.com/gallery',
    },
    verification: {
      google: 'your-google-site-verification-code',
    },
  };
}

// JSON-LD Schema: ImageGallery with sample ImageObjects (dynamic-ize via props if gallery data available)
const GallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'D.V. Public School Rohini Photo Gallery',
  url: 'https://dvpsrohini.com/gallery',
  description: 'Curated images showcasing campus facilities, events, and student activities at D.V. Public School Rohini, Vijay Vihar, Delhi.',
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
  },
  // Sample images: Replace with dynamic array from <PhotoGallery /> data
  image: [
    {
      '@type': 'ImageObject',
      url: 'https://dvpsrohini.com/images/gallery/campus-tour-2025.jpg',
      width: 1200,
      height: 800,
      caption: 'Modern CBSE campus at D.V. Public School Rohini - Vijay Vihar facilities',
      thumbnail: 'https://dvpsrohini.com/images/gallery/thumbs/campus-tour-2025-thumb.jpg',
      contentLocation: {
        '@type': 'Place',
        name: 'Vijay Vihar, Rohini, Delhi',
      },
      license: 'https://dvpsrohini.com/terms',
      creator: {
        '@type': 'Organization',
        name: 'D.V. Public School Rohini',
      },
    },
    {
      '@type': 'ImageObject',
      url: 'https://dvpsrohini.com/images/gallery/annual-day-2025.jpg',
      width: 1200,
      height: 800,
      caption: 'Annual Day celebrations 2025 at DV Public School Rohini - Student performances',
      thumbnail: 'https://dvpsrohini.com/images/gallery/thumbs/annual-day-2025-thumb.jpg',
      contentLocation: {
        '@type': 'Place',
        name: 'D.V. Public School Rohini',
      },
      license: 'https://dvpsrohini.com/terms',
      creator: {
        '@type': 'Organization',
        name: 'D.V. Public School Rohini',
      },
    },
    // Add more: e.g., sports, labs, co-curriculars
    {
      '@type': 'ImageObject',
      url: 'https://dvpsrohini.com/images/gallery/sports-meet-2025.jpg',
      width: 1200,
      height: 800,
      caption: 'Sports meet and co-curricular activities at DVPS Rohini 2025',
      thumbnail: 'https://dvpsrohini.com/images/gallery/thumbs/sports-meet-2025-thumb.jpg',
      contentLocation: {
        '@type': 'Place',
        name: 'Vijay Vihar, Rohini, Delhi',
      },
      license: 'https://dvpsrohini.com/terms',
      creator: {
        '@type': 'Organization',
        name: 'D.V. Public School Rohini',
      },
    },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dvpsrohini.com' },
      { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://dvpsrohini.com/gallery' },
    ],
  },
};

export default function Gallery() {
  return (
    <>
      <Script
        id="gallery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(GallerySchema) }}
      />
      <main className="pt-20"> {/* Semantic for better crawling */}
        <PhotoGallery /> {/* Ensure: H1 "Photo Gallery: DV Public School Rohini Moments" + H2 categories; alts with keywords; lazy="true" on images */}
        {/* Optional CTA: Link to /admissions with "Inspired? Enroll for 2026" */}
      </main>
    </>
  );
}