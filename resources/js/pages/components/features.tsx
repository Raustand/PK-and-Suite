import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HotelIcon from '@mui/icons-material/Hotel';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TvIcon from '@mui/icons-material/Tv';
import PowerIcon from '@mui/icons-material/Power';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import KingBedIcon from '@mui/icons-material/KingBed';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SpaIcon from '@mui/icons-material/Spa';
import PoolIcon from '@mui/icons-material/Pool';
import WineBarIcon from '@mui/icons-material/WineBar';

import Carousel from 'react-bootstrap/Carousel';

const serviceData = [
  { icon:<KingBedIcon sx={{ fontSize: 50 }}/> , title: 'Stay' },
  { icon: <RestaurantMenuIcon sx={{ fontSize: 50 }}/>, title: 'Fine Dining' },
  { icon: <SpaIcon sx={{ fontSize: 50 }}/>, title: 'Rest' },
  { icon: <PoolIcon sx={{ fontSize: 50 }}/>, title: 'Recreational' },
  { icon: <WineBarIcon sx={{ fontSize: 50 }}/>, title: 'Bar' },
];

// ServiceCard.tsx (reusable component)
interface Service {
  icon: React.ReactNode;
  title: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-red-500 group-hover:border-transparent group-hover:shadow-purple-500/25">
      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-lg mx-auto transition-all duration-300">
        <span className="material-icons text-2xl text-white group-hover:text-indigo-600 font-bold">
          {service.icon}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-white transition-colors">
        {service.title}
      </h3>
    </div>
  </div>
);


const featureData = [
  {
    icon: <VerifiedUserIcon/>,
    title: '24/7 Security',
    description: 'Your safety is our top priority. We provide round-the-clock security.'
  },
  {
    icon: <HotelIcon/>,
    title: 'Hypoallergenic Mattresses',
    description: 'Enjoy a restful sleep on our clean and comfortable mattresses.'
  },
  {
    icon: <TvIcon/>,
    title: 'Smart TV and Streaming',
    description: 'Entertainment at your fingertips with smart TVs and streaming services.'
  },
  {
    icon: <PowerIcon/>,
    title: 'Fully Generated 24h',
    description: 'Uninterrupted power supply to ensure your comfort at all times.'
  },
  {
    icon: <LocalParkingIcon/>,
    title: 'Free Parking',
    description: 'Ample and secure parking space available for all our guests, free of charge.'
  },
  {
    icon: <RoomServiceIcon/>,
    title: 'High Quality Service',
    description: 'Our staff is dedicated to providing you with the best possible experience.'
  },
];

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => (
  <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:bg-white hover:border-indigo-100">
    <div className="flex items-start space-x-4">
      <div className="text-4xl text-red-600 group-hover:scale-110 transition-transform duration-300 mt-1">
        {feature.icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-indigo-900 transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-700 leading-relaxed">{feature.description}</p>
      </div>
    </div>
  </div>
);


const BgColorExample = () => {
  return (
     <>
      
    <div className="text-center mb-12 mt-20">
          <h2 className="text-3xl font-bold text-gray-800">Reasons Our Guests Chose Our Hotel</h2>
   </div>   
<section className="rounded-3xl py-20 bg-gradient-to-br from-red-400 via-blue-400 to-red-900 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featureData.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  </div>
</section>

<section className="rounded-3xl my-5 py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

      <div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
          10<span className="text-blue-600">+</span> Years
        </h2>
        <p className="mt-3 text-gray-500 font-medium">
          of Experience
        </p>
      </div>
      
      <div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
          5<span className="text-blue-600">+</span> Million
        </h2>
        <p className="mt-3 text-gray-500 font-medium">
          Clients served
        </p>
      </div>

      <div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
          <span className="text-blue-600">97%</span>
        </h2>
        <p className="mt-3 text-gray-500 font-medium">
          Recommend PK-Hotel & Suite
        </p>
      </div>

      <div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
          20<span className="text-blue-600">+</span>
        </h2>
        <p className="mt-3 text-gray-500 font-medium">
          Staffs
        </p>
      </div>

    </div>
  </div>
</section>

{/* // Main section with cards */}
<section className="rounded-3xl my-10 ">
    <h2 className="text-4xl lg:text-5xl font-bold text-center pb-10 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent drop-shadow-sm">
      Services We Offer
    </h2>
  <div className="">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
      {serviceData.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  </div>
</section>


<section className="py-10  bg-gradient-to-br from-red-400 via-blue-400 to-red-900 overflow-hidden ">
  <div className="container mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-10 text-white">
      <h2 className="text-4xl font-bold mb-4">Guest Reviews</h2>
      <p className="text-blue-100 text-lg">
        What our guests say about their stay
      </p>
    </div>

    <Carousel indicators={false} controls={true} fade>

      {/* Slide 1 */}
      <Carousel.Item>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            ["John D.", "London, UK", "An unforgettable luxury experience."],
            ["Kenji T.", "Cameroon", "Peaceful, elegant, and world-class service."],
            ["Maria S.", "Buea", "Every detail was perfect. Highly recommended."]
          ].map(([name, location, text], i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h4 className="font-semibold text-gray-900">{name}</h4>
              <span className="text-sm text-gray-500">{location}</span>
              <p className="mt-4 text-gray-600 italic leading-relaxed">
                “{text}”
              </p>
            </div>
          ))}
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            ["Aisha K.", "Dubai", "Exceptional service and stunning interiors."],
            ["Michael B.", "New York", "Comfort, elegance, and flawless hospitality."],
            ["Sandra L.", "Paris", "Truly a five-star experience from start to finish."]
          ].map(([name, location, text], i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h4 className="font-semibold text-gray-900">{name}</h4>
              <span className="text-sm text-gray-500">{location}</span>
              <p className="mt-4 text-gray-600 italic leading-relaxed">
                “{text}”
              </p>
            </div>
          ))}
        </div>
      </Carousel.Item>

    </Carousel>
  </div>

  <div className="container mx-auto px-6 mt-8">
    <p className="text-center mb-6 flex items-center justify-center gap-2">
      <span className="text-2xl">⬅️</span>
        <span className="text-sm text-gray-800 uppercase tracking-wide">
          Swipe or click to see more reviews
        </span>
      <span className="text-2xl">➡️</span>
    </p>
  </div>
</section>

<div className="text-center mt-2 py-20 mt-12">
  <Nav.Link href="/terms" className="text-red-600 text-decoration-none font-semibold" > Booking Terms & Conditions </Nav.Link>
</div>

</>
  );
}

export default BgColorExample;
