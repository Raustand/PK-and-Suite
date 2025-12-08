import React from "react";
import Header from "../components/header";11
import Footer from "../components/footer";6
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




const galleryData = [
  { image: SingImg, alt: "Main view of the luxurious hotel room" },
  { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCY_u6Prq2NaGaF01BxFx-BYO02vslspG0iPWf17IGM3_NzpbczJaty9eVATd760OL7WijiDjMpuVJb6ms9VMj7swZ9w05xPdOtJCHWdjZ_8qWiEw5lX-bukLUw8llmtnRT0RLVsYUVcKfzOruEBy46_8NH4GWRMEYRWbye44zwwr1I0nZQWsClkxwCy4M2lmwufFpy810KqTewqJIzS1k3TAe1jRwbBZqBsxzRcXYYrIeEdUHhI1nZWQsbxkLmxi2n5dJWQcwwzwE", alt: "Bathroom" },
  { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBxSmI0JMPqSXVoeAhcQ36lvdt_BQoGrdD6kdQU34pmsJCQox_wykuLXHsNhTHg_d5EPyF8y8ZAjuamLvF2LL6Y66CSLHuii734kTAcTySnU6jfboiz56Kg3Q4JG3-abUr2fQYjPMMCRlkE7kVpqgKeW2yLVVvtHuH1e6ZO5WyoL2X80LbAocnSETfcr0UJGBPrbJ2yT4DbDFpfMvJpM6FrUTmN68mxb-fyRRj2OiOgN2X-GTcbbtROodjU4GPMLR7bQ0_d3OIOD4", alt: "Seating area" },
  { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ9I1e3MTEu0wl28QzCdxLnd2Vtx4smTUsOLA2gRfod-utcoW1qg8oMNBogPrWZYKOflHTmJKZusTP51uSW41K7fxa25vaQNr0W-Pw5myfxmXp2pYFAN37NOLm5EsAKgBF1cqkNzYpprz2eNwAKDtbBJ24dfWLB2EpsylfAkkbr9-pkqQ7wQUF2w8ehrF4jzS0wc4H1swqagpvh1VxRZiA7juQi_PJO0bOIQOunxeR3fv8VJcpTlk_JsSX9Ep6ELj44a0w7bRKz2E", alt: "Bed close-up" },
];


const SingleRooms = () => {
  return (
    <>
    <Header/>
<div className="container mx-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
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

          {/* Right: Room Info */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
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

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
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
              <p className="text-3xl font-bold text-gray-900">
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
        </div>
      </div>
    <Footer/>
    </>
   );
};

export default SingleRooms;