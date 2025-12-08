import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import RestImg from "../../assets/hypnos.jpg";
import deluxeImg from "../../assets/delux.jpg";
import FamImg from "../../assets/fam.avif";
import SingImg from "../../assets/single.jpg";

import { Link } from '@inertiajs/react';

function RoomsSection() {
  return (

    <> 

    <div className="w-full bg-gray-50 p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* --- CARD 1 --- */}
        <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
          <img
            src={RestImg}
            className="w-full h-64 object-cover"
          />
          <div className="absolute center bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">Deluxe Room</h3>
            <p className="text-lg mt-2">from $699* / night</p>
          </div>
          <Link
            href="/deluxeroom" prefetch
            className="absolute bottom-4 right-4 border border-white text-white px-6 py-2 text-decoration-none rounded-lg hover:bg-gray-300 hover:text-black transition"
          >
            View
          </Link>
        </div>

        {/* --- CARD 2 --- */}
        <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
          <img
            src={SingImg}
            className="w-full h-64 object-cover"
          />
          <div className="absolute center bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">Single Room</h3>
            <p className="text-lg mt-2">from $450* / night</p>
          </div>
          <Link
            href="/singleroom" prefetch
            className="absolute bottom-4 right-4 border border-white text-white px-6 py-2 text-decoration-none rounded-lg hover:bg-gray-300 hover:text-black transition"
          >
            View
          </Link>
        </div>

        {/* --- CARD 3 --- */}
        <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
          <img
            src={FamImg}
            className="w-full h-64 object-cover"
          />
          <div className="absolute center bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">Family Room</h3>
            <p className="text-lg mt-2">from $649* / night</p>
          </div>
          <Link
            href="/familyroom" prefetch
            className="absolute bottom-4 right-4 border border-white text-white px-6 py-2 text-decoration-none rounded-lg hover:bg-gray-300 hover:text-black transition"
          >
            View
          </Link>
        </div>

        {/* --- BIG CARD LEFT (Dreampass Rewards) --- */}
        <div className="col-span-1 md:col-span-2 relative rounded-xl overflow-hidden shadow-lg p-6 bg-white">
          <img
            src={deluxeImg}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40"></div>

          <div className="relative flex flex-col justify-end h-64 p-6 text-white">
            <h3 className="text-2xl font-semibold mt-3">Executive Suite</h3>
            <p className="text-lg mt-2">from $870* / night</p>
          <Link
            href="/executiveroom" prefetch
            className="absolute bottom-4 right-4 border border-white text-white px-6 py-2 text-decoration-none rounded-lg hover:bg-gray-300 hover:text-black transition"
          >
            View
          </Link>
          </div>
        </div>

        {/* --- PACKAGE CARD --- */}
        <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
          <img
            src={SingImg}
            className="w-full h-64 object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50"></div>

          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">
              Hotel Packages Made Easy
            </h3>
            <p className="text-lg mt-1"> Stay & Enjoy</p>
          </div>
        </div>
      </div>
    </div>

    
    {/* <div  className="flex gap-4 py-4 justify-content-around grid-cols-1">
      
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={SingImg}/>
        <Card.Body>
          <Card.Title>Single Room</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="flex flex-col sm:flex-row gap-8">
          <Card.Title>$450/ night</Card.Title>
          <Button className="flex bg-yellow" href="/singleroom" variant="primary">View Details</Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={RestImg}/>
        <Card.Body>
          <Card.Title>Deluxe Room</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="flex flex-col sm:flex-row gap-8">
          <Card.Title>$699/ night</Card.Title>
          <Button className="flex bg-yellow" href="/deluxeroom" variant="primary">View Details</Button>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={deluxeImg}/>
        <Card.Body>
          <Card.Title>Executive Suite</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="flex flex-col sm:flex-row gap-8">
          <Card.Title>870$ / night</Card.Title>
          <Button className="flex bg-yellow" href="/executiveroom" variant="primary">View Details</Button>
          </div>
        </Card.Body>
      </Card>
      
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={FamImg}/>
        <Card.Body>
          <Card.Title>Family Room</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="flex flex-col sm:flex-row gap-8">
          <Card.Title>$649/ night</Card.Title>
          <Button className="flex bg-yellow" href="/familyroom" variant="primary">View Details</Button>
          </div>
        </Card.Body>
      </Card>
    </div> */}
    </>
    
    
  );
}

export default RoomsSection;