import { Checkbox } from "@material-tailwind/react";


export function Login() {
   return (
      <>
         <div class=" mb-[30px] w-[315px]">
            <label class="block ml-1 text-gray-700 text-[18px] font-bold mb-2" for="username">
               Введіть Email
            </label>
            <input class="bg-[#f8f7f0] text-[18px] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
         </div>
         <hr className="bg-black mb-10 w-[380px]" />
         <div class="mb-10 w-[315px]">
            <label class="block ml-1 text-gray-700 text-[18px] font-bold mb-2" for="username">
               Введіть пароль:
            </label>
            <input class="bg-[#f8f7f0] text-[18px] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Пароль" />
         </div>
         <div class="mb-10 w-[315px]">
            <label class="block ml-1 text-gray-700 text-[18px] font-bold mb-2" for="username">
               Підтвердити пароль:
            </label>
            <input class="bg-[#f8f7f0] text-[18px] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="Пароль" />
         </div>
         <div className="flex items-center">
            <Checkbox defaultChecked />
            <p className="text-[18px]">Показати пароль</p>
         </div>
         <div className="w-full flex justify-center">

            <button className='bg-[#f8f7f0] h-10 shadow-md px-[30px] border  text-[16px] font-semibold'>зареєструватися</button>
         </div>
      </>)
}

export function Signup({ value }) {
   return (
      <>

         <div class=" mb-[30px] w-[315px]">
            <label class="block ml-1 text-gray-700 text-[18px] font-bold mb-2" for="username">
               Введіть Email
            </label>
            <input class="bg-[#f8f7f0] text-[18px] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
         </div>
         <div class="mb-10 w-[315px]">
            <label class="block ml-1 text-gray-700 text-[18px] font-bold mb-2" for="username">
               Введіть пароль:
            </label>
            <input class="bg-[#f8f7f0] text-[18px] shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="Пароль" />
         </div>

         <div className="flex items-center">
            <Checkbox defaultChecked />
            <p className="text-[18px]">- Запам’ятати мене</p>
         </div>
         <div className="w-full flex justify-center">

            <button onClick={(e) => value(2)} className='bg-[#f8f7f0] h-10 shadow-md px-[50px] border  text-[16px] font-semibold'>увійти</button>
         </div>
      </>
   )
}
export function Success({ value }) {
   return (
      <section className="flex px-10 flex-col items-center gap-5 bg-white border-black border-2 shadow-lg shadow-black text-black">
         <p className="text-[36px] font-arial text-black">Дякуємо за реєстрацію!</p>
         <hr className="bg-black mb-10 w-[380px]" />
         <div className=" w-full flex flex-col items-start">
            <p className="text-[16px] font-arial text-black mb-10 ">Ми вислали Вам пісьмо на пошту для підтвердження веддених даних.<br></br>Щоб продовжити перейдить за посиланям на пошті.</p>
            <p className="text-[16px] font-arial text-black">Якщо письмо не прийшло протягом хвилини, <br></br>то натисніть на відправити знову: 29</p>
         </div>
         <div className="flex w-full justify-start">
            <button className='bg-[#bcbab5] h-10 shadow-md px-[50px] border  text-[16px] font-semibold'>Відправити знову</button>
         </div>
         <button onClick={(e) => value(0)} className='bg-[#f8f7f0] mb-8 h-10 shadow-md px-[50px] border  text-[16px] font-semibold'>увійти</button>

      </section>
   )
}