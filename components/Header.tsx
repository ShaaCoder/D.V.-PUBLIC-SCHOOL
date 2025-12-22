'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Notices', href: '/notices' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          const activeLink = document.querySelector(`a[href="/#${id}"]`);
          document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
          activeLink?.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-orange-100 transition-colors">
            <img
              src="/images/dvlogo.png"
              alt="D.V. PUBLIC SCHOOL Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold hidden sm:inline">D.V. PUBLIC SCHOOL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/20 ${
                    pathname === item.href 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/api/download-prospectus"
                download="D.V. PUBLIC SCHOOL Prospectus.pdf"
                className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Download Prospectus
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-orange-100 p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-sm rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    pathname === item.href 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/api/download-prospectus"
                download="D.V. PUBLIC SCHOOL Prospectus.pdf"
                className="block bg-white text-orange-500 px-3 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Prospectus
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}