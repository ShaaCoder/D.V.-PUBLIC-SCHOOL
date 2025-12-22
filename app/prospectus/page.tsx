import ProspectusDownload from '@/components/prospectus/ProspectusDownload';

export const metadata = {
  title: 'School Prospectus - DV Public School',
  description: 'Download the complete school prospectus with detailed information about our programs and facilities',
};

export default function Prospectus() {
  return (
    <div className="pt-20">
      <ProspectusDownload />
    </div>
  );
}