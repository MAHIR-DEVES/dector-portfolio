import React, { useState, useEffect } from 'react';
import {
  FaClinicMedical,
  FaBars,
  FaTimes,
  FaUserMd,
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
  FaHospital,
  FaStethoscope,
  FaAward,
  FaHeartbeat,
  FaStar,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

import Apu from '../../assets/apu.jpg';
import ContactIcon from '../../Components/ContactIcon/ContactIcon';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 shadow-md bg-white">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <FaClinicMedical className="text-3xl text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">Dr. Tahmina</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Appointment Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/8801774051784"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              <FaCalendarAlt className="mr-2" />
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-inner animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
              >
                Contact
              </a>
              <a
                href="https://wa.me/8801774051784"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center mt-2 transition-all duration-300"
              >
                <FaCalendarAlt className="mr-2" />
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Banner Section with Enhanced Image Animation */}
      <section id="home" className="py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text Content */}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
                Dr. Tahmina Akter
              </h1>

              <div className="mb-6">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center animate-pulse">
                  <FaGraduationCap className="mr-2" />
                  MBBS, CMU, CCD, FCPS (Final part) Gynecologist
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6 p-4 bg-blue-50 rounded-lg animate-slide-in-left">
                <FaHospital
                  className="text-blue-500 mt-1 flex-shrink-0"
                  size={24}
                />
                <p className="text-gray-700">
                  Experienced in Medicine, Surgery. Sheheed Suhrawardy Medical
                  College, Dhaka.
                </p>
              </div>

              <p className="text-lg text-gray-600 mb-8 animate-fade-in delay-300">
                Dedicated medical professional with a passion for patient care
                and medical excellence. Committed to providing comprehensive
                healthcare with a focus on patient well-being.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in delay-500">
                <a
                  href="https://wa.me/8801774051784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                  <FaCalendarAlt className="mr-2" />
                  Book Consultation
                </a>

                <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                  View Services
                </button>
              </div>
            </div>

            {/* Enhanced Image Section with Animation */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-all duration-700 transform hover:scale-105">
                  <img
                    src={Apu}
                    alt="Dr. Tahmina Akter"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-full"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center animate-float">
                  <FaStethoscope className="text-2xl text-blue-600" />
                </div>

                <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-4 shadow-lg">
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-xs font-medium flex items-center animate-pulse">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
                    Available Today
                  </div>
                </div>

                <div className="absolute top-1/2 -left-6 bg-white rounded-full p-3 shadow-md rotate-12 animate-float-slow">
                  <FaHeartbeat className="text-2xl text-pink-500" />
                </div>

                {/* Additional floating element */}
                <div className="absolute bottom-8 -right-6 bg-white rounded-full p-3 shadow-md -rotate-12 animate-float-delayed">
                  <FaAward className="text-2xl text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Medical Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaStethoscope className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                General Consultation
              </h3>
              <p className="text-gray-600 text-center">
                Comprehensive health assessments and personalized treatment
                plans for all your medical needs.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaHeartbeat className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                Preventive Care
              </h3>
              <p className="text-gray-600 text-center">
                Proactive health management to prevent illness and maintain
                optimal wellness.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaAward className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                Specialized Treatment
              </h3>
              <p className="text-gray-600 text-center">
                Advanced medical treatments tailored to your specific health
                conditions and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Patient Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="flex text-yellow-400 mb-4 justify-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-600 mb-4 text-center italic">
                "Dr. Tahmina provided exceptional care during my treatment. Her
                expertise and bedside manner are truly remarkable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mr-3 flex items-center justify-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cse.iutoic-dhaka.edu/uploads/img/1601107245_1253.jpg"
                    alt="Rahman Ahmed"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Rahman Ahmed</h4>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="flex text-yellow-400 mb-4 justify-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-600 mb-4 text-center italic">
                "I'm grateful for the compassionate care I received. Dr. Tahmina
                took the time to explain everything clearly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full mr-3 flex items-center justify-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://hr.bup.edu.bd/upload/picture/39255.jpg"
                    alt="Fatima Begum"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Fatima Begum</h4>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="flex text-yellow-400 mb-4 justify-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-600 mb-4 text-center italic">
                "Professional, knowledgeable, trusted, experienced, and caring.
                Everything you want in a healthcare provider."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full mr-3 flex items-center justify-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEyTnoLr2tGwTSG-sLP5lgpWNM6nicfN5rJFGtc7-5Ttx7W3SrUAYEf2kxjrIyI-qTuM&usqp=CAU"
                    alt="Jamal Hussain"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Jamal Hussain</h4>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center transition-all duration-300 hover:translate-x-2 p-3 rounded-lg hover:bg-blue-50">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Address</p>
                    <p className="text-gray-600">
                      Sheheed Suhrawardy Medical College, Dhaka.
                    </p>
                  </div>
                </div>
                <div className="flex items-center transition-all duration-300 hover:translate-x-2 p-3 rounded-lg hover:bg-blue-50">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <FaPhoneAlt className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Phone</p>
                    <p className="text-gray-600">+8801774051784</p>
                  </div>
                </div>
                <div className="flex items-center transition-all duration-300 hover:translate-x-2 p-3 rounded-lg hover:bg-blue-50">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Email</p>
                    <p className="text-gray-600">atahmina310@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center transition-all duration-300 hover:translate-x-2 p-3 rounded-lg hover:bg-blue-50">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <FaClock className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Working Hours</p>
                    <p className="text-gray-600">
                      Mon - Sat: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ContactIcon />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Dr. Tahmina Akter</h3>
              <p className="text-gray-300">
                Providing quality healthcare services with compassion and
                expertise.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-300">
                Sheheed Suhrawardy Medical College
              </p>
              <p className="text-gray-300">Dhaka, Bangladesh</p>
              <p className="text-gray-300">+8801774051784</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Dr. Tahmina Akter. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-8px) rotate(12deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0) rotate(-12deg);
          }
          50% {
            transform: translateY(-12px) rotate(-12deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
};

export default Home;
