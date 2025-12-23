import { Metadata } from 'next';
import Script from 'next/script';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import MapSection from '@/components/contact/MapSection';

// Dynamic metadata (e.g., for seasonal "2026 admissions contact")
export async function generateMetadata({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
  return {
    title: {
      default: 'Contact DV Public School Rohini - Best CBSE School in Rohini Delhi | Admissions 2026',
      template: '%s | DV Public School Rohini - Top Delhi School',
    },
    description: "Get in touch with DV Public School Rohini, the best school in Rohini for CBSE education. Contact our Vijay Vihar campus for inquiries, admissions 2026, or visit the top Delhi school near Shri Hanuman Mandir—phone, email, or form.",
    keywords: 'Contact DV Public School Rohini, best school in Rohini, CBSE school Rohini Delhi, Rohini school admissions, top Delhi schools Vijay Vihar, Delhi best schools contact',
    authors: [{ name: 'DV Public School Rohini Admissions Team' }],
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
      title: 'Contact Us - DV Public School Rohini: Best CBSE School in Rohini',
      description: 'Reach the top Delhi school in Vijay Vihar for CBSE inquiries and 2026 admissions. Easy access near Shri Hanuman Mandir.',
      url: 'https://dvpsrohini.com/contact',
      siteName: 'D.V. Public School Rohini',
      images: [
        {
          url: 'https://dvpsrohini.com/og-contact.jpg', // e.g., campus map or team photo
          width: 1200,
          height: 630,
          alt: 'Contact the Best School in Rohini - DV Public School Vijay Vihar Delhi',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact DVPS Rohini - Premier CBSE School in Delhi',
      description: 'Inquire at the best Rohini school: +91 9990616167 or form. Top Delhi CBSE option!',
      images: ['https://dvpsrohini.com/twitter-contact.jpg'],
    },
    alternates: {
      canonical: 'https://dvpsrohini.com/contact',
    },
    verification: {
      google: 'your-google-site-verification-code',
    },
  };
}

// JSON-LD Schema: LocalBusiness for NAP + geo (boosts Maps/local pack for "Rohini school")
const ContactSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dvpsrohini.com/#school',
  name: 'D.V. Public School Rohini - Best CBSE School in Rohini Delhi',
  url: 'https://dvpsrohini.com',
  telephone: '+91 9990616167',
  email: 'dvpublicschool89@gmail.com',
  description: 'Contact the top Delhi school and best CBSE option in Rohini: Vijay Vihar campus for admissions, inquiries, and visits. Mon-Fri 8AM-4PM.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'F Block Vijay Vihar Phase-1, Near Shri Hanuman Mandir',
    addressLocality: 'Rohini',
    addressRegion: 'Delhi',
    postalCode: '110085',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.75, // Approx for Vijay Vihar Rohini—verify exact via Google Maps
    longitude: 77.11,
  },
  openingHours: 'Mo-Fr 08:00-16:00', // Matches office hours
  sameAs: [
    'https://www.facebook.com/p/D-V-Public-School-100094225887331/',
    'https://www.instagram.com/dvps89/',
  ],
  // FAQ for voice/local searches (e.g., "contact best school in Rohini")
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How to contact the best school in Rohini for CBSE admissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Call DV Public School Rohini at +91 9990616167, email dvpublicschool89@gmail.com, or visit F Block Vijay Vihar Phase-1 near Shri Hanuman Mandir, Delhi 110085.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the office hours for top Delhi schools like DVPS Rohini?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mon-Fri: 8:00 AM - 4:00 PM. WhatsApp or form inquiries responded within 24 hours.',
        },
      },
    ],
  },
  // Tie to parent org
  parentOrganization: {
    '@type': 'EducationalOrganization',
    name: 'D.V. Public School Rohini',
    affiliation: {
      '@type': 'Organization',
      name: 'Central Board of Secondary Education (CBSE)',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dvpsrohini.com' },
      { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://dvpsrohini.com/contact' },
    ],
  },
};

export default function Contact() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ContactSchema) }}
      />
      <main className="pt-20"> {/* Semantic for accessibility/crawling */}
        <ContactInfo /> {/* H1: "Contact DV Public School Rohini - Premier CBSE School in Delhi" + keywords in address desc */}
        <ContactForm /> {/* Form: Add placeholder "Inquiry for Best Rohini School Admissions 2026" */}
        <MapSection /> {/* Embed: <iframe src="https://maps.google.com/...&q=DV+Public+School+Rohini" /> with alt="Map to Top CBSE School Vijay Vihar Rohini" */}
      </main>
    </>
  );
}