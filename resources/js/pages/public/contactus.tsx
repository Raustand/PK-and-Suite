import React from "react";
import Header from "../components/header";11
import Footer from "../components/footer";6
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


const ContactUs = () => {
  return (
    <>
    <Header/> 
    <div className="">
      {/* If you want to use the same header as the main page, uncomment this line */}
      {/* <Header /> */}
      
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-lg font-semibold text-blue-600">Need help?</h1>
          <h3 className="contact text-4xl font-bold text-gray-900 mt-2">Get In Touch.</h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Do you need help, more information or want to drop us a line? Please feel free to reach out to us using the form below or through our contact details.</p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <form action="#" className="bg-white p-8 rounded-lg shadow-md space-y-6" method="POST">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Full Name</label>
                <input className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="John Doe" type="text"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
                <input className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" name="email" placeholder="you@example.com" type="email"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                <textarea className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" id="message" name="message" placeholder="Your message..." rows={4}></textarea>
              </div>
              <div>
                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-3 rounded-full">
                  <WhatsAppIcon/>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">WhatsApp</h4>
                <p className="mt-1 text-gray-600">+237 656-107-689</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-3 rounded-full">
                 <EmailIcon/>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                <p className="mt-1 text-gray-600">Hotel&Suite@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-3 rounded-full">
                  <CallIcon/>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">Call</h4>
                <p className="mt-1 text-gray-600">+237 656-107-689</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
            <p className="mt-2 text-gray-600">We are located here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-center">
                {/* <span  className="material-icons text-gray-500 mr-2">location_on</span> */}
                <p className="text-gray-800"><span className="font-semibold">Address:</span> Deido-Bessengue, Douala, Cameroon</p>
              </div>
              <div className="flex items-center">
                {/* <span className="material-icons text-gray-500 mr-2">schedule</span> */}
                <p className="text-gray-800"><span className="font-semibold">Check-in:</span> 24/7</p>
              </div>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden">
              <iframe title="Map showing the location of the office" className="w-full h-80 object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.413275339559!2d9.707000337445606!3d4.050327935777402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10611287df82683d%3A0x5bfec7a0465c2d93!2sBessengue%2C%20Douala!5e0!3m2!1sen!2scm!4v1751364190800!5m2!1sen!2scm" />
            </div>
          </div>
        </section>
      </main>
    </div>
    <Footer/>
    </>
   );
};

export default ContactUs;