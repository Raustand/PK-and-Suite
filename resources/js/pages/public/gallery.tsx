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



const GaleryData = [
  { image: RestImg,  },
  { image: spaImg },
  { image: diningImg },
  { image: meetingsImg,  },
  { image: restaurantImg },
  { image: barImg },
  { image: conferenceImg,  },
  { image: RestImg,  },
  { image: spaImg },
  { image: diningImg },
  { image: meetingsImg,  },
  { image: restaurantImg },
  { image: barImg },
  { image: conferenceImg,  },
];

const Gallery = () => {
  return (
    <>
    <Header/>
<div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1> The Gallery</h1>
        <p className="text-gray-600 mt-2">Explore the world-class amenities we offer.</p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {GaleryData.map((service, index) => (
          <div key={index} className={`group relative overflow-hidden rounded-lg shadow-lg ${service.span}`}>
            <img 
              alt={service.title} 
              className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
              src={service.image} 
            />
            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
              <h2 className="text-4xl font-semibold text-white tracking-wider">{service.title}</h2>
            </div>
          </div>
        ))}
      </main>
</div>
    <Footer/>
    </>
   );
};

export default Gallery;