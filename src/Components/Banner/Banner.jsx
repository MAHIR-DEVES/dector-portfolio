import React from 'react';
import {
  FaGraduationCap,
  FaHospital,
  FaStethoscope,
  FaAward,
} from 'react-icons/fa';
import Image from '../../assets/apu.jpg';

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10 px-6">
        {/* Image Section */}
        <div className="flex-1 flex justify-end">
          <img
            src={Image}
            alt="Dr. Tehmina Akhter's Certificate"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[28rem] lg:h-[28rem] 
              rounded-full object-cover 
              shadow-lg border-4 border-white 
              transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 lg:pr-12 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Dr. Tehmina Akhter
          </h1>

          <div className="py-6">
            {/* Credentials */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <div className="badge badge-primary badge-lg p-4 gap-2">
                <FaGraduationCap className="inline-block" /> MBBS , FCPS
              </div>
              <div className="badge badge-secondary badge-lg p-4">Doctor</div>
            </div>

            <div className="mb-6 flex items-start justify-center lg:justify-start">
              <FaHospital className="text-2xl text-blue-500 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Ziaur Rahman Medical College
                </h2>
                <p className="text-lg text-gray-600">Bogra, Bangladesh</p>
              </div>
            </div>

            <p className="text-lg mb-6 text-gray-700">
              Dedicated medical student with a passion for patient care and
              medical excellence. Currently pursuing MBBS degree with a focus on
              comprehensive medical education.
            </p>

            {/* Key Attributes */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start">
                <FaStethoscope className="h-5 w-5 mr-3 text-blue-500" />
                <span>Comprehensive Medical Education</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <FaAward className="h-5 w-5 mr-3 text-blue-500" />
                <span>Dedicated to Patient Care</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Commitment to Medical Excellence</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="btn btn-primary gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Contact for Consultation
            </button>
            <button className="btn btn-outline btn-secondary">
              View Academic Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
