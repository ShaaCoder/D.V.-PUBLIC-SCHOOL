import { Award, Users, BookOpen, Heart } from 'lucide-react';

export default function SchoolIntro() {
  return (
    <section id="intro" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Excellence in Education Since 1985
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            DV Public School has been a beacon of quality education, fostering academic excellence, 
            character development, and preparing students for success in an ever-changing world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Award,
              title: 'Academic Excellence',
              description: 'Top ranking in board examinations with 100% pass rate',
            },
            {
              icon: Users,
              title: 'Expert Faculty',
              description: 'Highly qualified and experienced teachers dedicated to student success',
            },
            {
              icon: BookOpen,
              title: 'Modern Curriculum',
              description: 'Updated syllabus with focus on practical learning and skill development',
            },
            {
              icon: Heart,
              title: 'Holistic Development',
              description: 'Emphasis on sports, arts, and personality development',
            },
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}