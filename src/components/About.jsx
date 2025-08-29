import React from 'react';
import Laptop from '../assets/car4.png';

const About = () => {
  return (
    <div id="about" className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#f98638] font-bold '>ABOUT US</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Who We Are</h1>
          <p>
          PrimeMarket is a trusted online marketplace designed to connect buyers and sellers of vehicles and real estate in Sri Lanka. We bring transparency, convenience, and security to high-value transactions, ensuring that every user can engage with confidence. Our platform is built to empower individuals and businesses by simplifying the way people discover, buy, and sell assets that matter most.
          </p>

          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>What We Do</h1>
          <p>
          At PrimeMarket, we make buying and selling vehicles and real estate seamless. We provide an easy-to-use platform where users can create listings, explore properties and vehicles, and connect directly with potential buyers or sellers. Our in-built features—such as advanced filters, private chat, scheduling tools, and real-time notifications—streamline the transaction process. By prioritizing user privacy and trust, we ensure sensitive details remain secure until both parties are ready to move forward.
          </p>
          <button
                  onClick={() =>
                    document.getElementById("newsletter").scrollIntoView({ behavior: "smooth" })
                  }
           className='bg-black text-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Early Access</button>
        </div>
      </div>
    </div>
  );
};

export default About;
