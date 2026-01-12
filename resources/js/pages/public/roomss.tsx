import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import WifiSharpIcon from '@mui/icons-material/WifiSharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import DeskIcon from '@mui/icons-material/Desk';
import BalconyIcon from '@mui/icons-material/Balcony';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { router } from '@inertiajs/react'
import RestImg from "../../assets/hypnos.jpg";
import SingImg from "../../assets/single.jpg";
import FamImg from "../../assets/fam.avif";
import deluxeImg from "../../assets/delux.jpg";

// Amenity icon mapping
const amenityIcons = {
  wifi: WifiSharpIcon,
  ac: AcUnitSharpIcon,
  tv: PersonalVideoOutlinedIcon,
  coffee: LocalCafeOutlinedIcon,
  roomService: RoomServiceIcon,
  kitchen: KitchenIcon,
  desk: DeskIcon,
  balcony: BalconyIcon,
};

// Room data configuration
const roomsData = [
  {
    id: "single",
    title: "Single Room",
    price: 450,
    image: SingImg,
    available: 5,
    totalRooms: 10,
    description: "The Single Room is perfect for solo travelers, students, or business guests looking for simplicity and comfort. It comes with a cozy single bed, a work desk, and free Wi-Fi for productivity. The room also includes a flat-screen TV, a compact wardrobe, and a mini fridge. The private bathroom has a modern shower, and daily housekeeping ensures a clean and comfortable stay. This room is budget-friendly while still offering all the essentials.",
    amenities: [
      { icon: "wifi", label: "Free Wi-Fi" },
      { icon: "roomService", label: "24/7 room service" },
      { icon: "kitchen", label: "Mini fridge & microwave" },
      { icon: "ac", label: "Air Conditioning" },
      { icon: "tv", label: "Flat-screen TV" },
      { icon: "coffee", label: "Coffee Maker" },
    ],
  },
  {
    id: "family",
    title: "Family Room",
    price: 649,
    image: FamImg,
    available: 2,
    totalRooms: 8,
    description: "The Family Room is ideal for families or groups traveling together. It provides generous space with two queen-size beds or a king bed with an extra twin/sofa bed to accommodate children. The room includes a flat-screen TV with kids' channels, a mini fridge, and even a microwave for convenience. Families can also request a baby crib, and some rooms offer interconnected layouts for larger groups. A spacious bathroom with a bathtub makes it comfortable for families, ensuring everyone enjoys their stay.",
    amenities: [
      { icon: "wifi", label: "Free Wi-Fi" },
      { icon: "ac", label: "Air Conditioning" },
      { icon: "tv", label: "Flat-screen TV" },
      { icon: "coffee", label: "Coffee Maker" },
      { icon: "roomService", label: "24/7 room service" },
      { icon: "kitchen", label: "Mini fridge & microwave" },
      { icon: "desk", label: "Work Desk" },
    ],
  },
  {
    id: "executive",
    title: "Executive Room",
    price: 870,
    image: deluxeImg,
    available: 3,
    totalRooms: 6,
    description: "The Executive Suite is designed for guests who want luxury and extra comfort. It features a spacious king-size bed, a private balcony with breathtaking city views, and a separate living area for relaxation or meetings. The suite comes with modern amenities like a Smart TV, high-speed Wi-Fi, a mini bar, and a coffee maker. The en-suite bathroom includes a jacuzzi for ultimate relaxation. With a work desk and 24/7 room service, this room is perfect for business executives and travelers seeking a premium stay.",
    amenities: [
      { icon: "wifi", label: "Free Wi-Fi" },
      { icon: "ac", label: "Air Conditioning" },
      { icon: "roomService", label: "24/7 room service" },
      { icon: "tv", label: "Flat-screen TV" },
      { icon: "coffee", label: "Coffee Maker" },
      { icon: "kitchen", label: "Mini fridge & microwave" },
      { icon: "balcony", label: "Private Balcony" },
      { icon: "desk", label: "Work Desk" },
    ],
  },
  {
    id: "deluxe",
    title: "Deluxe King Room",
    price: 699,
    image: RestImg,
    available: 2,
    totalRooms: 8,
    description: "Experience unparalleled comfort in our Deluxe King Room. This spacious room features a plush king-sized bed, a modern work desk, and a cozy seating area. The en-suite bathroom is equipped with a rain shower and premium toiletries. Enjoy stunning city views from your private balcony.",
    amenities: [
      { icon: "wifi", label: "Free Wi-Fi" },
      { icon: "ac", label: "Air Conditioning" },
      { icon: "tv", label: "Flat-screen TV" },
      { icon: "roomService", label: "24/7 room service" },
      { icon: "coffee", label: "Coffee Maker" },
      { icon: "kitchen", label: "Mini fridge & microwave" },
      { icon: "balcony", label: "Private Balcony" },
      { icon: "desk", label: "Work Desk" },
    ],
  },
];

interface Room {
  id: string;
  title: string;
  price: number;
  image: string;
  available: number;
  totalRooms: number;
  description: string;
  amenities: Array<{ icon: string; label: string }>;
}

interface RoomCardProps {
  room: Room;
  index: number;
}

// Reusable Room Card Component
const RoomCard: React.FC<RoomCardProps> = ({ room, index }) => {
  const isEven = index % 2 === 0;
  const isAvailable = room.available > 0;
  const availabilityPercentage = (room.available / room.totalRooms) * 100;
  
  // Determine availability status color and message
  const getAvailabilityStatus = () => {
    if (room.available === 0) {
      return {
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        icon: ErrorIcon,
        message: 'Fully Booked'
      };
    } else if (availabilityPercentage <= 30) {
      return {
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        icon: ErrorIcon,
        message: `Only ${room.available} room${room.available > 1 ? 's' : ''} left!`
      };
    } else {
      return {
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        icon: CheckCircleIcon,
        message: `${room.available} rooms available`
      };
    }
  };

  const status = getAvailabilityStatus();
  const StatusIcon = status.icon;
  
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Room Info - switches sides based on index */}
        <div className={`bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg ${!isEven ? 'lg:order-2' : ''}`}>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {room.title}
          </h1>

          <div className="flex items-center text-gray-500 dark:text-gray-600 mb-4">
            <LocationOnSharpIcon />
            <span>Douala, Cameroon</span>
          </div>

          {/* Availability Badge */}
          <div className={`flex items-center gap-2 mb-6 p-3 rounded-lg border ${status.bgColor} ${status.borderColor}`}>
            <StatusIcon className={status.color} />
            <span className={`font-semibold ${status.color}`}>
              {status.message}
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-600 mb-6">
            {room.description}
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Amenities
          </h2>

          <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-600 mb-6">
            {room.amenities.map((amenity, idx) => {
              const IconComponent = amenityIcons[amenity.icon as keyof typeof amenityIcons];
              return IconComponent ? (
                <div key={idx} className="flex items-center">
                  <IconComponent className="text-indigo-600 mr-3" />
                  <span>{amenity.label}</span>
                </div>
              ) : null;
            })}
          </div>

          <div className="flex items-baseline justify-between mb-8">
            <p className="text-3xl font-bold text-gray-900">
              ${room.price}{" "}
              <span className="text-lg font-normal">/ night</span>
            </p>
          </div>

          <button 
  onClick={() => {
    if (isAvailable) {
      router.visit('/book', {
        method: 'get',
        data: {
          roomId: room.id,
          roomType: room.title,
          price: room.price,
        },
      })
    }
  }}
  className={`font-semibold py-3 px-6 rounded-md transition w-full text-center flex items-center justify-center gap-2 ${
    isAvailable 
      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }`}
  disabled={!isAvailable}
>
  <CalendarTodayIcon />
  {isAvailable ? 'Book Now' : 'Currently Unavailable'}
</button>

</div>
        {/* images - switches sides based on index */}
        <div className={!isEven ? 'lg:order-1' : ''}>
          <div className="mb-4 relative">
            <img
              src={room.image}
              alt={`${room.title} main view`}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            {!isAvailable && (
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Fully Booked</span>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 mt-20 gap-4">
            {[...Array(3)].map((_, idx) => (
              <img
                key={idx}
                src={SingImg}
                alt={`${room.title} view ${idx + 2}`}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Rooms Component
const Rooms = () => {
  const [filterAvailability, setFilterAvailability] = useState('all');

  const filteredRooms = roomsData.filter(room => {
    if (filterAvailability === 'available') return room.available > 0;
    if (filterAvailability === 'unavailable') return room.available === 0;
    return true; // 'all'
  });

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1>The Rooms</h1>
          <p className="text-gray-600 mt-2">
            Explore the world-class amenities we offer.
          </p>
          
          {/* Availability Filter */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <button
              onClick={() => setFilterAvailability('all')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filterAvailability === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Rooms ({roomsData.length})
            </button>
            <button
              onClick={() => setFilterAvailability('available')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filterAvailability === 'available'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Available ({roomsData.filter(r => r.available > 0).length})
            </button>
            <button
              onClick={() => setFilterAvailability('unavailable')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filterAvailability === 'unavailable'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Fully Booked ({roomsData.filter(r => r.available === 0).length})
            </button>
          </div>
        </header>

        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No rooms match your filter criteria.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Rooms;
