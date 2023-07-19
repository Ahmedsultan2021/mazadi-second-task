<!-- Please remove this file from your project -->
<template>
  <div>
    <!--Start Header-->
    <div class="container mx-auto">
      <header>
        <div
          class="px-2 flex flex-col md:flex-row-reverse py-2 gap-3 md:px-10 lg:px-20"
        >
          <div class="md:w-4/12 flex justify-center md:justify-end">
            <img class="block" src="images/Untitled.png" alt="" />
          </div>
          <div class="md:w-11/12 flex flex-col md:flex-row gap-0.5">
            <div class="select-wrapper md:w-1/4">

              <i class="fa-solid fa-chevron-down py-3 left-icon"></i>
              <div class="w-full dropdown text-right">
                <button
                  @click="toggleDropdown"
                  class="w-full text-right text-xs font-semibold w-full bg-search text-Cmain rounded-r py-3 pr-2"
                >
                  مزاد مباشر متعدد
                </button>
                <div
                  :class="{ 'dropdown-content': true, show: isDropdownOpen }"
                  id="myDropdown"
                >
                  <a class="font-semibold text-sm">مزاد مباشر</a>
                  <a class="font-semibold text-sm">مزاد مباشر</a>
                  <a class="font-semibold text-sm">مزاد مباشر</a>
                  <a class="font-semibold text-sm">مزاد مباشر</a>
                  <a class="font-semibold text-sm">مزاد مباشر</a>
                </div>
              </div>

            </div>
            <div class="md:w-3/4 flex">
              <input
                type="text"
                class="w-full bg-search text-xs font-semibold pr-2 py-3"
                placeholder="ابحث هنا"
              />
              <i
                class="fa-solid text-white fa-magnifying-glass bg-main-color pt-3 rounded-l px-5"
              ></i>
            </div>
          </div>
        </div>
      </header>

      <!--End Header-->
      <!--Start Navbar-->
      <div class="navbar text-white bg-gradient">
        <div class="flex flex-col md:flex-row justify-between py-5 px-24">
          <ul
            class="flex justify-center md:justify-between gap-2 w-full md:w-4/12 text-sm font-extralight"
          >
            <li>الرئيسية</li>
            <li>التصنيفات</li>
            <li>مشترياتي</li>
            <li>حسابي</li>
          </ul>
          <div
            class="flex w-full md:w-1/4 justify-center md:justify-end gap-4 mt-5 md:mt-0"
          >
            <div
              class="icons w-1/3 md:w-2/5 justify-around text-xl ml-2 items-center flex gap-2"
            >
              <img src="images/price_change_black_24dp.svg" alt="" />
              <i class="fa-regular fa-bell"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
            <div
              class="flex items-center gap-x-1 text-white px-3 bg-gold rounded-md"
            >
              <p>عربية</p>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--End Navbar-->
    <!--Start Main-->
    <div class="container mx-auto mt-10">
      <div class="flex flex-col md:flex-row gap-3 mx-2 md:mx-10 lg:mx-24">
        <div
          class="w-full md:w-1/12 flex flex-row md:flex-col justify-center items-center gap-1 pr-4 md:items-start md:justify-start"
        >
          <div class="md:hidden px-2 bg-white shadow-xl rounded">
            <i class="fa-solid fa-chevron-right md:hidden py-2"></i>
          </div>
          <div
            class="hidden md:flex md:justify-center px-2 bg-white shadow-xl rounded"
          >
            <i class="fa-solid fa-chevron-up py-2"></i>
          </div>
          <img
            src="images/car.webp"
            class="sm:w-auto md:w-11/12 h-14 rounded-md mb-2 sm:mb-0"
            alt=""
          />

          <img
            src="images/car.webp"
            class="sm:w-auto md:w-11/12 h-14 rounded-md mb-2 sm:mb-0"
            alt=""
          />
          <img
            src="images/car.webp"
            class="sm:w-auto md:w-11/12 h-14 rounded-md mb-2 sm:mb-0"
            alt=""
          />
          <img
            src="images/car.webp"
            class="sm:w-auto md:w-11/12 h-14 rounded-md mb-2 sm:mb-0 hidden md:block"
            alt=""
          />
          <img
            src="images/car.webp"
            class="sm:w-auto md:w-11/12 h-14 rounded-md mb-2 sm:mb-0 hidden md:block"
            alt=""
          />
          <div class="md:hidden bg-white shadow-xl rounded px-2">
            <i class="fa-solid fa-chevron-left py-2"></i>
          </div>
          <div
            class="md:justify-center hidden md:flex py-2 bg-white shadow-xl rounded"
          >
            <i class="fa-solid fa-chevron-down px-2"></i>
          </div>
        </div>
        <div class="w-full md:w-8/12">
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
                <div class="flex justify-start gap-x-0.5 items-start w-4/5">
                  <p class="w-14 h-8 bg-white rounded-r"></p>
                  <p
                    class="bg-icon h-8 flex text-xs py-2 px-3 gap-x-5 rounded-l items-center"
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
                </div>
                <div
                  class="flex justify-between gap-2 flex-col lg:flex-row w-1/9 align-middle"
                >
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
                class="fa-solid shadow-md fa-heart w-7 text-text h-7 absolute rounded-full flex justify-center items-center bg-white"
              ></i>
              <div class="flex flex-col justify-between">
                <p class="text-lg font-black seller-name">اسم البائِع</p>
                <p class="text-xs seller-name">0122445577+</p>
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
              <h2 class="text-xl font-extrabold mb-2">
                شراء مجموعة من السيارات من موديلات 1990
              </h2>
              <p class="text-xs font-light">code 1234</p>
            </div>
            <div
              class="flex lg:justify-between items-center pt-2 pr-4 flex-wrap sm:justify-center gap-4"
            >
              <div class="flex justify-between items-center gap-x-2 flex-wrap">
                <p class="px-3 py-2 bg-search text-Cmain rounded-md">10020+</p>
                <p class="px-3 py-2 bg-search text-Cmain rounded-md">10020+</p>
                <p class="px-3 py-2 bg-search text-Cmain rounded-md">10020+</p>
              </div>
              <div class="text-center " >
                <input
                  type="text"
                  class="border px-2 py-2 w-60"
                  placeholder="اكتب المبلغ"
                />
                <button class="bg-gradient px-8 py-2 text-white ">تأكيد</button>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-md drop-shadow-2xl px-5 py-3 mt-10">
            <h5 class="text-xl font-black mb-2">ارسال رسالة الي البائِع</h5>
            <p class="text-sm">
              يمكنك في وقت البث المباشر ارسال رسالة الي البائِع للاستفسار
            </p>
            <div class="flex items-center mt-5 gap-x-2">
              <input
                type="text"
                class="border bg-text text-black w-11/12 rounded-2xl px-2 py-1"
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
              <p><i class="fa-solid fa-globe"></i> البيع لاعلى سعر</p>
              <p class="text-orange-400">
                <i class="fa-solid fa-microphone"></i> صوت
              </p>
            </div>
            <p class="py-2">
              <i class="fa-brands fa-windows"></i> منتجات متعددة
            </p>

            <hr class="py-2" />
            <div>
              <h1 class="font-bold text-xl py-2">وصف</h1>
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
              <h1 class="font-bold text-xl py-2">سياسة الاسترجاع والاستبدال</h1>
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
        <div class="w-full md:w-3/12">
          <div class="py-2 bg-white rounded-md drop-shadow-2xl px-2">
            <div
              class="flex justify-between bg-neutral-700 p-3 text-white rounded-md"
            >
              <p class="text-xs">تاريخ البث</p>
              <p class="text-xs">22-1-2022</p>
            </div>
            <div
              class="flex justify-center text-white items-center gap-x-1 pt-3 pb-2" 
            >
              <div class="w-1/2 h-20 bg-sec text-center py-1 rounded-md">
                <p class="text-xs">القيمة المالية للمزاد</p>
                <p class="text-lg font-black">$5000</p>
                <div
                  class="flex rounded-lg shadow-md w-10/12 mt-4 p-0.5 justify-start items-center mx-auto text-sec bg-white"
                >
                  <img
                    src="images/men.webp"
                    class="w-6 h-6 rounded-full"
                    alt=""
                  />
                  <p class="text-xs font-black">احمد الرائد</p>
                </div>
              </div>
              <div
                class="w-1/2 h-20 text-center text-sec bg-Csec py-1 rounded-md"
              >
                <p class="text-xs">القيمة المالية بعد الضريبة</p>
                <p class="text-xl pt-1 font-black">$5050</p>
              </div>
            </div>
          </div>
          <div class="mt-6 bg-white rounded-md drop-shadow-2xl pt-3 px-3">
            <h5 class="font-extrabold pr-2">المتنافسون</h5>
            <div class="flex py-1 my-1 items-center justify-between">
              <div class="text-start flex justify-center">
                <img
                  class="w-11 h-11 rounded-full"
                  src="images/men.webp"
                  alt=""
                />
                <div class="flex pr-2 items-start justify-between flex-col">
                  <p class="font-bold text-sm">اسم المزايد</p>
                  <p class="text-xs font-thin">11.59.21</p>
                </div>
              </div>
              <p
                class="text-gold font-black text-lg px-3 py-1 rounded-md bg-gold-lite"
              >
                20+
              </p>
            </div>
            <div class="flex py-1 my-1 items-center justify-between">
              <div class="text-start flex justify-center">
                <img
                  class="w-11 h-11 rounded-full"
                  src="images/men.webp"
                  alt=""
                />
                <div class="flex pr-2 items-start justify-between flex-col">
                  <p class="font-bold text-sm">اسم المزايد</p>
                  <p class="text-xs font-thin">11.59.21</p>
                </div>
              </div>
              <p
                class="text-gold font-black text-lg px-3 py-1 rounded-md bg-gold-lite"
              >
                20+
              </p>
            </div>
            <div class="flex py-1 my-1 items-center justify-between">
              <div class="text-start flex justify-center">
                <img
                  class="w-11 h-11 rounded-full"
                  src="images/men.webp"
                  alt=""
                />
                <div class="flex pr-2 items-start justify-between flex-col">
                  <p class="font-bold text-sm">اسم المزايد</p>
                  <p class="text-xs font-thin">11.59.21</p>
                </div>
              </div>
              <p
                class="text-gold font-black text-lg px-3 py-1 rounded-md bg-gold-lite"
              >
                20+
              </p>
            </div>
            <div class="flex py-1 my-1 items-center justify-between">
              <div class="text-start flex justify-center">
                <img
                  class="w-11 h-11 rounded-full"
                  src="images/men.webp"
                  alt=""
                />
                <div class="flex pr-2 items-start justify-between flex-col">
                  <p class="font-bold text-sm">اسم المزايد</p>
                  <p class="text-xs font-thin">11.59.21</p>
                </div>
              </div>
              <p
                class="text-gold font-black text-lg px-3 py-1 rounded-md bg-gold-lite"
              >
                20+
              </p>
            </div>
            <div class="flex py-1 my-1 items-center justify-between">
              <div class="text-start flex justify-center">
                <img
                  class="w-11 h-11 rounded-full"
                  src="images/men.webp"
                  alt=""
                />
                <div class="flex pr-2 items-start justify-between flex-col">
                  <p class="font-bold text-sm">اسم المزايد</p>
                  <p class="text-xs font-thin">11.59.21</p>
                </div>
              </div>
              <p
                class="text-gold font-black text-lg px-3 py-1 rounded-md bg-gold-lite"
              >
                20+
              </p>
            </div>
          </div>
          <div class="mt-6 bg-white rounded-md drop-shadow-2xl px-2 py-0.5">
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
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Tajawal", sans-serif;
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
  --search: rgb(209, 5, 83, 10%);
  --seller: #44215d;
  --drop:#FFF4E8;
}
.flex {
  display: flex !important;
}
.seller-name {
  color: var(--seller);
}
.bg-main-color {
  background-color: var(--main-color);
}
.bg-drop {
  background-color: var(--drop);
}

.text-Cmain {
  color: var(--main-color);
}

.bg-gradient {
  background-image: var(--background-gradient);
}
.bg-search {
  background-color: var(--search);
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
.select-wrapper {
  position: relative;
  display: inline-block;
}

.select-wrapper i {
  position: absolute;
  right: 6rem; /* Adjust the value for positioning the icon */
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  color: var(--main-color);
}

.select-wrapper select {
  appearance: none;
}

*:focus {
  outline: none;
}
option {
  font-weight: 800;
  box-shadow: 0px;
}

.dropbtn {
  background-color: #3498db;
  color: var(--drop);
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover,
.dropbtn:focus {
  background-color: var(--drop);
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--drop);
  min-width: 148px;
  box-shadow: 0px 8px 16px 0px var(--drop);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */


/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  display: block;
}
</style>
