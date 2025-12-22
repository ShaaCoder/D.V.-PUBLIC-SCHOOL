import { Eye, Target, Lightbulb } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            About D.V. PUBLIC SCHOOL
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Shaping tomorrow's leaders through innovative and inclusive education
          </p>
        </div>

        {/* Vision, Mission, and Motto Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="relative bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-md">
                <Eye className="h-7 w-7 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center mt-4">Our Vision</h3>
            <div className="text-gray-600 text-base leading-relaxed text-center space-y-4">
              <p>
                As a premier educational institution, D.V. PUBLIC SCHOOL is a diverse, inclusive community committed to academic excellence, catering to each student’s unique needs and strengths.
              </p>
              <p>
                We propagate the values of Integrity, Truth, and Learning to foster comprehensive and holistic growth, nurturing the human spirit.
              </p>
              <p>
                Our focus on Universal Design of Learning brings flexibility to the curriculum, incorporating Action-Oriented Learning, Visual, and Performing Arts.
              </p>
              <p>
                We embrace Gender-Sensitive Pedagogy to promote equality, empathy, and respect, shaping students into responsive citizens.
              </p>
              <p>
                We aim to prepare all students for success in a sustainable global economy through transformative education.
              </p>
              <p>
                An effective safety mechanism ensures the well-being of every student, every day.
              </p>
              <p>
                We integrate Sustainable Development Goals into our curriculum through Project-Based Learning.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-md">
                <Target className="h-7 w-7 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center mt-4">Our Mission</h3>
            <div className="text-gray-600 text-base leading-relaxed text-center space-y-4">
              <p>
                D.V. PUBLIC SCHOOL aspires to be a leader in educational excellence and community involvement, creating an all-inclusive environment where students thrive in a caring, comforting, and secure setting, guided by the principle of ‘Accept and Not Expect.’
              </p>
              <p>
                We connect classrooms to real life through differentiated, experiential, and reflective teaching-learning methodologies.
              </p>
              <p>
                Our mission is to nurture confident, competent communicators who are skillful in problem-solving and critical thinking.
              </p>
              <p>
                We globalize Indian values of Tolerance, Non-Violence, and Love by integrating a rigorous academic curriculum with immersive global experiences.
              </p>
              <p>
                We foster a conducive environment for students to become transformational leaders through connecting, sharing, and collaborating with the global community and like-minded organizations.
              </p>
              <p>
                We empower students to believe in their potential, embrace learning, excel, and own their future.
              </p>
              <p>
                Parents are involved as partners to bridge the gap between teaching and learning communities.
              </p>
              <p>
                We are committed to the professional development of teachers through continuous capacity-building programs to ensure quality education.
              </p>
            </div>
          </div>

          {/* Motto Card */}
          <div className="relative bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full shadow-md">
                <Lightbulb className="h-7 w-7 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center mt-4">Our Motto</h3>
            <div className="text-gray-600 text-base leading-relaxed text-center space-y-4">
              <p>
                Established in 1989, D.V. PUBLIC SCHOOL is the only Senior Secondary School in the locality, recognized by CBSE up to XII with all streams, meticulously planned by leading luminaries in education.
              </p>
              <p>
                Our nature-friendly campus offers modern amenities, including Audio-Visual, Science, and Computer Laboratories, and a well-equipped Library, fostering both mental and physical well-being.
              </p>
              <p>
                We enrich students’ experiences through educational expeditions to national heritage sites like Rashtrapati Bhawan, Amrit Udyan, and various museums (e.g., Science, Doll).
              </p>
              <p>
                An institution in pursuit of excellence, DVPS focuses on Integrity, Truth, and Learning, shaping responsible, dynamic personalities through holistic development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
