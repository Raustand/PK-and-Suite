import React from "react";
import { Link } from 'react-router-dom';
import bgImage from "../../assets/hero-bg.jpg";
import Button from 'react-bootstrap/Button';

const HeroSection: React.FC = () => {
  return (
    <>
      <section 
        className="relative bg-cover bg-center min-h-screen" 
        style={{ 
          borderBottom: '10px',
          backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuDJUHXWntbDFzpnwSw-a3vdLyHl9O-tCvOzJEEXgqAwnidYJTZrXEYUTQ76Ar7Id-uEml89ZqED-D2AMA2j3ajtaSXUhgBU3vnSIcZbPHg1r0KoA-hLmLxKGiPQ-ToPwJn64Ybl8UTPpO5ZHcUOj_6uucncVVDi4-I_xqa2BVBwBsRLEVYFxk1YvrSd9R6qoD8ZYp_oKIcE9oPeGLXNSzNqp8ecZMevLAxKKo78NX40DWz9_MBRNZD4jcJALs-sLyL4nLkYXwPraX4)`, 
          // backgroundImage: `url(${bgImage})`, 
          height: '10vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative pb-5 pt-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white z-10">
          {/* Main Heading */}
          <span className="text-amber-400 text-5xl font-bold text-lg font-light ml-2 group-hover:text-indigo-100 transition-colors">
            P-K Hotel &amp; Suite, where comfort meets elegance.
          </span>
          <h1 className="warm_welcome text-5xl md:text-7xl font-bold mb-4">
            Welcome to P-K Hotel &amp; Suite, where comfort meets elegance.
          </h1>

          {/* Booking form box */}
          <div className="bg-gray-100 bg-opacity-90 p-6 rounded-lg shadow-xl w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="flex flex-col items-start text-gray-600">
                <label className="text-gray-800 font-medium mb-1" htmlFor="check-in">Check-in</label>
                <input className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" id="check-in" type="date" />
              </div>
              <div className="flex flex-col items-start text-gray-600">
                <label className="text-gray-800 font-medium mb-1" htmlFor="check-out">Check-out</label>
                <input className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" id="check-out" type="date" />
              </div>
              <div className="flex flex-col items-start text-gray-600">
                <label className="text-gray-800 font-medium mb-1" htmlFor="rooms">Rooms</label>
                <input className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" id="rooms" min={1} type="number" defaultValue={1} />
              </div>
              <Button className="bg-indigo-600  text-decoration-none  text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-300 transition w-full text-center" href="/" variant="primary">Check Availability</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
