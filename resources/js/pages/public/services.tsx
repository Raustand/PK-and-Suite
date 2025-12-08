import React from "react";
import Header from "../components/header";11
import Footer from "../components/footer";6
import spaImg from "../../assets/spa.webp";
import diningImg from "../../assets/dine.webp";
import restaurantImg from "../../assets/restaurant.jpg";
import barImg from "../../assets/bar.jpg";
import meetingsImg from "../../assets/meet.jpg";
import conferenceImg from "../../assets/conference.jpg";
import RestImg from "../../assets/hypnos.jpg";


const servicesData = [
  { title: 'Rest On Hypnos Mattress', image: RestImg, span: 'md:col-span-2' },
  { title: 'On-Site Gym', image: spaImg },
  { title: 'Fine Dining', image: diningImg },
  { title: 'Meeting Room', image: meetingsImg, span: 'md:col-span-2' },
  { title: 'Restaurant', image: restaurantImg },
  { title: 'Bar', image: barImg },
  { title: 'Conference Room', image: conferenceImg, span: 'md:col-span-2' },
];


const Services = () => {
  return (
    <>
    <Header/>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Our Services</h1>
          <p className="text-gray-600 mt-2">Explore the world-class amenities we offer.</p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-lg ${service.span}`}
            >
              <img
                alt={service.title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                src={service.image}
              />

              {/* 🔥 Darker overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300"></div>

              {/* 🔥 Centered & high-contrast text */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-wide drop-shadow-lg">
                  {service.title}
                </h2>
              </div>
            </div>
          ))}
        </main>
      </div>

    <Footer/></>
   );
};

export default Services;