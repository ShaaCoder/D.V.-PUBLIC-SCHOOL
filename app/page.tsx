import Hero from '@/components/home/Hero';
import SchoolIntro from '@/components/home/SchoolIntro';
import NoticeBoard from '@/components/home/NoticeBoard';
import Highlights from '@/components/home/Highlights';
import Testimonials from '@/components/home/Testimonials';

export const metadata = {
  title: 'DV Public School - Home',
  description: 'Welcome to DV Public School - Excellence in Education with modern facilities and experienced faculty',
};

export default function Home() {
  return (
    <div>
      <Hero />
      <SchoolIntro />
      <NoticeBoard />
      <Highlights />
      <Testimonials />
    </div>
  );
}