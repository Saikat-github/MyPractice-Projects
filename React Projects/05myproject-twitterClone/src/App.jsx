import React from 'react'

const App = () => {
  return (
    <div class="flex">
      {/* <!-- First Section --> */}
      <div class="first text-white flex pl-32 pr-4 overflow-hidden">
        <div class="flex flex-col space-y-2 my-2">
          <div class="menu rounded-full hover:bg-stone-900 cursor-pointer w-fit py-2 px-4 flex">
            <svg viewBox="0 0 24 24" aria-hidden="true"
              class="w-8 invert text-white r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk">
              <g>
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                </path>
              </g>
            </svg>
          </div>
          <div
            class="menu rounded-full hover:bg-stone-900 cursor-pointer w-fit py-2 px-4 flex space-x-4  items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
              fill="#e8eaed">
              <path
                d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
            <p class="text-xl">Home</p>
          </div>
          <div
            class="menu rounded-full hover:bg-stone-900 cursor-pointer w-fit py-2 px-4 flex space-x-4  items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
              fill="#e8eaed">
              <path
                d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <p class="text-xl">Search</p>
          </div>
          <div
            class="menu rounded-full hover:bg-stone-900 cursor-pointer w-fit py-2 px-4 flex space-x-4  items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
              fill="#e8eaed">
              <path
                d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
            </svg>
            <p class="text-xl">Notifications</p>
          </div>
          <div
            class="menu rounded-full hover:bg-stone-900 cursor-pointer w-fit py-2 px-4 flex space-x-4  items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
              fill="#e8eaed">
              <path
                d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
            <p class="text-xl">Messages</p>
          </div>
          <div
            class="menu rounded-full hover:bg-stone-900 cursor-pointer w-fit py-2 px-4 flex space-x-4  items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
              fill="#e8eaed">
              <path
                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z" />
            </svg>
            <p class="text-xl">Grok</p>
          </div>
          <div
            class="menu rounded-full hover:bg-stone-900 cursor-pointer w-fit py-2 px-4 flex space-x-4  items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
              fill="#e8eaed">
              <path
                d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
            </svg>
            <p class="text-xl">Bookmarks</p>
          </div>
          <div
            class="menu rounded-full hover:bg-stone-900 cursor-pointer w-fit py-2 px-4 flex space-x-4  items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
              fill="#e8eaed">
              <path
                d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
            </svg>
            <p class="text-xl">Communities</p>
          </div>
          <div
            class="menu rounded-full hover:bg-stone-900 cursor-pointer w-fit py-2 px-4 flex space-x-4  items-center">
            <svg viewBox="0 0 24 24" aria-hidden="true"
              class="invert w-6 text-white r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk">
              <g>
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                </path>
              </g>
            </svg>
            <p class="text-xl">Premium</p>
          </div>
          <div
            class="menu rounded-full hover:bg-stone-900 cursor-pointer w-fit py-2 px-4 flex space-x-4  items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
              fill="#e8eaed">
              <path
                d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
            <p class="text-xl">Profile</p>
          </div>
          <div
            class="menu rounded-full hover:bg-stone-900 cursor-pointer w-fit py-2 px-4 flex space-x-4  items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
              fill="#e8eaed">
              <path
                d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
            </svg>
            <p>More</p>
          </div>
          <button class="bg-sky-500/100 px-20 py-2 text-xl rounded-full hover:bg-sky-600">Post</button>
          <div class="w-60">
            <button class="w-full flex justify-between items-center rounded-full hover:bg-stone-900 px-1 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px"
                fill="#e8eaed">
                <path
                  d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
              </svg>
              <div class="flex flex-col">
                <span class="font-bold">Saikat Saha</span>
                <span class="text-gray-400">@Saikaatsaha</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="#e8eaed">
                <path
                  d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
              </svg>
            </button>

          </div>
        </div>
      </div>


      {/* <!-- Second Section --> */}
      <div class="second w-1/2 border-x-[1px] border-gray-800 text-white">
        <div class="top flex">
          <div class="left w-1/2 flex justify-center font-bold p-4">For You</div>
          <div class="left w-1/2 flex justify-center font-bold p-4">Following</div>
        </div>
        <hr class="opacity-20" />
        <div class="profile p-6 flex space-x-2 w-full">
          <div class="h-full">
            <img src="/img.jpg" class="w-10 h-10 object-cover rounded-full" />
          </div>
          <div class="post-info flex flex-col space-y-4 max-w-[80%] w-full">
            <input type="text" placeholder="What is happening?!" class="text-xl text-stone-500 bg-black" />
            <span class="text-sky-700 font-semibold">Everyone can reply</span>
            <hr class="opacity-20" />
            <div class="post-options flex justify-between">
              <div class="flex space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M340-400h40q17 0 28.5-11.5T420-440v-40h-40v40h-40v-80h80q0-17-11.5-28.5T380-560h-40q-17 0-28.5 11.5T300-520v80q0 17 11.5 28.5T340-400Zm120 0h40v-160h-40v160Zm80 0h40v-60h60v-40h-60v-20h80v-40H540v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-560h200v-80H480v80Zm0 240h200v-80H480v80ZM360-520q33 0 56.5-23.5T440-600q0-33-23.5-56.5T360-680q-33 0-56.5 23.5T280-600q0 33 23.5 56.5T360-520Zm0 240q33 0 56.5-23.5T440-360q0-33-23.5-56.5T360-440q-33 0-56.5 23.5T280-360q0 33 23.5 56.5T360-280ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87Zm-547 65q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v250q-18-13-38-22t-42-16v-212h-80v120H280v-120h-80v560h212q7 22 16 42t22 38H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
              </div>
              <button class="px-6 py-1 bg-sky-900 rounded-full font-bold">Post</button>
            </div>
          </div>
        </div>

        {/* <!-- Posts Section --> */}
        {/* <!-- Post1 --> */}
        <hr class="opacity-20" />

        <div class="posts flex space-x-2 p-6">
          <div class="post-img">
            <img src="/img.jpg" class="w-10 h-10 object-cover rounded-full" />
          </div>
          <div class="post-info flex flex-col space-y-4 max-w-[80%]">
            <div class="username">
              <span class="font-bold">World of Statistics</span>
              <span class="text-gray-600">@stats_feed</span>
            </div>
            <div class="post-content">
              What's the benefit of being "married" over just
              being together forever?
            </div>
            <div class="post-stat flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200 80-360l56-58 64 64v-286q0-66 47-113t113-47q66 0 113 47t47 113v280q0 33 23.5 56.5T600-280q33 0 56.5-23.5T680-360v-286l-64 64-56-58 160-160 160 160-56 58-64-64v286q0 66-47 113t-113 47q-66 0-113-47t-47-113v-280q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640v286l64-64 56 58-160 160Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">p<path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z" /></svg>
            </div>
          </div>
        </div>

        {/* <!-- Post2 --> */}
        <hr class="opacity-20" />

        <div class="posts flex space-x-2 p-6">
          <div class="post-img">
            <img src="/img.jpg" class="w-10 h-10 object-cover rounded-full" />
          </div>
          <div class="post-info flex flex-col space-y-4 max-w-[80%]">
            <div class="username">
              <span class="font-bold">Shweta Kukreja</span>
              <span class="text-gray-600">@ShwetaKukreja_</span>
            </div>
            <div>
              Call me old fashioned but I do not understand clubbing as a hobby
            </div>
            <div class="post-stat flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200 80-360l56-58 64 64v-286q0-66 47-113t113-47q66 0 113 47t47 113v280q0 33 23.5 56.5T600-280q33 0 56.5-23.5T680-360v-286l-64 64-56-58 160-160 160 160-56 58-64-64v286q0 66-47 113t-113 47q-66 0-113-47t-47-113v-280q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640v286l64-64 56 58-160 160Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">p<path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z" /></svg>
            </div>
          </div>
        </div>

        {/* <!-- Post3 --> */}


        {/* <!-- Post4 --> */}
        <hr class="opacity-20" />

        <div class="posts flex space-x-2 p-6">
          <div class="post-img">
            <img src="/img.jpg" class="w-10 h-10 object-cover rounded-full" />
          </div>
          <div class="post-info flex flex-col space-y-4 max-w-[80%]">
            <div class="username">
              <span class="font-bold">World of Statistics</span>
              <span class="text-gray-600">@stats_feed</span>
            </div>
            <div class="post-content">
              What's the benefit of being "married" over just
              being together forever?
            </div>
            <div class="post-stat flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200 80-360l56-58 64 64v-286q0-66 47-113t113-47q66 0 113 47t47 113v280q0 33 23.5 56.5T600-280q33 0 56.5-23.5T680-360v-286l-64 64-56-58 160-160 160 160-56 58-64-64v286q0 66-47 113t-113 47q-66 0-113-47t-47-113v-280q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640v286l64-64 56 58-160 160Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">p<path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z" /></svg>
            </div>
          </div>
        </div>

        {/* <!-- Post5 --> */}
        <hr class="opacity-20" />

        <div class="posts flex space-x-2 p-6">
          <div class="post-img">
            <img src="/img.jpg" class="w-10 h-10 object-cover rounded-full" />
          </div>
          <div class="post-info flex flex-col space-y-4 max-w-[80%]">
            <div class="username">
              <span class="font-bold">World of Statistics</span>
              <span class="text-gray-600">@stats_feed</span>
            </div>
            <div class="post-content">
              What's the benefit of being "married" over just
              being together forever?
            </div>
            <div class="post-stat flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200 80-360l56-58 64 64v-286q0-66 47-113t113-47q66 0 113 47t47 113v280q0 33 23.5 56.5T600-280q33 0 56.5-23.5T680-360v-286l-64 64-56-58 160-160 160 160-56 58-64-64v286q0 66-47 113t-113 47q-66 0-113-47t-47-113v-280q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640v286l64-64 56 58-160 160Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">p<path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z" /></svg>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Third Section --> */}
      <div class="third w-1/4 mt-2 mr-16 px-4">
        <div class="search w-full rounded-full bg-zinc-900 px-4 py-2 flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
            fill="#e8eaed">
            <path
              d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <input type="text" placeholder="Search" class="bg-zinc-900 w-full" />
        </div>
        <div class="whats w-full rounded-xl border-gray-800 border-[1px] text-white mt-6 px-4 ">
          <h1 class="text-2xl font-bold">What's happening</h1>
          <div class="trend py-4 flex flex-col gap-0.5 cursor-pointer">
            <span class="text-sm text-gray-400">Politics · Trending</span>
            <span class="font-bold">POTUS</span>
            <span class="text-sm text-gray-400">337K posts</span>
          </div>
          <div class="trend py-4 flex flex-col gap-0.5 cursor-pointer">
            <span class="text-sm text-gray-400">Trending in India</span>
            <span class="font-bold">#Budget2024</span>
            <span class="text-sm text-gray-400">6,788 posts</span>
          </div>
          <div class="trend py-4 flex flex-col gap-0.5 cursor-pointer">
            <span class="text-sm text-gray-400">Trending</span>
            <span class="font-bold">#NEET</span>
            <span class="text-sm text-gray-400">19.8K posts</span>
          </div>
          <div class="trend py-4 flex flex-col gap-0.5 cursor-pointer">
            <span class="text-sm text-gray-400">Business & finance · Trending</span>
            <span class="font-bold">#HDFCBank</span>
            <span class="text-sm text-gray-400">2,219 posts</span>
          </div>
        </div>

        {/* <!--  --> */}
        <div class="follow w-full rounded-xl border-gray-800 border-[1px] text-white mt-6 px-4">
          <button class="w-full flex justify-center items-center space-x-4 rounded-full px-1 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px"
              fill="#e8eaed">
              <path
                d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
            <div class="flex flex-col">
              <span class="font-bold">Saikat Saha</span>
              <span class="text-gray-400">@Saikaatsaha</span>
            </div>
            <a href=""
              class="bg-white text-black px-4 py-1 rounded-full hover:bg-stone-200 text-sm font-bold">Follow</a>
          </button>
          <button class="w-full flex justify-center items-center space-x-4 rounded-full px-1 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px"
              fill="#e8eaed">
              <path
                d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
            <div class="flex flex-col">
              <span class="font-bold">Saikat Saha</span>
              <span class="text-gray-400">@Saikaatsaha</span>
            </div>
            <a href=""
              class="bg-white text-black px-4 py-1 rounded-full hover:bg-stone-200 text-sm font-bold">Follow</a>
          </button>
          <button class="w-full flex justify-center items-center space-x-4 rounded-full px-1 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px"
              fill="#e8eaed">
              <path
                d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
            <div class="flex flex-col">
              <span class="font-bold">Saikat Saha</span>
              <span class="text-gray-400">@Saikaatsaha</span>
            </div>
            <a href=""
              class="bg-white text-black px-4 py-1 rounded-full hover:bg-stone-200 text-sm font-bold">Follow</a>
          </button>
        </div>

      </div>
    </div>
  )
}

export default App