'use client';

import { useState, useRef, useEffect } from 'react';
import { Phone, MessageCircle, X, MapPin } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current && 
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popover */}
      {isOpen && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-label="Contact options"
          className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 animate-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Contact Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
              aria-label="Close contact options"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="space-y-2">
            <a
              href="https://wa.me/917835996416"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors group"
            >
              <div className="bg-green-500 p-2 rounded-full group-hover:bg-green-600 transition-colors">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900">WhatsApp Chat</div>
                <div className="text-sm text-gray-600">Quick response</div>
              </div>
            </a>
            
            <a
              href="tel:+918810524651"
              className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group"
            >
              <div className="bg-blue-500 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Call Now</div>
                <div className="text-sm text-gray-600">+91 918810524651</div>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=DV%20Public%20School%2C%20F-205%2C%20Phase%20I%2C%20Vijay%20Vihar%2C%20Rohini%2C%20Delhi%20110085"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors group"
            >
              <div className="bg-purple-500 p-2 rounded-full group-hover:bg-purple-600 transition-colors">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900">View Location</div>
                <div className="text-sm text-gray-600">Get directions</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
        aria-label="Open contact options"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
      </button>
    </div>
  );
}