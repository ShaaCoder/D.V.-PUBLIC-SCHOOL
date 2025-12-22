'use client';

import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Filter } from 'lucide-react';

const allNotices = [
  {
    id: 1,
    title: 'Annual Sports Day 2024',
    date: '2024-01-15',
    shortDescription: 'Join us for our annual sports day celebration with various competitions and activities.',
    fullContent: 'We are excited to announce our Annual Sports Day 2024 scheduled for January 15th. The event will include various competitions such as track and field events, team sports, and fun activities for all age groups. Parents and guardians are cordially invited to attend and cheer for our young athletes. The event will start at 9:00 AM sharp at our school playground. Please ensure students arrive by 8:30 AM for warm-up activities.',
    month: 'January',
    year: '2024',
  },
  {
    id: 2,
    title: 'Parent-Teacher Meeting',
    date: '2024-01-20',
    shortDescription: 'Scheduled parent-teacher meetings for academic progress discussion.',
    fullContent: 'Parent-Teacher meetings are scheduled for January 20th, 2024. This is an important opportunity for parents to discuss their child\'s academic progress, behavior, and overall development with teachers. Meeting slots will be allotted from 9:00 AM to 4:00 PM. Please contact the school office to book your preferred time slot. We encourage all parents to attend these meetings as they play a crucial role in your child\'s educational journey.',
    month: 'January',
    year: '2024',
  },
  {
    id: 3,
    title: 'Science Exhibition',
    date: '2024-01-25',
    shortDescription: 'Students will showcase their innovative science projects and experiments.',
    fullContent: 'Our annual Science Exhibition will be held on January 25th, 2024. Students from classes VI to XII will showcase their innovative science projects, working models, and experiments. This event aims to promote scientific thinking and creativity among students. The exhibition will be open to parents and the general public from 10:00 AM to 5:00 PM. We encourage everyone to visit and appreciate the scientific talents of our students.',
    month: 'January',
    year: '2024',
  },
  {
    id: 4,
    title: 'Winter Break Holiday Notice',
    date: '2023-12-20',
    shortDescription: 'School closure dates for winter break and reopening information.',
    fullContent: 'The school will remain closed for winter break from December 25th, 2023, to January 5th, 2024. Classes will resume on January 6th, 2024. During this period, the school office will also remain closed except for emergency situations. We wish all our students and their families a very happy and safe holiday season. Please ensure students come prepared for the new term when school reopens.',
    month: 'December',
    year: '2023',
  },
  {
    id: 5,
    title: 'Art Competition Results',
    date: '2023-12-15',
    shortDescription: 'Winners of the inter-house art competition announced.',
    fullContent: 'We are pleased to announce the results of our Inter-House Art Competition held last week. The competition saw excellent participation from students of all grades. Winners: 1st Place - Aditi Sharma (Class VIII), 2nd Place - Rohan Kumar (Class IX), 3rd Place - Priya Patel (Class VII). All participants will receive certificates of participation. The winning artworks will be displayed in our school gallery. Congratulations to all the participants for their creativity and effort.',
    month: 'December',
    year: '2023',
  },
];

export default function NoticeList() {
  const [expandedNotice, setExpandedNotice] = useState<number | null>(null);
  const [filterMonth, setFilterMonth] = useState('All');
  const [filterYear, setFilterYear] = useState('All');

  const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = ['All', '2024', '2023'];

  const filteredNotices = allNotices.filter(notice => {
    const monthMatch = filterMonth === 'All' || notice.month === filterMonth;
    const yearMatch = filterYear === 'All' || notice.year === filterYear;
    return monthMatch && yearMatch;
  });

  const toggleExpand = (noticeId: number) => {
    setExpandedNotice(expandedNotice === noticeId ? null : noticeId);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            School Notices
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest announcements, events, and important information
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-orange-500" />
              <span className="font-medium text-gray-700">Filter by:</span>
            </div>
            
            <select
              value={filterMonth}
              onChange={(e) => setFilterMonth(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Notices */}
        <div className="space-y-6">
          {filteredNotices.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg">
              <p className="text-gray-500 text-lg">No notices found for the selected filters.</p>
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div 
                key={notice.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpand(notice.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center text-orange-600 mb-2">
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
                      
                      <p className="text-gray-600">
                        {notice.shortDescription}
                      </p>
                    </div>
                    
                    <button
                      className="ml-4 p-2 text-orange-500 hover:text-orange-700 transition-colors"
                      aria-label={expandedNotice === notice.id ? 'Collapse notice' : 'Expand notice'}
                    >
                      {expandedNotice === notice.id ? (
                        <ChevronUp className="h-6 w-6" />
                      ) : (
                        <ChevronDown className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>
                
                {expandedNotice === notice.id && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4 bg-gradient-to-r from-yellow-50 to-orange-50">
                    <p className="text-gray-700 leading-relaxed">
                      {notice.fullContent}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}