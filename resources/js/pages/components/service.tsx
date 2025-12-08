import React from "react";





const ServiceSection = () => {
  return (
    <>




    <section className="bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-red-600 ">
            Our Amenities
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Discover the exceptional facilities that make your stay at The Grand
            Retreat unforgettable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Amenity 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJUHXWntbDFzpnwSw-a3vdLyHl9O-tCvOzJEEXgqAwnidYJTZrXEYUTQ76Ar7Id-uEml89ZqED-D2AMA2j3ajtaSXUhgBU3vnSIcZbPHg1r0KoA-hLmLxKGiPQ-ToPwJn64Ybl8UTPpO5ZHcUOj_6uucncVVDi4-I_xqa2BVBwBsRLEVYFxk1YvrSd9R6qoD8ZYp_oKIcE9oPeGLXNSzNqp8ecZMevLAxKKo78NX40DWz9_MBRNZD4jcJALs-sLyL4nLkYXwPraX4"
              alt="Hotel Pool"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-semibold text-white">Swimming Pool</h3>
              <p className="mt-2 text-sm text-gray-300">
                Relax and unwind by our stunning infinity pool with panoramic
                city views.
              </p>
            </div>
          </div>

          {/* Amenity 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn8KaT3YpQrUjNIuUkYwVh67M8llE69JplPXgdviCzXwhEGQfBO-T5QpGBGXGCkaQGcRyOkj6SRnb1Bsai7d_tt1AB85ETrLqTY3embFIK9FTS1tFcLUyOtVorhFrorI1Z96mptgVAHlnA6XRMWSHP_y2MRSF5qMc_Ml4pKLq2vZQTJoUGART1ruHUgW95pTwjvVsojZIU5Lv9tT-bropkECyD2b2-Q7UMybGaurqGyFCDeyA-R9QAyRNSQpDH15YOP6nOIUB5eyE"
              alt="Hotel Gym"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-semibold text-white">Fitness Center</h3>
              <p className="mt-2 text-sm text-gray-300">
                Stay active in our state-of-the-art gym, equipped with the latest
                fitness technology.
              </p>
            </div>
          </div>

          {/* Amenity 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-doJP7qPqZTo5OvIswhxdoYRrxiB_WNP8EZwkRM9HWfLFNV_tvAaKWdRXX8zdUjeh_Plm_NE4vgAMOOLOsdSE4X37ONyUul8Ti5INnlhT2l6DtWYQPk6wabg3yvMHWLYnfXr-qra86IgMA7---VdpDgn-LXxV7mJ4cRyMlu8oOUtyl4QxLZEusye-mjhbPgYCn-ICR46qeeRlMPG_4eh77fvyZJF5x0FBia0s0CSRe2Ays5hMNxGvpbznDuNF2GE8_BjdmMQoD2I"
              alt="Hotel Restaurant"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-semibold text-white">
                Gourmet Restaurant
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Indulge in a culinary journey at our fine dining restaurant,
                offering exquisite dishes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    </>
   );
};

export default ServiceSection;