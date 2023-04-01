import laptop from '../../public/images/laptop.png';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';

import { HiCheck } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';
import { HiOutlinePencil } from 'react-icons/hi';


import vac from '../../public/images/vac.png';
import next from '../../public/images/next.svg';

export default function Ordered() {

   return (
      <div className="w-full flex flex-col bg-white ">

         <p className='ml-[190px] flex text-[15px] underline justify-start mt-8'>22 березня 2023</p>
         <div className='overflow-x-scroll'>
            <div className='flex flex-col m-auto w-[1200px] '>
               <div className="my-[25px] ml-3 w-[1180px] text-[12px] flex justify-between leading-none font-arial border-black border-b-2 ">
                  <p>ПОЗИЦІЙ</p>
                  <p>ФОТО ТОВАРУ</p>
                  <p> НАЗВА ЗАМОВЛЕННЯ</p>
                  <p> ВАГА ЗАМОВЛЕННЯ</p>
                  <p> ЗАГАЛЬНА СУМА</p>
                  <p> СПЛАЧЕНО</p>

               </div>

               <table className='mb-10 border-collapse '>
                  <thead>
                     <tr>
                        <th width="70px"></th>
                        <th width="190px"></th>
                        <th width="490px"></th>
                        <th width="150px"></th>
                        <th width="140px" scope="col" rowspan="2"></th>
                        <th width="100px"></th>
                        <th width="70px"></th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td className='border border-black'>20</td>
                        <td className='border border-black'>
                           <div class="flex justify-around my-1 ">
                              <img
                                 class="h-full w-[65px]  object-cover object-center"
                                 src={laptop}
                                 alt=""
                              />
                              <img
                                 class="h-full w-[65px]  object-cover object-center"
                                 src={vac}
                                 alt=""
                              />
                           </div>
                        </td>
                        <td className='border border-black'>
                           <div class="flex justify-around my-1 ">
                              <p className='text-[20px] font-arial font-semibold'>Замовлення від 22 березня на  4 500 $</p>
                              <HiOutlinePencil size="25px" />
                           </div>
                        </td>
                        <td className='border border-black text-[20px] font-arial'>105.5 кг</td>

                        <td className='border border-black'>
                           <div className='text-[24px] font-arial border-b border-black '>
                              16 000 ₴
                           </div>
                           <div className='text-[16px] font-arial'>
                              4500 $
                           </div>
                        </td>

                        <td className='border border-black'>
                           <div className='flex justify-center'>
                              < HiCheck size="60px" />
                           </div>
                        </td>
                        <td className='border border-black'>
                           <img className='mx-7 w-[25px]' src={next} alt='' />
                        </td>

                     </tr>

                  </tbody>
               </table>
            </div>
            <div className='flex flex-col m-auto w-[1200px] overflow-x-scroll'>
               <div className="my-[25px] ml-3 w-[1180px] text-[12px] flex justify-between leading-none font-arial border-black border-b-2 ">
                  <p>ПОЗИЦІЙ</p>
                  <p>ФОТО ТОВАРУ</p>
                  <p> НАЗВА ЗАМОВЛЕННЯ</p>
                  <p> ВАГА ЗАМОВЛЕННЯ</p>
                  <p> ЗАГАЛЬНА СУМА</p>
                  <p> СПЛАЧЕНО</p>

               </div>

               <table className='mb-10 border-collapse '>
                  <thead>
                     <tr>
                        <th width="70px"></th>
                        <th width="190px"></th>
                        <th width="490px"></th>
                        <th width="150px"></th>
                        <th width="140px" scope="col" rowspan="2"></th>
                        <th width="100px"></th>
                        <th width="70px"></th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td className='border border-black'>20</td>
                        <td className='border border-black'>
                           <div class="flex justify-around my-1 ">
                              <img
                                 class="h-full w-[65px]  object-cover object-center"
                                 src={laptop}
                                 alt=""
                              />
                              <img
                                 class="h-full w-[65px]  object-cover object-center"
                                 src={vac}
                                 alt=""
                              />
                           </div>
                        </td>
                        <td className='border border-black'>
                           <div class="flex justify-around my-1 ">
                              <p className='text-[20px] font-arial font-semibold'>Замовлення від 22 березня на  4 500 $</p>
                              <HiOutlinePencil size="25px" />
                           </div>
                        </td>
                        <td className='border border-black text-[20px] font-arial'>105.5 кг</td>

                        <td className='border border-black'>
                           <div className='text-[24px] font-arial border-b border-black '>
                              16 000 ₴
                           </div>
                           <div className='text-[16px] font-arial'>
                              4500 $
                           </div>
                        </td>

                        <td className='border border-black'>
                           <div className='flex justify-center'>
                              < RxCross1 size="60px" />
                           </div>
                        </td>
                        <td className='border border-black'>
                           <img className='mx-7 w-[25px]' src={next} alt='' />
                        </td>

                     </tr>

                  </tbody>
               </table>
            </div>
         </div>


         {/* <div class="flex flex-col w-full border-t border-r mt-10 border-black">
               <div class="flex flex-shrink-0 bg-black text-white">
                  <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Heading 1</span></div>
                  <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Heading 2</span></div>
                  <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Heading 3</span></div>
                  <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Heading 4</span></div>
                  <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Heading 5</span></div>
                  <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Heading 6</span></div>
               </div>
               <div class="overflow-auto">
                  <div class="flex flex-shrink-0">
                     <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Item</span></div>
                     <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Item</span></div>
                     <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Item</span></div>
                     <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Item</span></div>
                     <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Item</span></div>
                     <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Item</span></div>
                  </div>
                  <div class="flex flex-shrink-0">
                     <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Item</span></div>
                     <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Item</span></div>
                     <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Item</span></div>
                     <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Item</span></div>
                     <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Item</span></div>
                     <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Item</span></div>
                  </div>

               </div>
               <div class="flex flex-shrink-0 bg-black text-white">
                  <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Footer 1</span></div>
                  <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Footer 2</span></div>
                  <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Footer 3</span></div>
                  <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Footer 4</span></div>
                  <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Footer 5</span></div>
                  <div class="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"><span>Footer 6</span></div>
               </div>
            </div> */}

      </div>
   )
}
