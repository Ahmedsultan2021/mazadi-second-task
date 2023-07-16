<!-- Please remove this file from your project -->
<template>
  <div>
    <!--Start Header-->
<header>
  <div class="container flex flex-col md:flex-row px-5 md:px-20 justify-between my-5">
    <div class="search flex w-full md:w-9/12 gap-x-0.5">
      <div class="flex w-full md:w-1/5 items-center gap-x-2 text-Cmain pr-3 bg-red-200 rounded-s-md">
        <p>مزاد مباشر متعدد</p>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <input class="w-full md:w-9/12 items-center pr-5 justify-between rounded-e-md flex bg-red-200" placeholder="ابحث هنا" />
      <i class="fa-solid text-white fa-magnifying-glass bg-main-color py-3 rounded-md px-5"></i>
    </div>
    <div class="logo flex justify-center md:justify-end w-full md:w-1/5 mt-5 md:mt-0">
      <img src="images/Untitled.png" alt="" />
    </div>
  </div>
</header>

    <!--End Header-->
    <!--Start Navbar-->
   <div class="navbar text-white bg-gradient">
  <div class="container flex flex-col md:flex-row px-5 md:px-20 justify-between py-5">
    <ul class="flex justify-between w-full md:w-4/12 text-lg">
      <li>الرئيسية</li>
      <li>التصنيفات</li>
      <li>مشترياتي</li>
      <li>حسابي</li>
    </ul>
    <div class="flex w-full md:w-1/4 justify-between mt-5 md:mt-0">
      <div class="icons w-1/3 md:w-2/5 justify-around text-xl items-center flex">
        <img src="images/price_change_black_24dp.svg" alt="" />
        <i class="fa-regular fa-bell"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
      <div class="flex items-center gap-x-1 text-white px-3 bg-gold rounded-md">
        <p>العربية</p>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  </div>
</div>



    <!--End Navbar-->
    <!--Start Main-->
    <div class="main mt-10 sm:px-6 md:px-12 lg:px-24">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div class="col-span-1 md:col-span-1 pt-5 gap-4">

        <div class="flex flex-row justify-center md:flex-col" >
            
            <i class="fa-solid fa-chevron-up py-4"></i>
            <img
              src="images/car.webp"
              class="w-full sm:w-auto md:w-10/12 h-16 rounded-md mb-4 sm:mb-0 md:mb-4"
              alt=""
            />
            <img
              src="images/car.webp"
              class="w-full sm:w-auto md:w-10/12 h-16 rounded-md mb-4 sm:mb-0 md:mb-4"
              alt=""
            />
            <img
              src="images/car.webp"
              class="w-full sm:w-auto md:w-10/12 h-16 rounded-md mb-4 sm:mb-0 md:mb-4"
              alt=""
            />
            <img
              src="images/car.webp"
              class="w-full sm:w-auto md:w-10/12 h-16 rounded-md mb-4 sm:mb-0 md:mb-4"
              alt=""
            />
          
            <i class="fa-solid fa-chevron-down py-4"></i>
        </div>
        </div>
        <div class="col-span-1 md:col-span-8">
          <div class="bg-white rounded-md drop-shadow-2xl px-2 py-3">
            <div
              class="w-12/12 h-96 pt-2"
              style="
                background-image: url(./images/carsTwo.webp);
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
              "
            >
              <div class="flex justify-between px-5 py-4">
                <div class="flex justify-start gap-x-0.5 items-start w-2/5">
                  <p
                    class="bg-icon h-8 flex text-xs py-2 px-3 gap-x-5 rounded-e-md items-center"
                  >
                    03-00
                    <span
                      class="text-white relative"
                      style="font-size: 23px; bottom: 3px"
                    >
                      |
                    </span>
                    <i class="fa-solid fa-eye text-xs"></i>
                    236
                  </p>
                  <p class="w-14 h-8 bg-white rounded-s"></p>
                </div>
                <div class="flex justify-between w-1/4">
                  <i
                    class="fa-regular fa-flag w-12 h-12 rounded-full flex justify-center items-center text-white bg-icon"
                  ></i>
                  <i
                    class="fa-regular fa-heart w-12 h-12 rounded-full flex justify-center items-center text-white bg-icon"
                  ></i>
                  <i
                    class="fa-sharp fa-solid fa-share-nodes w-12 h-12 rounded-full flex justify-center items-center text-white bg-icon"
                  ></i>
                </div>
              </div>
            </div>
            <div class="flex pt-5 pr-4 gap-x-2 relative">
              <img
                src="images/men.webp"
                class="w-12 h-12 rounded-full"
                alt=""
              />

              <i
                style="top: 47px; right: 38px"
                class="fa-solid fa-heart w-7 text-text h-7 absolute rounded-full flex justify-center items-center bg-white"
              ></i>
              <div class="flex flex-col justify-between">
                <p class="text-sec">اسم البائِع</p>
                <p class="text-xs">0122445577+</p>
              </div>
              <div class="pt-2 pr-2">
                <i class="fa-solid fa-star text-stone-300"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
              </div>
            </div>
            <div class="pt-5 pr-4">
              <h4 class="text-2xl">شراء مجموعة من السيارات من موديلا 1990</h4>
              <p class="text-xs">code 1234</p>
            </div>
            <div
              class="flex lg:justify-between items-center pt-5 pr-4 flex-wrap sm:justify-center gap-4"
            >
              <div class="flex justify-between items-center gap-x-2 flex-wrap">
                <p class="px-3 py-2 bg-red-200 text-Cmain rounded-md">10020+</p>
                <p class="px-3 py-2 bg-red-200 text-Cmain rounded-md">10020+</p>
                <p class="px-3 py-2 bg-red-200 text-Cmain rounded-md">10020+</p>
              </div>
              <div>
                <input
                  type="text"
                  class="border rounded-md px-2 py-1"
                  placeholder="اكتب المبلغ"
                />
                <button class="bg-gradient px-8 rounded-md py-2 text-white">
                  تاكيد
                </button>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-md drop-shadow-2xl px-5 py-3 mt-10">
            <h5 class="text-2xl mb-2">ارسال رسالة الي البائِع</h5>
            <p class="text-sm">
              يمكنك في وقت البث المباشر ارسال رسالة الي البائِع للاستفسار
            </p>
            <div class="flex items-center mt-5 gap-x-2">
              <input
                type="text"
                class="border bg-icon text-black w-11/12 rounded-2xl px-2 py-1"
                placeholder="اكتب سؤالك"
              />
              <img src="images/Group5452.svg" alt="" />
            </div>
          </div>
          <div
            class="bg-white rounded-md drop-shadow-2xl px-5 py-3 mt-10 text-md"
          >
            <h5 class="text-2xl mb-2">تفاصيل المزاد</h5>
            <div class="flex justify-between py-2">
              <p><i class="fa-solid fa-location-dot"></i> Egypt, Mansoura</p>
              <p>200 قطعة</p>
            </div>
            <div class="flex justify-between py-2">
              <p><i class="fa-solid fa-location-dot"></i> البيع لاعلى سعر</p>
              <p class="text-orange-400">
                <i class="fa-solid fa-microphone"></i> صوت
              </p>
            </div>
            <p class="py-2">
              <i class="fa-brands fa-windows"></i> منتجات متعددة
            </p>

            <hr class="py-2" />
            <div>
              <h1 class="font-bold text-xl py-2" >وصف</h1>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
                العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
                أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
                الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة
                حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة
                على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن
                يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى
                يتحدث عنه التصميم فيظهر بشكل لا يليق. هذا النص يمكن أن يتم
                تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم،
                غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
              </p>
            </div>
            <hr class="my-4" />
            <div>
              <h1 class="font-bold text-xl py-2" >سياسة الاسترجاع والاستبدال</h1>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
                العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
                أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
                الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة
                حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة
                على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن
                يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى
                يتحدث عنه التصميم فيظهر بشكل لا يليق. هذا النص يمكن أن يتم
                تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم،
                غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 md:col-span-3">
          <div class="py-3 bg-white rounded-md drop-shadow-2xl px-2">
            <div
              class="flex justify-between bg-neutral-700 p-3 text-white rounded-md"
            >
              <p>تاريخ البث</p>
              <p>22-1-2022</p>
            </div>
            <div
              class="flex justify-center text-white items-center gap-x-1 py-5"
            >
              <div class="w-1/2 h-20 bg-sec text-center py-1 rounded-md">
                <p class="text-sm">القيمة المالية للمزاد</p>
                <p class="text-lg font-bold">$5000</p>
                <div
                  class="flex rounded-lg w-9/12 mt-4 py-0.5 justify-start items-center mx-auto text-sec bg-white"
                >
                  <img
                    src="images/men.webp"
                    class="w-6 h-6 rounded-full"
                    alt=""
                  />
                  <p class="text-xs pr-2">احمد الوائد</p>
                </div>
              </div>
              <div
                class="w-1/2 h-20 text-center text-sec bg-Csec py-1 rounded-md"
              >
                <p class="text-xs">القيمة المالية بعد الضريبة</p>
                <p class="text-xl pt-1 font-bold">$5050</p>
              </div>
            </div>
          </div>
          <div class="mt-4 bg-white rounded-md drop-shadow-2xl pt-3 px-3">
            <h5 class="font-bold pr-2">المتنافسون</h5>
            <div class="flex py-2 my-1 items-center justify-between">
              <div class="text-start flex justify-center">
                <img
                  class="w-11 h-11 rounded-full"
                  src="images/men.webp"
                  alt=""
                />
                <div class="flex pr-2 items-start justify-between flex-col">
                  <p>احمد الوائد</p>
                  <p class="text-xs">11.59.21</p>
                </div>
              </div>
              <p class="text-gold text-xl px-2 py-1 bg-gold-lite">20+</p>
            </div>
            <div class="flex py-2 my-1 items-center justify-between">
              <div class="text-start flex justify-center">
                <img
                  class="w-11 h-11 rounded-full"
                  src="images/men.webp"
                  alt=""
                />
                <div class="flex pr-2 items-start justify-between flex-col">
                  <p>احمد الوائد</p>
                  <p class="text-xs">11.59.21</p>
                </div>
              </div>
              <p class="text-gold text-xl px-2 py-1 bg-gold-lite">20+</p>
            </div>
            <div class="flex py-2 my-1 items-center justify-between">
              <div class="text-start flex justify-center">
                <img
                  class="w-11 h-11 rounded-full"
                  src="images/men.webp"
                  alt=""
                />
                <div class="flex pr-2 items-start justify-between flex-col">
                  <p>احمد الوائد</p>
                  <p class="text-xs">11.59.21</p>
                </div>
              </div>
              <p class="text-gold text-xl px-2 py-1 bg-gold-lite">20+</p>
            </div>
            <div class="flex py-2 my-1 items-center justify-between">
              <div class="text-start flex justify-center">
                <img
                  class="w-11 h-11 rounded-full"
                  src="images/men.webp"
                  alt=""
                />
                <div class="flex pr-2 items-start justify-between flex-col">
                  <p>احمد الوائد</p>
                  <p class="text-xs">11.59.21</p>
                </div>
              </div>
              <p class="text-gold text-xl px-2 py-1 bg-gold-lite">20+</p>
            </div>
            <div class="flex py-2 my-1 items-center justify-between">
              <div class="text-start flex justify-center">
                <img
                  class="w-11 h-11 rounded-full"
                  src="images/men.webp"
                  alt=""
                />
                <div class="flex pr-2 items-start justify-between flex-col">
                  <p>احمد الوائد</p>
                  <p class="text-xs">11.59.21</p>
                </div>
              </div>
              <p class="text-gold text-xl px-2 py-1 bg-gold-lite">20+</p>
            </div>
          </div>
          <div class="mt-12 bg-white rounded-md drop-shadow-2xl px-2 py-0.5">
            <div
              class="flex items-center py-1 my-2 px-2 bg-text justify-between"
            >
              <p class="text-sm">القيمة المالية</p>
              <p class="text-xl font-bold">5000</p>
            </div>
            <div
              class="flex items-center py-1 my-2 px-2 bg-text justify-between"
            >
              <p class="text-sm">القيمة المالية</p>
              <p class="text-xl font-bold">5000</p>
            </div>
            <div
              class="flex items-center py-1 my-2 px-2 bg-text justify-between"
            >
              <p class="text-sm">القيمة المالية</p>
              <p class="text-xl font-bold">5000</p>
            </div>
            <div
              class="flex items-center py-1 my-2 px-2 bg-text justify-between"
            >
              <p class="text-sm">القيمة المالية</p>
              <p class="text-xl font-bold">5000</p>
            </div>
            <div
              class="flex items-center py-1 my-2 px-2 bg-text justify-between"
            >
              <p class="text-sm">القيمة المالية</p>
              <p class="text-xl font-bold">5000</p>
            </div>
          </div>

          <div class="mt-12 bg-white rounded-md drop-shadow-2xl p-2">
            <h5 class="py-3 font-bold">المزادات المفضلة</h5>
            <div class="flex gap-x-1 my-5">
              <div
                class="w-5/12 pt-2 h-24 rounded-md"
                style="
                  background-image: url(./images/cars.webp);
                  background-repeat: no-repeat;
                  background-size: cover;
                  background-position: center;
                "
              >
                <i
                  class="fa-solid fa-heart bg-white text-red-700 mr-2 rounded-full w-9 h-9 flex justify-center items-center"
                ></i>
                <p
                  class="text-xs w-16 text-white bg-orange-400 mt-2 py-1 text-center"
                >
                  مزاد خاص
                </p>
              </div>
              <div class="flex flex-col w-7/12">
                <p class="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                  est necessitatibus rem?
                </p>
                <div class="flex justify-between items-center pt-2">
                  <p class="text-sm">السعر</p>
                  <p class="text-indigo-800 font-bold px-4">$500</p>
                </div>
              </div>
            </div>
            <div class="flex gap-x-1 my-5">
              <div
                class="w-5/12 pt-2 h-24 rounded-md"
                style="
                  background-image: url(./images/cars.webp);
                  background-repeat: no-repeat;
                  background-size: cover;
                  background-position: center;
                "
              >
                <i
                  class="fa-solid fa-heart bg-white text-red-700 mr-2 rounded-full w-9 h-9 flex justify-center items-center"
                ></i>
                <p
                  class="text-xs w-16 text-white bg-orange-400 mt-2 py-1 text-center"
                >
                  مزاد خاص
                </p>
              </div>
              <div class="flex flex-col w-7/12">
                <p class="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                  est necessitatibus rem?
                </p>
                <div class="flex justify-between items-center pt-2">
                  <p class="text-sm">السعر</p>
                  <p class="text-indigo-800 font-bold px-4">$500</p>
                </div>
              </div>
            </div>
            <div class="flex gap-x-1 my-5">
              <div
                class="w-5/12 pt-2 h-24 rounded-md"
                style="
                  background-image: url(./images/cars.webp);
                  background-repeat: no-repeat;
                  background-size: cover;
                  background-position: center;
                "
              >
                <i
                  class="fa-solid fa-heart bg-white text-red-700 mr-2 rounded-full w-9 h-9 flex justify-center items-center"
                ></i>
                <p
                  class="text-xs w-16 text-white bg-orange-400 mt-2 py-1 text-center"
                >
                  مزاد خاص
                </p>
              </div>
              <div class="flex flex-col w-7/12">
                <p class="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                  est necessitatibus rem?
                </p>
                <div class="flex justify-between items-center pt-2">
                  <p class="text-sm">السعر</p>
                  <p class="text-indigo-800 font-bold px-4">$500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End Main-->
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
};
</script>
<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Cairo", sans-serif;
}

ul,
li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: black;
}

:root {
  --main-color: rgba(210, 6, 83, 1);
  --second-color: rgb(68, 33, 93);
  --bg-second-color: rgba(68, 33, 93, 10%);
  --background-gradient: linear-gradient(
    90deg,
    rgba(210, 6, 83, 1) 0%,
    rgba(155, 2, 87, 1) 100%
  );
  --gold-color: rgb(253, 188, 1);
  --gold-color-lite: rgba(253, 188, 1, 0.25);
  --background-text: rgba(243, 243, 243, 1);
  --back-icon: rgba(112, 112, 112, 40%);
}
.flex {
  display: flex !important;
}
.bg-main-color {
  background-color: var(--main-color);
}

.text-Cmain {
  color: var(--main-color);
}

.bg-gradient {
  background-image: var(--background-gradient);
}

.text-gold {
  color: var(--gold-color);
}

.bg-gold {
  background-color: var(--gold-color);
}

.text-gold-lite {
  color: var(--gold-color-lite);
}

.bg-gold-lite {
  background-color: var(--gold-color-lite);
}

.bg-text {
  background-color: var(--background-text);
}

.text-text {
  color: var(--background-text);
}

.text-sec {
  color: var(--second-color);
}

.bg-sec {
  background-color: var(--second-color);
}

.bg-Csec {
  background-color: var(--bg-second-color);
}

.bg-icon {
  background-color: var(--back-icon);
}
</style> 

