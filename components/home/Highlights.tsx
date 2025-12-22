import { Trophy, Microscope, Palette, Users, Globe, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Trophy,
    title: 'Academic Achievements',
    description: 'Consistent top performance in board examinations and competitive exams',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Microscope,
    title: 'Modern Facilities',
    description: 'Well-equipped laboratories, library, and smart classrooms with latest technology',
    color: 'from-orange-400 to-red-500',
  },
  {
    icon: Palette,
    title: 'Creative Arts',
    description: 'Music, dance, painting, and drama programs to nurture artistic talents',
    color: 'from-pink-400 to-rose-500',
  },
  {
    icon: Users,
    title: 'Sports Excellence',
    description: 'Outstanding performance in inter-school competitions and state-level tournaments',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'International exchange programs and modern language learning opportunities',
    color: 'from-green-400 to-teal-500',
  },
  {
    icon: Heart,
    title: 'Character Building',
    description: 'Focus on moral values, leadership skills, and community service',
    color: 'from-purple-400 to-pink-500',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose DV Public School?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence extends beyond academics to create well-rounded individuals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <highlight.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {highlight.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}