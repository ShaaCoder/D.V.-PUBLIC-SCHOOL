'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: './images/dvschool2.webp',
    alt: 'Students in classroom',
    category: 'Campus Life',
  },
  {
    id: 2,
    src: './images/dvschool.webp',
    alt: 'Science laboratory',
    category: 'Facilities',
  },
  {
    id: 3,
    src: './images/dvpublicschool.jpg',
    alt: 'Students playing sports',
    category: 'Sports',
  },
  {
    id: 4,
    src:'./images/student1.jpg',
    alt: 'Library reading area',
    category: 'Facilities',
  },
  {
    id: 5,
    src: './images/students2.jpg',
    alt: 'Art class in progress',
    category: 'Activities',
  },
  {
    id: 6,
    src: './images/dancedv.jpg',
    alt: 'School building exterior',
    category: 'Campus',
  },
  {
    id: 7,
    src: './images/teacherwithstudents.jpg',
    alt: 'Students in computer lab',
    category: 'Facilities',
  },
  {
    id: 8,
    src: './images/sirstudents.jpg',
    alt: 'Annual day performance',
    category: 'Events',
  },
  {
    id: 9,
    src: './images/sirstudents2.jpg',
    alt: 'School playground',
    category: 'Campus',
  },
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Campus Life', 'Facilities', 'Sports', 'Activities', 'Campus', 'Events'];
  
  const filteredPhotos = filter === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === filter);

  const openLightbox = (photoId: number) => {
    setSelectedPhoto(photoId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return;
    
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(filteredPhotos[newIndex].id);
  };

  const selectedPhotoData = selectedPhoto 
    ? filteredPhotos.find(photo => photo.id === selectedPhoto)
    : null;

  return (
    <div className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            School Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our vibrant campus life, modern facilities, and memorable moments
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-orange-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => openLightbox(photo.id)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{photo.alt}</p>
                  <p className="text-sm text-white/80">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPhoto && selectedPhotoData && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors z-10"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              <button
                onClick={() => navigatePhoto('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() => navigatePhoto('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <img
                src={selectedPhotoData.src}
                alt={selectedPhotoData.alt}
                className="max-w-full max-h-full rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 text-white">
                <p className="font-semibold">{selectedPhotoData.alt}</p>
                <p className="text-sm text-white/80">{selectedPhotoData.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}