import NoticeList from '@/components/notices/NoticeList';

export const metadata = {
  title: 'Notices - DV Public School',
  description: 'Stay updated with the latest notices and announcements from DV Public School',
};

export default function Notices() {
  return (
    <div className="pt-20">
      <NoticeList />
    </div>
  );
}