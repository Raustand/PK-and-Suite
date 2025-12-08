import React from "react";
import Header from "../components/header";11
import Footer from "../components/footer";6
import { Link } from 'react-router-dom';

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="flex flex-col gap-3 text-center pb-3">
      <div className="px-4">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div>
        <p className="text-[#0e171b] text-base font-medium leading-normal">{name}</p>
        <p className="text-[#4e7f97] text-sm font-normal leading-normal">{role}</p>
      </div>
    </div>
  );
};

const Aboutus = () => {
  return (
    <>
    <Header/>
<div className="container mx-auto px-4 py-8  text-gray-800">
            <header className=" text-center mb-12">

        <h1 className="text-[#0e171b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Meet Our Team
       </h1>

<div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
  {/* Team Member 1 */}
  <div className="flex flex-col gap-3 text-center pb-3">
    <div className="px-4">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
        style={{
          backgroundImage:
          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJIJXPv_ki3PYsEpZpp2zMx9HXLDVDZJRyiLu-3KmpWZqbHYaHkkUTt5ScwY6KtpTYzM0TUwbYq-fNktBD-3_yH5kW3zQ8mSSQM967DE2ujYV-rQDaIFb-SNqhnVqT-egVa1lDi50MXn2cJ4D-e1VF2FvC3byM1xwlXK6EagItFxEaBoVrR1TZNpj1VhDOUBa0vG23ePk3HxSpvJb-kftRacLJ-NBVI0C1oRiUewQfhE2H8V-ReZewZz-h72TRPPV67obwe0fi_weX")',
       
        }}
      ></div>
    </div>
    <div>
      <p className="text-[#0e171b] text-base font-medium leading-normal">Oliver Hayes</p>
      <p className="text-[#4e7f97] text-sm font-normal leading-normal">General Manager</p>
    </div>
  </div>

  {/* Team Member 2 */}
  <div className="flex flex-col gap-3 text-center pb-3">
    <div className="px-4">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWOvq7Q10Yj71YHa0Sh1yS349QrvAKJEPuS2KVS7YG6Tu0f4nLO_x5ZCNlvMCBGXb7okjrMFi52cYlgGDjNMPSkB54y6P6PA8sPujlH0qCydm36qndgAIDX3tJ1xm6T9-gQFpMD7KyMOwg5s5GCUlTw9sWgiu18oKytdzz0S2AfwSuZZSgN-cZuQUm_eHRPMHOOU43gtj7QQn3FjriSrxqiIGgd98GX4wz4SFug6Hg_3ykpVBI4OWXxSgxSOYe3W8o5080QHOrwORe")',
        }}
      ></div>
    </div>
    <div>
      <p className="text-[#0e171b] text-base font-medium leading-normal">Sophia Rossi</p>
      <p className="text-[#4e7f97] text-sm font-normal leading-normal">Head Chef</p>
    </div>
  </div>

  {/* Team Member 3 */}
  <div className="flex flex-col gap-3 text-center pb-3">
    <div className="px-4">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiI4KqopOu729GPiGva0CMkc6gi36ay2IRXrxVt67WmPODS0mKH-joftjf6Lj-mOGDfaZIAfBXufBg6rWVnC_FGLTmkpT6biuunVAisazatt9bOBNaZCHhneIStzEOxnQgXSoooOVgyoL0UX9JwpwnJl8LXWvdhaFhYjR5UXrhV8AOrS_psIDotznq2BkrE1NF1O2wHSKkR2dNbhQyC6qu5QspFK3zUJixeXGcbhnjLNDvwHi8UR6dv6NeAXQ2cz4gKyIwyTBOZX4V")',
        }}
      ></div>
    </div>
    <div>
      <p className="text-[#0e171b] text-base font-medium leading-normal">Ethan Blake</p>
      <p className="text-[#4e7f97] text-sm font-normal leading-normal">Spa Director</p>
    </div>
  </div>
</div>
              <div className="titlepage ">
                <h2 className="">
                 About us
                </h2>
              </div>
              <p className="text-gray-600 mt-2">Explore the world-class amenities we offer.</p>
            </header>
      <main className="container mx-auto px-6 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Experiences</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            We pride ourselves on creating unforgettable experiences. Our commitment to quality and customer satisfaction is at the core of everything we do. From personalized services to unique adventures, we strive to exceed your expectations at every turn.
          </p>
        </section>
      </main>
    </div>
    <Footer/>
    </>
   );
};

export default Aboutus;