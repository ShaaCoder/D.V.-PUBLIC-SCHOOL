import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or any questions about our school
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: MapPin,
              title: 'Address',
              content: 'F Block Vijay Vihar Phase-1 Rohini Delhi Near Shri Hanuman Mandir , 110085',
              link: '#',
            },
            {
              icon: Phone,
              title: 'Phone',
              content: '+91 9990616167',
              link: 'tel:+919990616167',
            },
            {
              icon: Mail,
              title: 'Email',
              content: 'dvpublicschool89@gmail.com',
              link: 'mailto:dvpublicschool89@gmail.com',
            },
            {
              icon: Clock,
              title: 'Office Hours',
              content: 'Mon - Fri: 8:00 AM - 4:00 PM',
              link: '#',
            },
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              
              {item.link !== '#' ? (
                <a 
                  href={item.link}
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-600">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Quick Contact Actions */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919990616167"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              WhatsApp Chat
            </a>
            
            <a
              href="tel:+919990616167"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}