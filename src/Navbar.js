
import React from 'react';
import Home from './assets/home_FILL0_wght300_GRAD0_opsz24.svg';
import Group from './assets/group_FILL0_wght300_GRAD0_opsz24.svg';
import Calender from './assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg';
import Message from './assets//chat_bubble_FILL0_wght300_GRAD0_opsz24.svg';
import Card from './assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg';
import Logo from './assets/TestLogo.svg';
import Old from './assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png';
const Navbar = () => {
  return (

    <nav class="bg-gray-700 lg:w-full flex justify-around rounded-full p-3">
      <div class="container w-full flex justify-between items-center mr-10">
        <div className='flex '>
        <img src={Logo} alt="Icon" className="w-20 ml-7" />
        <h1 class="text-2xl font-bold text-gray-50">Tech <span>.</span>Care</h1>
        </div>
        
        <div class="flex justify-around ml-8">
          <div class="flex items-center gap-2">
            <span>
            <img src={Home} alt="Icon" className="w-7 ml-7" />
            </span>
            <span class="text-gray-50">Overview</span>
          </div>
          <div class="flex items-center gap-2">
            <span>
            <img src={Group} alt="Icon" className="w-7 ml-7" />
            </span>
            <span class="text-gray-50">Patients</span>
          </div>
          <div class="flex items-center gap-3">
            <span>
            <img src={Calender} alt="Icon" className="w-7 ml-7" />
            </span>
            <span class="text-gray-50">Schedule</span>
          </div>
          <div class="flex items-center gap-3">
            <span>
            <img src={Message} alt="Icon" className="w-7 ml-7" />
            </span>
            <span class="text-gray-50">Message</span>
          </div>
          <div class="flex items-center gap-3">
            <span>
            <img src={Card} alt="Icon" className="w-7 ml-7 " />
            </span>
            <span class="text-gray-50">Transaction</span>
          </div>
        </div>
        <div class="lg:flex hidden items-center  rounded-full">
        <div class="flex items-center gap-4">
            <span>
            <img src={Old} alt="Image" className="w-14 " />
            </span>
            <span class="text-gray-50">             
            
            <div className="flex flex-col ">
              <span className="font-bold ">Dr. Jones Simmons</span>
              <span className="text-base">General Practioners</span>
            </div></span>
          </div>

        </div>
      </div>
    </nav>

);
};

export default Navbar;
