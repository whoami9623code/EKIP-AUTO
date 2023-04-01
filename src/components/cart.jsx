import laptop from '../../public/images/laptop.png'
import { AiOutlineHeart } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';
import down from '../../public/images/download.png';



export default function Cart() {

   return (
      <div className="w-full flex flex-col  items-center bg-white ">
         <div className="my-[25px] w-[1240px] text-[15px] flex justify-between leading-none font-arial border-black border-b-2 ">
            <p>№</p>
            <p>ЗОБРАЖЕННЯ</p>
            <p> НАЗВА / АРТИКУЛ</p>
            <p> ЦІНА ЗА ШТ</p>
            <p> КІЛЬКОСТЬ</p>
            <p> ЗАГАЛЬНА ЦІНА</p>
         </div>
         <div>
            <table class="bg-white border-collapse border border-black w-[1280px]">
               <tr className=' border-black'>
                  <td class="w-[70px]  border border-black text-center">1</td>
                  <td class="w-[280px] px-[100px] border border-black">
                     <div class="w-[65px] ">
                        <img
                           class="h-full w-full  object-cover object-center"
                           src={laptop}
                           alt=""
                        />
                     </div>
                  </td>
                  <td class="w-[580px]  border border-black">
                     <p className='text-[18px]'>ASUS 100500 G Arial- Black (G170-48)</p>
                     <div className='flex-col flex items-end'>

                        <AiOutlineHeart />
                        <p className='bg-[#bcbab5] text-[14px]'>Art: SU 845-64</p>
                     </div>
                  </td>
                  <td class="w-[140px] border border-black">
                     <td className='text-[24px]'>160 ₴</td>

                     <p className='text-[16px]'>45 $</p>

                  </td>
                  <td class="w-[140px]  border border-black">
                     <p className=''>Введіть кратно: 100</p>

                     <p className='text-[14px]'>500</p>

                  </td>
                  <td class=" bg-[#f2f2f2] w-[160px] border border-black">
                     <td className=''>16 000 ₴</td>

                     <p className='text-[14px]'>4500$</p>

                  </td>
                  <td>
                     <IoTrashOutline />
                  </td>
               </tr>
               <tr className=' border-black'>
                  <td class="w-[70px]  border border-black text-center">1</td>
                  <td class="w-[280px] px-[100px] border border-black">
                     <div class="w-[65px] ">
                        <img
                           class="h-full w-full  object-cover object-center"
                           src={laptop}
                           alt=""
                        />
                     </div>

                  </td>
                  <td class="w-[580px]  border border-black">
                     <p className='text-[18px]'>ASUS 100500 G Arial- Black (G170-48)</p>
                     <div className='flex-col flex items-end'>

                        <AiOutlineHeart />
                        <p className='bg-[#bcbab5] text-[14px]'>Art: SU 845-64</p>
                     </div>
                  </td>
                  <td class="w-[140px] border border-black">
                     <td className='text-[24px]'>160 ₴</td>

                     <p className='text-[16px]'>45 $</p>

                  </td>
                  <td class="w-[140px]  border border-black">
                     <p className=''>Введіть кратно: 100</p>

                     <p className='text-[14px]'>500</p>

                  </td>
                  <td class=" bg-[#f2f2f2] w-[160px] border border-black">
                     <td className=''>16 000 ₴</td>

                     <p className='text-[14px]'>4500$</p>

                  </td>
                  <td>
                     <IoTrashOutline />
                  </td>
               </tr>
               <tr className=' border-black'>
                  <td class="w-[70px]  border border-black text-center">1</td>
                  <td class="w-[280px] px-[100px] border border-black">
                     <div class="w-[65px] ">
                        <img
                           class="h-full w-full  object-cover object-center"
                           src={laptop}
                           alt=""
                        />
                     </div>

                  </td>
                  <td class="w-[580px]  border border-black">
                     <p className='text-[18px]'>ASUS 100500 G Arial- Black (G170-48)</p>
                     <div className='flex-col flex items-end'>

                        <AiOutlineHeart />
                        <p className='bg-[#bcbab5] text-[14px]'>Art: SU 845-64</p>
                     </div>
                  </td>
                  <td class="w-[140px] border border-black">
                     <td className='text-[24px]'>160 ₴</td>

                     <p className='text-[16px]'>45 $</p>

                  </td>
                  <td class="w-[140px]  border border-black">
                     <p className=''>Введіть кратно: 100</p>

                     <p className='text-[14px]'>500</p>

                  </td>
                  <td class=" bg-[#f2f2f2] w-[160px] border border-black">
                     <td className=''>16 000 ₴</td>

                     <p className='text-[14px]'>4500$</p>

                  </td>
                  <td>
                     <IoTrashOutline />
                  </td>
               </tr>
               <tr className=' border-black'>
                  <td class="w-[70px]  border border-black text-center">1</td>
                  <td class="w-[280px] px-[100px] border border-black">
                     <div class="w-[65px] ">
                        <img
                           class="h-full w-full  object-cover object-center"
                           src={laptop}
                           alt=""
                        />
                     </div>

                  </td>
                  <td class="w-[580px]  border border-black">
                     <p className='text-[18px]'>ASUS 100500 G Arial- Black (G170-48)</p>
                     <div className='flex-col flex items-end'>

                        <AiOutlineHeart />
                        <p className='bg-[#bcbab5] text-[14px]'>Art: SU 845-64</p>
                     </div>
                  </td>
                  <td class="w-[140px] border border-black">
                     <td className='text-[24px]'>160 ₴</td>

                     <p className='text-[16px]'>45 $</p>

                  </td>
                  <td class="w-[140px]  border border-black">
                     <p className=''>Введіть кратно: 100</p>

                     <p className='text-[14px]'>500</p>

                  </td>
                  <td class=" bg-[#f2f2f2] w-[160px] border border-black">
                     <td className=''>16 000 ₴</td>

                     <p className='text-[14px]'>4500$</p>

                  </td>
                  <td>
                     <IoTrashOutline />
                  </td>
               </tr>
               <tr className=' border-black'>
                  <td class="w-[70px]  border border-black text-center">1</td>
                  <td class="w-[280px] px-[100px] border border-black">
                     <div class="w-[65px] ">
                        <img
                           class="h-full w-full  object-cover object-center"
                           src={laptop}
                           alt=""
                        />
                     </div>

                  </td>
                  <td class="w-[580px]  border border-black">
                     <p className='text-[18px]'>ASUS 100500 G Arial- Black (G170-48)</p>
                     <div className='flex-col flex items-end'>

                        <AiOutlineHeart />
                        <p className='bg-[#bcbab5] text-[14px]'>Art: SU 845-64</p>
                     </div>
                  </td>
                  <td class="w-[140px] border border-black">
                     <td className='text-[24px]'>160 ₴</td>

                     <p className='text-[16px]'>45 $</p>

                  </td>
                  <td class="w-[140px]  border border-black">
                     <p className=''>Введіть кратно: 100</p>

                     <p className='text-[14px]'>500</p>

                  </td>
                  <td class=" bg-[#f2f2f2] w-[160px] border border-black">
                     <td className=''>16 000 ₴</td>

                     <p className='text-[14px]'>4500$</p>

                  </td>
                  <td>
                     <IoTrashOutline />
                  </td>
               </tr>
               <tr className=' border-black'>
                  <td class="w-[70px]  border border-black text-center">1</td>
                  <td class="w-[280px] px-[100px] border border-black">
                     <div class="w-[65px] ">
                        <img
                           class="h-full w-full  object-cover object-center"
                           src={laptop}
                           alt=""
                        />
                     </div>

                  </td>
                  <td class="w-[580px]  border border-black">
                     <p className='text-[18px]'>ASUS 100500 G Arial- Black (G170-48)</p>
                     <div className='flex-col flex items-end'>

                        <AiOutlineHeart />
                        <p className='bg-[#bcbab5] text-[14px]'>Art: SU 845-64</p>
                     </div>
                  </td>
                  <td class="w-[140px] border border-black">
                     <td className='text-[24px]'>160 ₴</td>

                     <p className='text-[16px]'>45 $</p>

                  </td>
                  <td class="w-[140px]  border border-black">
                     <p className=''>Введіть кратно: 100</p>

                     <p className='text-[14px]'>500</p>

                  </td>
                  <td class=" bg-[#f2f2f2] w-[160px] border border-black">
                     <td className=''>16 000 ₴</td>

                     <p className='text-[14px]'>4500$</p>

                  </td>
                  <td>
                     <IoTrashOutline />
                  </td>
               </tr>
            </table>

            <div className='flex flex-col items-center'>
               <button className='flex items-center w-[130px] leading-none bg-[#f8f7f0]  h-[25px] shadow-md px-[15px] border mt-10 mb-1 text-[12px] font-medium font-arial'>
                  Скачати Excel
                  <img class="ml-2 h-3 w-3  object-cover object-center" src={down} alt='...' />
               </button>

               <p className='leading-none   text-[12px] font-medium font-myriad'>*Для більш детального разрахунку загрузіть Excel.</p>
               <button className='w-[210px] leading-none bg-[#f8f7f0] h-[22px] shadow-md px-[20px] border  text-[12px] font-medium font-myriad my-10'>ДОДАТИ КОМЕНТ ДО ЗАКАЗУ</button>
               <button className='bg-[#f8f7f0] w-[300px]  h-[45px] shadow-md px-[30px] border  text-[24px] font-semibold'>ЗАМОВИТИ </button>
               <p className='leading-none  my-5 text-[15px] font-medium font-myriad'>*Перед виконнанням достави ми зателефонуємо Вам для підтвердження діталей.</p>
            </div>

            {/* <div class="flex flex-col w-full border-t border-r border-black">
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

      </div>
   )
}
