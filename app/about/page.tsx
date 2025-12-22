import VisionMission from '@/components/about/VisionMission';
import PrincipalMessage from '@/components/about/PrincipalMessage';
import History from '@/components/about/History';
import ProspectusCTA from '@/components/shared/ProspectusCTA';

export const metadata = {
  title: 'About Us - DV Public School',
  description: 'Learn about DV Public School\'s vision, mission, and commitment to excellence in education',
};

export default function About() {
  return (
    <div className="pt-20">
      <VisionMission />
      <PrincipalMessage />
      <History />
      <ProspectusCTA />
    </div>
  );
}