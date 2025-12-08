import React from "react";
import Header from "../components/header";11
import Footer from "../components/footer";6
import Service from "../components/service";4
import HeroSection from "../components/hero";21
import RoomDeals from "../components/offers";3
import Features from "../components/features";5



const Home = () => {
  return (
    <>
    <div>

      <main>
        <Header />
        <HeroSection />
        <RoomDeals />
        <Service />
        <Features />
      </main>
      <Footer />
    </div>
    </>
   );
};

export default Home;