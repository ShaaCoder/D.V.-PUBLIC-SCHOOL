import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 pt-20 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-in slide-in-from-bottom-4 duration-1000">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              DV Public School
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            Nurturing young minds for a bright future with excellence in education, 
            modern facilities, and holistic development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-400">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <a
              href="/api/download-prospectus"
              download="DV Public School Prospectus.pdf"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-orange-200 hover:border-orange-300 transform hover:scale-105"
            >
              Download Prospectus
              <Download className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-in fade-in-50 duration-1000 delay-600">
          <img
            src="/images/dvschool2.webp"
            alt="DV Public School campus with students"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}