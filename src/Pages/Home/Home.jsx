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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#edf6f9]">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 shadow-md bg-[#f8edeb]">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <FaClinicMedical className="text-3xl text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">Dr.Tahmina</span>
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-300 transform hover:-translate-y-1">
              <FaCalendarAlt className="mr-2" />
              Book Appointment
            </button>
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center mt-2 transition-all duration-300">
                <FaCalendarAlt className="mr-2" />
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Banner Section with Enhanced Image Animation */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1
              className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Dr.Tahmina Akter
            </h1>
            <div className=" items-center mb-6">
              <div className=" text-blue-800 rounded-full text-sm font-medium animate-pulse">
                <span className="px-3 py-1 bg-blue-100 ">
                  MBBS,CMU,CCD,FCPS (Final part) Gynecologist
                </span>
              </div>
              <div className="text-gray-600 flex items-center gap-2 mt-2">
                <FaHospital className="mr-1 text-blue-500 " size={30} />
                Experienced in Medicine, Surgery. Sheheed Suhrawardy medical
                College, Dhaka.
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-8 transition-all duration-1000 delay-200">
              Dedicated medical professional with a passion for patient care and
              medical excellence. Committed to providing comprehensive
              healthcare with a focus on patient well-being.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300 transform hover:-translate-y-1">
                <FaCalendarAlt className="mr-2" />
                Book Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                View Services
              </button>
            </div>
          </div>

          {/* Enhanced Image Section with Animation */}
          <div className="md:w-1/2 flex justify-end">
            <div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-all duration-1000 transform hover:scale-105">
                <img
                  src={Apu}
                  alt="Dr. Tehmina Akhter"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center animate-bounce-slow">
                <FaStethoscope className="text-2xl text-blue-600" />
              </div>

              <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-4 shadow-lg animate-pulse">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-ping"></div>
                  Available Today
                </div>
              </div>

              <div className="absolute top-1/2 -left-6 bg-white rounded-full p-3 shadow-md rotate-12">
                <FaHeartbeat className="text-2xl text-pink-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Medical Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <FaStethoscope className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                General Consultation
              </h3>
              <p className="text-gray-600">
                Comprehensive health assessments and personalized treatment
                plans for all your medical needs.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <FaHeartbeat className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Preventive Care
              </h3>
              <p className="text-gray-600">
                Proactive health management to prevent illness and maintain
                optimal wellness.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <FaAward className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Specialized Treatment
              </h3>
              <p className="text-gray-600">
                Advanced medical treatments tailored to your specific health
                conditions and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Patient Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="flex text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-600 mb-4">
                "Dr. Tehmina provided exceptional care during my treatment. Her
                expertise and bedside manner are truly remarkable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    <img
                      className="rounded-full"
                      src="https://cse.iutoic-dhaka.edu/uploads/img/1601107245_1253.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Rahman Ahmed</h4>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="flex text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-600 mb-4">
                "I'm grateful for the compassionate care I received. Dr. Tehmina
                took the time to explain everything clearly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">
                    <img
                      className="rounded-full"
                      src="https://hr.bup.edu.bd/upload/picture/39255.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Fatima Begum</h4>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="flex text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-600 mb-4">
                "Professional, knowledgeable, trusted, experienced, and caring.
                Everything you want in a healthcare provider."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-green-600 font-semibold">
                    <img
                      className="rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEyTnoLr2tGwTSG-sLP5lgpWNM6nicfN5rJFGtc7-5Ttx7W3SrUAYEf2kxjrIyI-qTuM&usqp=CAU"
                      alt=""
                    />
                  </span>
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
      <section id="contact" className="bg-gray-50 py-16">
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
                <div className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Address</p>
                    <p className="text-gray-600">
                      Experienced in Medicine, Surgery. Sheheed Suhrawardy
                      medical College, Dhaka.
                    </p>
                  </div>
                </div>
                <div className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <FaPhoneAlt className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Phone</p>
                    <p className="text-gray-600">+8801774051784</p>
                  </div>
                </div>
                <div className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Email</p>
                    <p className="text-gray-600">atahmina310@gmail.Com</p>
                  </div>
                </div>
                <div className="flex items-center transition-all duration-300 hover:translate-x-2">
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
      <ContactIcon></ContactIcon>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Dr. Tehmina Akhter</h3>
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
                Experienced in Medicine, Surgery. Sheheed Suhrawardy medical
                College, Dhaka.
              </p>
              <p className="text-gray-300">Dhaka, Bangladesh</p>
              <p className="text-gray-300">+88 01774051784</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Dr.Tahmina Akter. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
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
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
