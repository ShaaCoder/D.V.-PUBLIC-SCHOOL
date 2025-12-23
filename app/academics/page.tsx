import { Metadata } from 'next';
import Script from 'next/script';
import Programs from '@/components/academics/Programs';
import Curriculum from '@/components/academics/Curriculum';
import CoCurrentrical from '@/components/academics/CoCurrenticular'; // Typo fix: CoCurricular?

// Dynamic metadata (e.g., for syllabus updates)
export async function generateMetadata({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
  return {
    title: {
      default: 'Academics at D.V. Public School Rohini - CBSE Curriculum from Primary to Senior Secondary',
      template: '%s | D.V. Public School Rohini',
    },
    description: "Explore D.V. Public School Rohini's comprehensive CBSE academics: Primary (I-V), Middle (VI-VIII), Secondary (IX-X), and Senior Secondary streams (XI-XII) in Vijay Vihar. Plus co-curriculars for holistic growth—prepare for 2026 admissions.",
    keywords: 'Academics D.V. Public School Rohini, CBSE curriculum Rohini Delhi, Primary school Vijay Vihar, Senior Secondary streams Rohini, co-curricular activities CBSE Rohini',
    authors: [{ name: 'D.V. Public School Rohini Academics Team' }],
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
      title: 'CBSE Academics & Programs - D.V. Public School Rohini',
      description: 'From foundational Primary learning to specialized Senior Secondary streams in Rohini Delhi. Nurture skills with co-curriculars like sports and arts.',
      url: 'https://dvpsrohini.com/academics',
      siteName: 'D.V. Public School Rohini',
      images: [
        {
          url: 'https://dvpsrohini.com/og-academics.jpg', // e.g., classroom/streams collage
          width: 1200,
          height: 630,
          alt: 'CBSE Academics at D.V. Public School Rohini - Primary to Senior Secondary',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Explore Academics at DV Public School Rohini - CBSE Excellence',
      description: 'Comprehensive programs from Classes I-XII + co-curriculars in Vijay Vihar. Admissions 2026 open!',
      images: ['https://dvpsrohini.com/twitter-academics.jpg'],
    },
    alternates: {
      canonical: 'https://dvpsrohini.com/academics',
    },
    verification: {
      google: 'your-google-site-verification-code',
    },
  };
}

// JSON-LD Schema: EducationalOccupationalProgram for levels + OfferCatalog
const AcademicsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Academics at D.V. Public School Rohini',
  url: 'https://dvpsrohini.com/academics',
  description: 'CBSE-aligned academic programs from Primary to Senior Secondary at D.V. Public School Rohini, Vijay Vihar, Delhi, with co-curricular enrichment.',
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
    affiliation: {
      '@type': 'Organization',
      name: 'Central Board of Secondary Education (CBSE)',
    },
  },
  // Main entity: OfferCatalog for programs
  mainEntity: {
    '@type': 'OfferCatalog',
    name: 'Academic Programs at D.V. Public School Rohini',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'Primary Education (Classes I-V)',
          description: 'Foundation years in Rohini focusing on literacy, numeracy, and play-based development.',
          educationalLevel: 'https://schema.org/ElementarySchool',
          subject: {
            '@type': 'ItemList',
            itemListElement: [
              { '@type': 'DefinedTerm', name: 'English', termCode: 'ENG' },
              { '@type': 'DefinedTerm', name: 'Hindi', termCode: 'HIN' },
              { '@type': 'DefinedTerm', name: 'Mathematics', termCode: 'MATH' },
              { '@type': 'DefinedTerm', name: 'Environmental Science', termCode: 'EVS' },
              { '@type': 'DefinedTerm', name: 'Art & Craft', termCode: 'ART' },
              { '@type': 'DefinedTerm', name: 'Physical Education', termCode: 'PE' },
            ],
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'Middle School (Classes VI-VIII)',
          description: 'Transitional specialization with holistic focus in Vijay Vihar.',
          educationalLevel: 'https://schema.org/MiddleSchool',
          subject: {
            '@type': 'ItemList',
            itemListElement: [
              { '@type': 'DefinedTerm', name: 'English' },
              { '@type': 'DefinedTerm', name: 'Hindi' },
              { '@type': 'DefinedTerm', name: 'Mathematics' },
              { '@type': 'DefinedTerm', name: 'Science' },
              { '@type': 'DefinedTerm', name: 'Social Science' },
              { '@type': 'DefinedTerm', name: 'Computer Science' },
            ],
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'Secondary Education (Classes IX-X)',
          description: 'Board prep with career guidance at DVPS Rohini.',
          educationalLevel: 'https://schema.org/SecondarySchool',
          subject: {
            '@type': 'ItemList',
            itemListElement: [
              { '@type': 'DefinedTerm', name: 'English' },
              { '@type': 'DefinedTerm', name: 'Hindi' },
              { '@type': 'DefinedTerm', name: 'Mathematics' },
              { '@type': 'DefinedTerm', name: 'Science' },
              { '@type': 'DefinedTerm', name: 'Social Science' },
              { '@type': 'DefinedTerm', name: 'Computer Science' },
            ],
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'Senior Secondary (Classes XI-XII)',
          description: 'Commerce and Arts streams for higher ed in Rohini.',
          educationalLevel: 'https://schema.org/HighSchool',
          subject: {
            '@type': 'ItemList',
            itemListElement: [
              { '@type': 'DefinedTerm', name: 'Commerce Stream' },
              { '@type': 'DefinedTerm', name: 'Arts Stream' },
            ],
          },
        },
      },
    ],
  },
  // Co-curricular as additional entity
  hasPart: {
    '@type': 'ItemList',
    name: 'Co-Curricular Activities',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Music & Dance' },
      { '@type': 'ListItem', position: 2, name: 'Arts & Crafts' },
      { '@type': 'ListItem', position: 3, name: 'Sports' },
      { '@type': 'ListItem', position: 4, name: 'Cultural Events' },
      { '@type': 'ListItem', position: 5, name: 'Media Club' },
    ],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dvpsrohini.com' },
      { '@type': 'ListItem', position: 2, name: 'Academics', item: 'https://dvpsrohini.com/academics' },
    ],
  },
};

export default function Academics() {
  return (
    <>
      <Script
        id="academics-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AcademicsSchema) }}
      />
      <main className="pt-20"> {/* Semantic for crawlability */}
        <Programs /> {/* H1: "Comprehensive CBSE Academics at D.V. Public School Rohini" + H2 per level */}
        <Curriculum /> {/* Uncommented: Tie to syllabus downloads if available */}
        <CoCurrentrical /> {/* H2: "Co-Curricular Activities for Holistic Development in Rohini" + links to /facilities */}
        {/* Add CTA: <ProspectusCTA text="Download 2026 Syllabus" link="/admissions" /> */}
      </main>
    </>
  );
}