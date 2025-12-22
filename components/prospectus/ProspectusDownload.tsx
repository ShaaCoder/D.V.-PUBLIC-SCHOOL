import { Download, FileText, CheckCircle, Star } from 'lucide-react';

const highlights = [
  'Complete academic programs overview',
  'Admission procedures and requirements',
  'Fee structure and payment options',
  'Facilities and infrastructure details',
  'Faculty profiles and qualifications',
  'Extra-curricular activities information',
  'Achievement records and testimonials',
  'Campus life and student support services',
];

export default function ProspectusDownload() {
  return (
    <div className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            School Prospectus
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive school prospectus to learn everything about DV Public School
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-12 text-center">
            <FileText className="h-20 w-20 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">
              DV Public School Prospectus 2024-25
            </h2>
            <p className="text-white/90 text-lg">
              Complete guide to our educational programs and facilities
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* What's Included */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  What's Included
                </h3>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Facts */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Established', value: '1985' },
                    { label: 'Affiliation', value: 'CBSE' },
                    { label: 'Classes', value: 'I to XII' },
                    { label: 'Students', value: '1200+' },
                    { label: 'Faculty', value: '80+' },
                    { label: 'Campus Area', value: '5 Acres' },
                  ].map((fact, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                      <span className="font-medium text-gray-700">{fact.label}:</span>
                      <span className="font-semibold text-orange-600">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Learn More?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Download our detailed prospectus to get comprehensive information about admissions, 
                programs, facilities, and everything else you need to know about DV Public School.
              </p>
              
              <a
                href="/DV-Public-School-Prospectus.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Download className="mr-3 h-6 w-6" />
                Download School Prospectus (PDF)
              </a>
              
              <p className="text-sm text-gray-500 mt-4">
                File size: 2.5 MB | Last updated: January 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}