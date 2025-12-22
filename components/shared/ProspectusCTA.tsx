import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';

export default function ProspectusCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our School Family?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Download our comprehensive prospectus to learn more about our programs, 
            facilities, and admission process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/prospectus.pdf"
              download="D.V. PUBLIC SCHOOL Prospectus.pdf"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Prospectus
            </a>
            
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-200 border border-white/20 transform hover:scale-105"
            >
              Contact for Admission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
