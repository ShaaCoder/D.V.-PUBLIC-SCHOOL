import { GraduationCap, BookOpen, Microscope, Globe } from 'lucide-react';

const programs = [
  {
    title: 'Primary Education',
    subtitle: 'Classes I - V',
    description: 'Foundation years focusing on basic literacy, numeracy, and personality development through play-based learning.',
    icon: BookOpen,
    color: 'from-blue-400 to-blue-600',
    subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Science', 'Art & Craft', 'Physical Education'],
  },
  {
    title: 'Middle School',
    subtitle: 'Classes VI - VIII',
    description: 'Transitional phase introducing subject specialization while maintaining holistic development.',
    icon: Microscope,
    color: 'from-green-400 to-green-600',
    subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Science'],
  },
  {
    title: 'Secondary Education',
    subtitle: 'Classes IX - X',
    description: 'Board examination preparation with comprehensive curriculum and career guidance.',
    icon: GraduationCap,
    color: 'from-orange-400 to-orange-600',
    subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Science'],
  },
  {
    title: 'Senior Secondary',
    subtitle: 'Classes XI - XII',
    description: 'Specialized streams preparation for higher education and professional courses.',
    icon: Globe,
    color: 'from-purple-400 to-purple-600',
    subjects: [ 'Commerce Stream', 'Arts Stream',],
  },
];

export default function Programs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive education from foundational learning to career specialization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl mr-4 shadow-lg`}>
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                    <p className="text-orange-600 font-semibold">{program.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, subIndex) => (
                      <span 
                        key={subIndex}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm border border-orange-100"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}