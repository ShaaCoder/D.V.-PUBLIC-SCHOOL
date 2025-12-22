import { Download, BookOpen, Users, Target } from 'lucide-react';

export default function Curriculum() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Curriculum Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our curriculum is designed to foster critical thinking, creativity, and practical skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: BookOpen,
              title: 'Academic Excellence',
              description: 'CBSE curriculum with focus on conceptual learning and practical application',
            },
            {
              icon: Users,
              title: 'Interactive Learning',
              description: 'Student-centered approach with group activities and collaborative projects',
            },
            {
              icon: Target,
              title: 'Skill Development',
              description: 'Emphasis on 21st-century skills like critical thinking and problem-solving',
            },
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4`}>
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Downloadable Resources */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Downloadable Resources
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Primary Syllabus (I-V)',
              'Middle School Syllabus (VI-VIII)',
              'Secondary Syllabus (IX-X)',
              'Senior Secondary Syllabus (XI-XII)',
            ].map((syllabus, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg hover:from-yellow-100 hover:to-orange-100 transition-all duration-200 border border-orange-200 hover:border-orange-300 group"
              >
                <span className="font-medium text-gray-900 group-hover:text-orange-700">
                  {syllabus}
                </span>
                <Download className="h-5 w-5 text-orange-500 group-hover:text-orange-700" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}