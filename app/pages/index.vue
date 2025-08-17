<template>
  <div class="w-full min-h-[100dvh] flex flex-col" dir="rtl">
    <main>
      <header
        class="grid grid-cols-3 justify-center items-center py-2 px-3 md:ps-14 md:py-[10rem] animate-fade-in w-full"
      >
        <PrCard
          v-for="i in bannerH"
          :img="i.img"
          :title="i.title"
          :des="i.des"
          @key="i.title"
        />
      </header>

      <section aria-labelledby="category-heading">
        <div
          class="w-full flex justify-center text-center self-center flex-grow pb-[4rem] animate-fade-in"
        >
          <div class="w-[100%] md:w-[95%] text-white">
            <NuxtImg
              src="/img/vec.png"
              alt="person"
              loading="lazy"
              class="w-[30rem] h-[27rem] md:ms-[7rem]"
            />
          </div>
          <div
            dir="rtl"
            class="flex-col text-start justify-start items-start w-full"
          >
            <h1 class="text-[2.7rem] font-bold md:py-[3.1rem]">درباره ما</h1>
            <p class="w-[30rem]">
              صفحه‌ی «درباره ما» (About us page) یکی از صفحات مهم در سایت است و
              به کاربر اطلاعاتی درباره برند و افراد پشت آن سایت می‌دهد. صفحه
              درباره ما در واقع یک فرصت برای معرفی شرکت، سازمان یا وب‌سایت شما
              به بازدیدکنندگان سایت است. در صفحه درباره ما می‌توانید به شرح
              خدمات، تاریخچه، مأموریت، ارزش‌ها و هدف اصلی شرکتتان پرداخته و به
              افراد نشان دهید که چرا باید با کسب و کار شما همکاری کنند یا از
              محصولات و خدمات سایت شما استفاده کنند.
            </p>
          </div>
        </div>
      </section>
<!--example-->
      <section aria-labelledby="latest-courses-heading w-full ">
        <div
          class="w-full flex-cols justify-start text-start self-start pb-[4rem] animate-fade-in md:mx-[7rem]"
        >
          <!--title-->
          <div class="w-full">
            <h1 class="text-bold text-[3rem]">نمونه کارها</h1>
          </div>
          <!--button box-->
          <div class="grid grid-cols-3 md:w-[20%]">
            <div
              class="rounded border flex text-center items-center justify-center content-center w-[5rem] h-[2rem] cursor-pointer hover:bg-[#4c97ff] hover:text-black"
            >
              ربات
            </div>
               <div
              class="rounded border flex text-center items-center justify-center content-center w-[5rem] h-[2rem] cursor-pointer hover:bg-[#4c97ff] hover:text-black"
            >
              وب سایت
            </div>
               <div
              class="rounded border flex text-center items-center justify-center content-center w-[5rem] h-[2rem] cursor-pointer hover:bg-[#4c97ff] hover:text-black"
            >
              نرم افزار
            </div>
          </div>
          <!--cardbox-->
          <div class="w-[100%] md:w-[95%] text-white mt-5 ">
                    <div>
              <NuxtImg src="/img/ex1.png" alt="siname.ir" class="w-[20rem]" />
            </div>
            <div class="bg-[#222324] w-[20rem] h-[1px] my-1"> 
            </div>
            <div class="px-[1rem]">
              <div>
  <h1 class="text-[1.5rem]">سینامی</h1>
</div>
<div>
  <p>وب سایت آموزشی پزشکی</p>
</div>
            </div>
            </div>
          
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useHead, ref } from "vue";
import { bannerHead } from "~/types/bannerhead";
let bannerH = ref<bannerHead[]>([
  {
    img: "material-symbols:captive-portal",
    title: "طراحی سایت",
    des: "طراحی انواع وب سایت حرفه ای با قیمت رقابتی و کیفیت عالی",
  },
  {
    img: "material-symbols:robot-2-outline",
    title: "طراحی ربات",
    des: "طراحی ربات تلگرام ، ربات خزنده و انواع ربات هوشمند",
  },
  {
    img: "material-symbols:computer-outline",
    title: "طراحی نرم افزار",
    des: "طراحی و اجرای انواع نرم افزار مولتی پلتفرم ",
  },
]);
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: white;
}
.my-swiper {
  padding: 10px;
}
</style>
