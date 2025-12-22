export default function MapSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Campus
          </h2>
          <p className="text-lg text-gray-600">
            Located in the heart of the city with easy accessibility
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.2076186847225!2d77.09704347550372!3d28.713340675620756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06adc66b9d97%3A0x9edd7703a3f7bebe!2svijay%20vihar%20near%20d.v.public%20school!5e0!3m2!1sen!2sin!4v1756755470335!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DV Public School Location"
            />
          </div>
          
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
              f-200, Vijay vihar Phase I, Phase 1, Pocket J, Sector 4, Rohini, Delhi, 110085
              </h3>
              <p className="text-gray-600">
                Easily accessible by public transport with parking facilities available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}