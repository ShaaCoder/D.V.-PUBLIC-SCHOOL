import React from 'react';

export default function Messages() {
  return (
    <>
     {/* Chairman's Message Section */}
     <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Chairman's Photo */}
            <div className="mb-8 lg:mb-0">
              <div className="relative">
                <img
                  src="./images/princinple sir.jpg"
                  alt="Mr. Thakur D.P Singh, Chairman of DV Public School"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-4 shadow-lg">
                  <p className="text-white font-semibold text-lg">Thakur D.P Singh</p>
                  <p className="text-white/90 text-sm">Chairman</p>
                </div>
              </div>
            </div>

            {/* Chairman's Message */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Chairman's Message
              </h2>
              
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="text-lg leading-relaxed">
                  Dear DV Public School Community,
                </p>
                
                <p className="leading-relaxed">
                  Education is not a preparation for life but is life itself. This belief, rooted in my school days, inspired me to establish a school where education transcends formal teaching. At DV Public School, we aim to provide a holistic education that equips students to find purpose and fulfillment in their lives.
                </p>
                
                <p className="leading-relaxed">
                  A good school does more than educate; it instills compassion and concern for others, regardless of class, caste, or religion. As the son of a dedicated schoolteacher, the late U.P. Pramanik, I was driven to realize my father’s dream. Establishing this institution was a Herculean task, but with the grace of the Almighty, we are steadily achieving success.
                </p>
                
                <p className="leading-relaxed">
                  Quality education cannot be purchased—it is achieved through the dedication of inspired teachers. Every student possesses inherent talent, and it is our teachers’ mission to nurture and unlock this potential, enabling each child to excel in life. U.P. Public School uniquely blends traditional and contemporary teaching methods, tailored to the age, ability, and aptitude of each student.
                </p>
                
                <p className="leading-relaxed">
                  To meet the challenges of a rapidly evolving India and global education systems, I am committed to fostering an educational and infrastructural environment that is both innovative and affordable. Your cooperation is vital to fulfilling this noble mission.
                </p>
                
                <p className="text-lg font-medium text-gray-900 mt-6">
                  Together, let us shape a future of excellence,
                </p>
                
                <div className="mt-8">
                  <div className="text-lg font-semibold text-indigo-600">Thakur D.P Singh</div>
                  <div className="text-gray-600">Chairman, D.V. Public School</div>
                  {/* <div className="text-sm text-gray-500 mt-1">B.Tech., MBA</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Principal's Message Section */}
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Principal's Photo */}
          <div className="mb-8 lg:mb-0">
            <div className="relative">
              <img
                src="./images/poonam mam.jpg"
                alt="Mrs. Poonam Singh, Principal of DV Public School"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 shadow-lg">
                <p className="text-white font-semibold text-lg">Mrs. Poonam Singh</p>
                <p className="text-white/90 text-sm">Principal</p>
              </div>
            </div>
          </div>

          {/* Principal's Message */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Principal's Message
            </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p className="text-lg leading-relaxed">
                Dear Students, Parents, and Well-wishers,
              </p>
              
              <p className="leading-relaxed">
                Since its establishment, DV Public School has earned a distinguished reputation for excellence in education. Our institution is built on a foundation of exceptional infrastructure, an encouraging environment, and a dedicated faculty of highly qualified and experienced teachers.
              </p>
              
              <p className="leading-relaxed">
                We offer a vast range of core and co-curricular programs designed to foster not only academic success but also personal achievement and the holistic development of each student’s personality. Our students—girls and boys alike—are highly motivated and share a common commitment to excellence.
              </p>
              
              <p className="leading-relaxed">
                At DV Public School, we nurture individuals who are prepared to excel in all facets of life, contributing positively to society with confidence and compassion.
              </p>
              
              <p className="text-lg font-medium text-gray-900 mt-6">
                Together, let's continue this legacy of excellence.
              </p>
              
              <div className="mt-8">
                <div className="text-lg font-semibold text-orange-600">Mrs. Poonam Singh</div>
                <div className="text-gray-600">Principal, D.V. Public School</div>
                {/* <div className="text-sm text-gray-500 mt-1">M.Ed., Ph.D. in Education</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

     
    </>
  );
}
