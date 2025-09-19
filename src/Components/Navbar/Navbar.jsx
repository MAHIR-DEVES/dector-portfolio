import React, { useState } from 'react';
import {
  FaClinicMedical,
  FaBars,
  FaTimes,
  FaUserMd,
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-[#001d3d] text-white shadow-md sticky top-0 z-50">
      {/* Centered container with max width */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="navbar p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-white"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <FaTimes className="h-5 w-5" />
                ) : (
                  <FaBars className="h-5 w-5" />
                )}
              </div>
              {isOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#9e0059] rounded-box w-52 text-white"
                >
                  <li>
                    <a href="#home" className="text-lg hover:bg-[#7a0046]">
                      <FaUserMd className="mr-2" /> Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-lg hover:bg-[#7a0046]">
                      <FaUserMd className="mr-2" /> About
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-lg hover:bg-[#7a0046]">
                      <FaClinicMedical className="mr-2" /> Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="text-lg hover:bg-[#7a0046]"
                    >
                      <FaUserMd className="mr-2" /> Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-lg hover:bg-[#7a0046]">
                      <FaPhoneAlt className="mr-2" /> Contact
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <a href="#home" className="btn btn-ghost text-xl text-white">
              <FaClinicMedical className="text-white text-3xl mr-2" />
              <span className="hidden md:inline">Dr. </span>MediCare
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
              <li>
                <a
                  href="#home"
                  className="flex items-center hover:bg-[#7a0046]"
                >
                  <FaUserMd className="mr-1" /> Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center hover:bg-[#7a0046]"
                >
                  <FaUserMd className="mr-1" /> About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="flex items-center hover:bg-[#7a0046]"
                >
                  <FaClinicMedical className="mr-1" /> Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="flex items-center hover:bg-[#7a0046]"
                >
                  <FaUserMd className="mr-1" /> Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center hover:bg-[#7a0046]"
                >
                  <FaPhoneAlt className="mr-1" /> Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <a
              href="#appointment"
              className="btn btn-primary hidden md:inline-flex mr-2 bg-white text-[#9e0059] border-0 hover:bg-gray-200"
            >
              <FaCalendarAlt className="mr-2" />
              Book Appointment
            </a>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle text-white"
              >
                <div className="indicator">
                  <FaEnvelope className="h-5 w-5" />
                  <span className="badge badge-xs badge-white indicator-item text-[#9e0059]"></span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-[#9e0059] shadow text-white"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">2 New Messages</span>
                  <div className="card-actions">
                    <button className="btn btn-white btn-block text-[#9e0059]">
                      View messages
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
