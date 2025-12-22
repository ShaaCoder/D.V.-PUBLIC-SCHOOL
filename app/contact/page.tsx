import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import MapSection from '@/components/contact/MapSection';

export const metadata = {
  title: 'Contact Us - DV Public School',
  description: 'Get in touch with DV Public School for admissions, inquiries, and more information',
};

export default function Contact() {
  return (
    <div className="pt-20">
      <ContactInfo />
      <ContactForm />
      <MapSection />
    </div>
  );
}