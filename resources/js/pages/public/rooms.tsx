import React from "react";
import Header from "../components/header";11
import Footer from "../components/footer";6



import KingBedIcon from '@mui/icons-material/KingBed';
import PeopleIcon from '@mui/icons-material/People';
import RestImg from "../../assets/hypnos.jpg";  
 
import SingImg from "../../assets/single.jpg";
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import WifiSharpIcon from '@mui/icons-material/WifiSharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FamImg from "../../assets/fam.avif"; 
import DeskIcon from '@mui/icons-material/Desk';
import deluxeImg from "../../assets/delux.jpg"; 
import BalconyIcon from '@mui/icons-material/Balcony';  




const galleryData = [
  { image: SingImg, alt: "Main view of the luxurious hotel room" },
  { image: SingImg, alt: "Bathroom" },
  { image: SingImg, alt: "Seating area" },
  { image: SingImg, alt: "Bed close-up" },
];

const galleryDatad = [
  { image: RestImg, alt: "Main view of the luxurious hotel room" },
  { image: SingImg, alt: "Bathroom" },
  { image: SingImg, alt: "Seating area" },
  { image: SingImg, alt: "Pool area" },
  { image: SingImg, alt: "Bed close-up" },
];

const galleryDataf = [
  { image: FamImg, alt: "Main view of the luxurious hotel room" },
  { image: SingImg, alt: "Bathroom" },
  { image: SingImg, alt: "Seating area" },
  { image: SingImg, alt: "Pool area" },
  { image: SingImg, alt: "Bed close-up" },
];


const galleryDatae = [
  { image: deluxeImg, alt: "Main view of the luxurious hotel room" },
  { image: SingImg, alt: "Bathroom" },
  { image: SingImg, alt: "Seating area" },
  { image: SingImg, alt: "Pool area" },
  { image: SingImg, alt: "Bed close-up" },
];
const Rooms = () => {
  return (
    <>
    <Header/>
      <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1> The Rooms</h1>
        <p className="text-gray-600 mt-2">Explore the world-class amenities we offer.</p>
      </header>


      {/* Single Room */}
      
      <div className="container mx-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Right: Room Info */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
              Single Room
            </h1>

            <div className="flex items-center text-gray-500 dark:text-gray-600 mb-6">
              <StarRateSharpIcon/>
              <span className="font-semibold mr-1">4.9</span>
              <span className="mr-4">(212 reviews)</span>
              <LocationOnSharpIcon/>
              <span>Douala, Camroon</span>
            </div>

            <p className="text-gray-700 dark:text-gray-600 mb-6">
              The Single Room is perfect for solo travelers, students, 
              or business guests looking for simplicity and comfort. 
              It comes with a cozy single bed, a work desk, and free Wi-Fi for 
              productivity. The room also includes a flat-screen TV, a compact wardrobe, 
              and a mini fridge. The private bathroom has a modern shower, and daily 
              housekeeping ensures a clean and comfortable stay. This room is budget-friendly 
              while still offering all the essentials.
            </p>

            <h2 className="text-xl font-semibold text-gray-900  mb-4">
              Amenities
            </h2>

            <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-600 mb-6">
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><WifiSharpIcon/></span>
                <span>Free Wi-Fi</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><RoomServiceIcon/></span>
                <span>24/7 room service</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><KitchenIcon/></span>
                <span>Mini fridge & microwave</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><AcUnitSharpIcon/></span>
                <span>Air Conditioning</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><PersonalVideoOutlinedIcon/></span>
                <span>Flat-screen TV</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><LocalCafeOutlinedIcon/></span>
                <span>Coffee Maker</span>
              </div>
              
            </div>

            <div className="flex items-baseline justify-between mb-8">
              <p className="text-3xl font-bold text-gray-900 ">
                $450{" "}
                <span className="text-lg font-normal ">
                  / night
                </span>
              </p>
            </div>

            <button className="bg-indigo-600  text-decoration-none  text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-300 transition w-full text-center">
              <span className="material-icons mr-2"><CalendarTodayIcon/></span>
              Book Now
            </button>
          </div>

          
          {/* Left: Images */}
          <div>
            <div className="mb-4">
              <img
                src={galleryData[0].image}
                alt={galleryData[0].alt}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-20 gap-4">
              {galleryData.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img.image}
                  alt={img.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Familly Room */}

      <div className="container mx-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Right: Room Info */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
              Family Room
            </h1>

            <div className="flex items-center text-gray-500 dark:text-gray-600 mb-6">
              <StarRateSharpIcon/>
              <span className="font-semibold mr-1">4.9</span>
              <span className="mr-4">(212 reviews)</span>
              <LocationOnSharpIcon/>
              <span>Douala, Camroon</span>
            </div>

            <p className="text-gray-700 dark:text-gray-600 mb-6">
              The Family Room is ideal for families or groups traveling together. 
              It provides generous space with two queen-size beds or a king bed 
              with an extra twin/sofa bed to accommodate children. The room includes 
              a flat-screen TV with kids’ channels, a mini fridge, and even a microwave f
              or convenience. Families can also request a baby crib, and some rooms offer 
              interconnected layouts for larger groups. A spacious bathroom with a bathtub 
              makes it comfortable for families, ensuring everyone enjoys their stay.
            </p>

            <h2 className="text-xl font-semibold text-gray-900  mb-4">
              Amenities
            </h2>

            <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-600 mb-6">
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><WifiSharpIcon/></span>
                <span>Free Wi-Fi</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><AcUnitSharpIcon/></span>
                <span>Air Conditioning</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><PersonalVideoOutlinedIcon/></span>
                <span>Flat-screen TV</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><LocalCafeOutlinedIcon/></span>
                <span>Coffee Maker</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><RoomServiceIcon/></span>
                <span>24/7 room service</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><KitchenIcon/></span>
                <span>Mini fridge & microwave</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><DeskIcon/></span>
                <span>Work Desk</span>
              </div>
              
            </div>

            <div className="flex items-baseline justify-between mb-8">
              <p className="text-3xl font-bold text-gray-900 ">
                $649{" "}
                <span className="text-lg font-normal ">
                  / night
                </span>
              </p>
            </div>

            <button className="bg-indigo-600  text-decoration-none  text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-300 transition w-full text-center">
              <span className="material-icons mr-2"><CalendarTodayIcon/></span>
              Book Now
            </button>
          </div>

          {/* Left: Images */}
          <div>
            <div className="mb-4">
              <img
                src={galleryDataf[0].image}
                alt={galleryDataf[0].alt}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 mt-20 md:grid-cols-3 gap-4">
              {galleryDataf.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img.image}
                  alt={img.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>

        </div>
      </div>


      {/* Executive Room */}
      
      <div className="container mx-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Right: Room Info */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
            Executive Room
            </h1>

            <div className="flex items-center text-gray-500 dark:text-gray-600 mb-6">
              <StarRateSharpIcon/>
              <span className="font-semibold mr-1">4.9</span>
              <span className="mr-4">(212 reviews)</span>
              <LocationOnSharpIcon/>
              <span>Douala, Camroon</span>
            </div>

            <p className="text-gray-700 dark:text-gray-600 mb-6">
              The Executive Suite is designed for guests who want luxury and extra comfort. It 
              features a spacious king-size bed, a private balcony with breathtaking city views, 
              and a separate living area for relaxation or meetings. The suite comes with modern 
              amenities like a Smart TV, high-speed Wi-Fi, a mini bar, and a coffee maker. 
              The en-suite bathroom includes a jacuzzi for ultimate relaxation. With a work desk 
              and 24/7 room service, this room is perfect for business executives and travelers seeking a premium stay.
            </p>

            <h2 className="text-xl font-semibold text-gray-900  mb-4">
              Amenities
            </h2>

            <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-600 mb-6">
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><WifiSharpIcon/></span>
                <span>Free Wi-Fi</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><AcUnitSharpIcon/></span>
                <span>Air Conditioning</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><RoomServiceIcon/></span>
                <span>24/7 room service</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><PersonalVideoOutlinedIcon/></span>
                <span>Flat-screen TV</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><LocalCafeOutlinedIcon/></span>
                <span>Coffee Maker</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><KitchenIcon/></span>
                <span>Mini fridge & microwave</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><BalconyIcon/></span>
                <span>Private Balcony</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><DeskIcon/></span>
                <span>Work Desk</span>
              </div>
            </div>

            <div className="flex items-baseline justify-between mb-8">
              <p className="text-3xl font-bold text-gray-900 ">
                $870{" "}
                <span className="text-lg font-normal ">
                  / night
                </span>
              </p>
            </div>

            <button className="bg-indigo-600  text-decoration-none  text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-300 transition w-full text-center">
              <span className="material-icons mr-2"><CalendarTodayIcon/></span>
              Book Now
            </button>
          </div>

          {/* Left: Images */}
          <div>
            <div className="mb-4">
              <img
                src={galleryDatae[0].image}
                alt={galleryDatae[0].alt}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 mt-20 md:grid-cols-3 gap-4">
              {galleryDatae.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img.image}
                  alt={img.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Deluxe Room */}

      <div className="container mx-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Right: Room Info */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
              Deluxe King Room
            </h1>

            <div className="flex items-center text-gray-500 dark:text-gray-600 mb-6">
              <StarRateSharpIcon/>
              <span className="font-semibold mr-1">4.9</span>
              <span className="mr-4">(212 reviews)</span>
              <LocationOnSharpIcon/>
              <span>Douala, Camroon</span>
            </div>

            <p className="text-gray-700 dark:text-gray-600 mb-6">
              Experience unparalleled comfort in our Deluxe King Room. This spacious room features a plush king-sized bed, a modern work desk, and a cozy seating area. The en-suite bathroom is equipped with a rain shower and premium toiletries. Enjoy stunning city views from your private balcony.
            </p>

            <h2 className="text-xl font-semibold text-gray-900  mb-4">
              Amenities
            </h2>

            <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-600 mb-6">
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><WifiSharpIcon/></span>
                <span>Free Wi-Fi</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><AcUnitSharpIcon/></span>
                <span>Air Conditioning</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><PersonalVideoOutlinedIcon/></span>
                <span>Flat-screen TV</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><RoomServiceIcon/></span>
                <span>24/7 room service</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><LocalCafeOutlinedIcon/></span>
                <span>Coffee Maker</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><KitchenIcon/></span>
                <span>Mini fridge & microwave</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><BalconyIcon/></span>
                <span>Private Balcony</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-600 mr-3"><DeskIcon/></span>
                <span>Work Desk</span>
              </div>
            </div>

            <div className="flex items-baseline justify-between mb-8">
              <p className="text-3xl font-bold text-gray-900 ">
                $699{" "}
                <span className="text-lg font-normal ">
                  / night
                </span>
              </p>
            </div>

            <button className="bg-indigo-600  text-decoration-none  text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-300 transition w-full text-center">
              <span className="material-icons mr-2"><CalendarTodayIcon/></span>
              Book Now
            </button>
          </div>
          
          {/* Left: Images */}
          <div>
            <div className="mb-4">
              <img
                src={galleryDatad[0].image}
                alt={galleryDatad[0].alt}
                className="w-full h-auto object-cover  rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryDatad.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img.image}
                  alt={img.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>



      {/* <section className=" bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {roomData.map((room, index) => (
            <div 
              key={index} 
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img alt={room.alt} className="w-full h-48 object-cover" src={room.image} />
              <div className="p-3">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
                    <KingBedIcon/>
                  <div className="flex items-center">
                    {room.bed}
                  </div>
                  <div className="flex items-center">
                    <PeopleIcon/>
                    {room.guests}
                  </div>
                </div>
                <div className="pl-16 pb-1">
                  <Card.Link href="#"> <Button variant="primary" size="sm">Book Now</Button></Card.Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}
  </div>
    <Footer/>
    </>
   );
};

export default Rooms;