import { Music, Palette, Trophy, Microscope, Globe, Camera } from 'lucide-react';

const activities = [
  {
    icon: Music,
    title: 'Music & Dance',
    description: 'Classical and contemporary music, various dance forms',
    color: 'from-pink-400 to-rose-500',
  },
  {
    icon: Palette,
    title: 'Arts & Crafts',
    description: 'Painting, sculpture, pottery, and creative workshops',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Trophy,
    title: 'Sports',
    description: 'Cricket, football, basketball, athletics, and indoor games',
    color: 'from-blue-400 to-indigo-500',
  },
 
  {
    icon: Globe,
    title: 'Cultural Events',
    description: 'Annual day, festivals, and inter-house competitions',
    color: 'from-orange-400 to-red-500',
  },
  {
    icon: Camera,
    title: 'Media Club',
    description: 'Photography, videography, and digital content creation',
    color: 'from-yellow-400 to-orange-500',
  },
];

export default function CoCurrenticular() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Co-Curricular Activities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond academics, we offer diverse activities to nurture talents and interests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-2 border border-orange-100 hover:border-orange-200"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${activity.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <activity.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {activity.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Recent Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'State Level Science Fair - 1st Place',
              'Inter-School Basketball Championship - Winners',
              'District Art Competition - Multiple Awards',
            ].map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md">
                <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <p className="font-medium text-gray-900">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}