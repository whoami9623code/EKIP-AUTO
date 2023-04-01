

// import { Button } from "@material-tailwind/react";

import Data from '../components/data'
import Cart from '../components/cart';
import Ordered from '../components/ordered';
import Selected from '../components/selected';
import { useState } from 'react';

const tabsData = [
  {
    label: 'МОЇ ДАНІ',
    content: <Data />
  },
  {
    label: 'КОРЗИНА',
    content: <Cart />
  },
  {
    label: 'ЗАМОВЛЕННЯ',
    content: <Ordered />
  },
  {
    label: 'ОБРАНІ',
    content: <Selected />
  }
];

function Mypage() {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="flex flex-col w-full justify-between items-center bg-[#f2f2f2] text-center">

      <div className=" bg-white w-full flex justify-between items-center px-[64px] pb-7">
        <button className=" text-[24px] font-arial font-semibold tracking-wider">М<span className='text-[18px]'>ОЯ СТОРІНКА</span></button>
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`mt-[40px] border-b-4 transition-colors duration-300 ${idx === activeTabIndex
                ? 'border-[#280559]'
                : 'border-transparent hover:border-gray-200 '
                }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              <p className={`text-[24px] font-semibold ${idx === activeTabIndex
                ? 'text-[#280559]'
                : 'text-[#92929D]'
                }`}>{tab.label}</p>
            </button>
          );
        })}
        <button className='bg-[#f8f7f0] h-10 shadow-md px-[30px] border  text-[16px] font-semibold'>вийти</button>
      </div>

      {/* Show active tab content.*/}
      <div className='w-full'>
        {tabsData[activeTabIndex].content}
      </div>

    </div>
  );
}

export default Mypage;
