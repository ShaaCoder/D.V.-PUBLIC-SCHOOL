import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: 'Annual Sports Day 2024',
    date: '2024-01-15',
    description: 'Join us for our annual sports day celebration with various competitions and activities.',
  },
  {
    id: 2,
    title: 'Parent-Teacher Meeting',
    date: '2024-01-20',
    description: 'Scheduled parent-teacher meetings for academic progress discussion.',
  },
  {
    id: 3,
    title: 'Science Exhibition',
    date: '2024-01-25',
    description: 'Students will showcase their innovative science projects and experiments.',
  },
];

export default function NoticeBoard() {
  return (
    <section id="notices" className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Notices
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with our latest announcements and events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {notices.map((notice) => (
            <div 
              key={notice.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1"
            >
              <div className="flex items-center text-orange-600 mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">
                  {new Date(notice.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {notice.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {notice.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/notices"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Notices
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}