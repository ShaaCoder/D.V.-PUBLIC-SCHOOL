'use client';

import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Filter } from 'lucide-react';

const allNotices = [
  {
    id: 1,
    title: 'DVPS/09/2025-26 CIRCULAR: Winter Vacation Schedule',
    date: '2025-12-29',
    shortDescription: 'Thursday, 31 December 2025 to 07 January 2026 will be Winter Vacation for all the classes.',
    fullContent: 'Respected Parents Thursday, 31 December 2025 to 07 January 2026 will be Winter Vacation for all the classes.  School will REOPEN on 08 January 2026 (Thursday). Regards DVPS',
    month: 'December',
    year: '2025',
  },
  {
    id: 2,
    title: 'DVPS/07/2025-26 CIRCULAR: Online Classes for Nursery to VIII due to AQI',
    date: '2025-12-24',
    shortDescription: 'School will conduct classes in ONLINE MODE for classes Nursery to VIII FROM 26 DECEMBER 2025 till further orders.',
    fullContent: 'Respected Parents In view of the instruction received from the Directorate of Education regarding the rise in AQI levels and invoking of Stage IV schedule of GRAP, the school will be conducting classes in ONLINE MODE for classes Nursery to VIII FROM 26 DECEMBER 2025 till further orders.  Strictly adhere to the Schedule.  Attendance is Mandatory. Regards DVPS',
    month: 'December',
    year: '2025',
  },
  {
    id: 3,
    title: 'DVPS/06/2025-26 CIRCULAR: Christmas Day Holiday',
    date: '2025-12-24',
    shortDescription: 'Thursday, 25 December 2025 will be a Holiday for the students of classes Nursery to XII on account of “Christmas Day”.',
    fullContent: 'Respected Parents Thursday, 25 December 2025 will be a Holiday for the students of classes Nursery to XII on account of “Christmas Day”.  School will reopen on 26/12/2025 (Friday) on usual timing. Regards DVPS',
    month: 'December',
    year: '2025',
  },
  {
    id: 4,
    title: 'DVPS/05/2025-26 CIRCULAR: Guru Teg Bahadur’s Martyrdom Day Holiday',
    date: '2025-11-24',
    shortDescription: 'Tuesday, 25 November 2025 will be a Holiday for the students of classes Nursery to XII.',
    fullContent: 'Respected Parents Tuesday, 25 November 2025 will be a Holiday for the students of classes Nursery to XII on account of “Guru Teg Bahdur’s Martyrdom Day”  School will reopen on 26/11/2025 (Wednesday) on usual timing. Regards DVPS',
    month: 'November',
    year: '2025',
  },
  {
    id: 5,
    title: 'DVPS/04/2025-26 CIRCULAR: Hybrid Model for Nursery, L.K.G & U.K.G. due to AQI',
    date: '2025-11-22',
    shortDescription: 'School will conduct the classes for Nursery, L.K.G & U.K.G. in Hybrid Model from 24 November till further orders.',
    fullContent: 'Respected Parents In view of the instruction from the Government Authorities regarding the rise in the AQI levels and the invoking the Stage III schedule of GRAP. School will conduct the classes for Nursery, L.K.G & U.K.G. in Hybrid Model from 24 November till further orders. Kindly adhere to the timings and schedule. Regards DVPS',
    month: 'November',
    year: '2025',
  },
  {
    id: 6,
    title: 'DVPS/03/2025-26 CIRCULAR: Gurpurab Holiday Notice',
    date: '2025-11-03',
    shortDescription: 'Wednesday, 05 November 2025 will be a Holiday for the students of classes Nursery to XII on account of GURUPURAB.',
    fullContent: 'Respected Parents Wednesday, 05 November 2025 will be a Holiday for the students of classes Nursery to XII on account of GURUPUARB (Prakash Utsav).  School will reopen on 06/11/2025 (Thursday) on usual timing. Regards DVPS',
    month: 'November',
    year: '2025',
  },
  {
    id: 7,
    title: 'DVPS/02/2025-26 CIRCULAR: PTM for Nursery to V',
    date: '2025-10-29',
    shortDescription: 'Saturday, 01 November 2025 will be a PTM for the students of classes Nursery to V.',
    fullContent: 'Dear Parents Saturday, 01 November 2025 will be a PTM for the students of classes Nursery to V.  Timings 08:00am to 10:30am. Regards DVPS',
    month: 'October',
    year: '2025',
  },
  {
    id: 8,
    title: 'DVPS/01/2025-26 CIRCULAR: Half-Day on Last Working Day of October',
    date: '2025-10-29',
    shortDescription: 'Friday, 31 October 2025 will be a Half-Day for the students of classes Nursery to XII.',
    fullContent: 'Dear Parents Friday, 31 October 2025 will be a Half-Day for the students of classes Nursery to XII on account of last working day of the month.  Dispersal will be at 11:00am. Regards DVPS',
    month: 'October',
    year: '2025',
  },
];

export default function NoticeList() {
  const [expandedNotice, setExpandedNotice] = useState<number | null>(null);
  const [filterMonth, setFilterMonth] = useState('All');
  const [filterYear, setFilterYear] = useState('All');

  const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = ['All', '2025'];

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