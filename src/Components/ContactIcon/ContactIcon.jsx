import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ContactIcon = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      {/* Call Button */}
      <a
        href="tel:01774051784"
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <FaPhoneAlt /> Call
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/01774051784"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp /> WhatsApp
      </a>
    </div>
  );
};

export default ContactIcon;
