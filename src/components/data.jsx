
export default function Data() {
   return (
      <div className=" w-full px-[90px] bg-white">
         <div className="text-[20px] font-medium ml-3 text-left">
            <p className="text-[36px] font-arial font-semibold tracking-wider mb-1"><span className='uppercase'>У</span>ВАГА!</p>
            <p className="text-[30px] font-arial font-semibold"> ЩОБ ЗДІЙСНИТИ ЗАМОВЛЕННЯ ПОТРІБНО ЗАПОВНИТИ УСІ ПУНКТИ С ЗІРОЧКАМИ * </p>
         </div>
         <div className="flex font-arial  text-left justify-between ml-5 mt-8 mb-8 max-w-[1130px]">
            <div class="w-[315px] mb-4 " >
               <label class=" block ml-1 text-gray-700  font-bold mb-2 text-[24px]" for="username">
                  Ім’я: *
               </label>
               <input class="bg-[#f8f7f0] text-[18px] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Тимур" />
            </div>
            <div class="mb-4 font-arial w-[315px]">
               <label class="block ml-1  text-gray-700 font-bold mb-2 text-[24px]" for="username">
                  Прізвище: *
               </label>
               <input class="bg-[#f8f7f0] text-[18px] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Гавриленко" />
            </div>
            <div class="mb-4 font-arial w-[315px]">
               <label class="block ml-1  text-gray-700 font-bold mb-2 text-[24px]" for="username">
                  По батькові:
               </label>
               <input class="bg-[#f8f7f0] shadow-md text-[18px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="" />
            </div>

         </div>
         <div className="flex w-[730px] justify-between ml-5 mb-8 text-left">
            <div class="mb-4 w-[315px]">
               <label class="block ml-1 text-gray-700 text-[24px] font-bold mb-2 " for="username">
                  Номер телефону: *
               </label>
               <input class="bg-[#f8f7f0] text-[18px] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="+38 (093) 381- 34 -30" />
            </div>
            <div class="mb-4 w-[315px]">
               <label class="block ml-1 text-gray-700 text-[24px] font-bold mb-2" for="username">
                  Email: *
               </label>
               <input class="bg-[#f8f7f0] text-[18px] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="mctimachka@gmail.com" />
            </div>
         </div>
         <div className="flex w-[730px] justify-between ml-5 mb-8 text-left">
            <div class="mb-4 w-[315px]">
               <label class="block ml-1 text-gray-700 text-[24px] font-bold mb-2 " for="username">
                  Місто достави: *
               </label>
               <input class="bg-[#f8f7f0] text-[18px] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Одеса" />
            </div>
            <div class="mb-4 w-[315px]">
               <label class="block ml-1 text-gray-700 text-[24px] font-bold mb-2" for="username">
                  Адреса достави: *
               </label>
               <input class="bg-[#f8f7f0] text-[18px] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Толбухіна 46А" />
            </div>
         </div>
         <div class="mb-4 text-left max-w-[725px] ml-5">
            <label class="block ml-1 text-gray-700 font-bold mb-2 text-[24px]" for="username">
               Додаткова інформація достави:
            </label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-[18px] text-gray-900 bg-[#f8f7f0] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Тут можна додати більш детальну інформацію про адресу достави..."></textarea>

         </div>
         <div className="flex  justify-start items-end mt-10 ml-5 mr-[] mb-8 gap-[100px] text-left">
            <div class="w-[315px]">
               <label class="block ml-1 text-gray-700  font-bold mb-2 text-[24px] " for="username">
                  Новий пароль:
               </label>
               <input class="bg-[#f8f7f0] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="" />
            </div>
            <div class="ml-5 w-[315px]">
               <label class="block ml-1 text-gray-700 text-[24px] font-bold mb-2" for="username">
                  Підтвердити пароль:
               </label>
               <input class="bg-[#f8f7f0] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="" />
            </div>
            <button className='bg-[#f8f7f0] h-10  shadow-md px-[30px] border py-[10px] text-[16px] font-semibold'>Змінити</button>

         </div>
         <div className="flex ">
            <button className='ml-[640px] bg-[#f8f7f0] h-10 shadow-md px-[30px] mb-[55px] border mt-[40px] text-[24px] font-semibold'>Зберегти</button>
         </div>
      </div>
   )
}