import { Calendar, Award, Users, BookOpen } from 'lucide-react';

const milestones = [
  {
    year: '1989',
    title: 'Foundation',
    description: 'DV Public School was established with a mission to provide holistic education, fostering Integrity, Truth, and Learning.',
    icon: BookOpen,
  },
  {
    year: '1995',
    title: 'CBSE Affiliation',
    description: 'Achieved affiliation with the Central Board of Secondary Education, offering all streams up to XII.',
    icon: Award,
  },
  {
    year: '',
    title: 'Modern Facilities Introduced',
    description: 'Introduced state-of-the-art Audio-Visual, Science, and Computer Laboratories, along with a well-equipped Library.',
    icon: Users,
  },
  {
    year: '',
    title: 'Educational Expeditions Launched',
    description: 'Initiated educational tours to national heritage sites like Rashtrapati Bhawan and Amrit Udyan for student enrichment.',
    icon: Calendar,
  },
];

export default function History() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Over three decades of educational excellence and continuous growth
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-orange-500 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
                    <div className="text-2xl font-bold text-orange-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 shadow-lg">
                    <milestone.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditation */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Accreditation & Recognition</h3>
            <p className="text-gray-600 mb-6">
              DV Public School is affiliated with the Central Board of Secondary Education (CBSE) 
              and recognized for its commitment to holistic education and a nature-friendly environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">
                CBSE Affiliated
              </span>
              <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">
                Green School Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}