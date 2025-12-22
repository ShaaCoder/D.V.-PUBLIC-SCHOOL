import PhotoGallery from '@/components/gallery/PhotoGallery';

export const metadata = {
  title: 'Gallery - DV Public School',
  description: 'View photos of our campus, events, and student life at DV Public School',
};

export default function Gallery() {
  return (
    <div className="pt-20">
      <PhotoGallery />
    </div>
  );
}