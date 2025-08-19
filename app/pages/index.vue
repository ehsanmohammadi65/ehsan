<template>
  <div class="w-full min-h-[100dvh] flex flex-col" dir="rtl">
    <main id="fullpage">
      <header
        class="grid section grid-cols-3 md:justify-center md:items-center md:px-3 md:ps-14 md:py-[10rem] animate-fade-in w-full"
      >
        <PrCard
          v-for="i in bannerH"
          :img="i.img"
          :title="i.title"
          :des="i.des"
          @key="i.title"
        />
      </header>

        <div
          class="w-full flex justify-center text-center self-center flex-grow pb-[4rem] animate-fade-in"
        >
          <div class="w-[100%] md:w-[95%] text-white">
            <NuxtImg
              src="/img/vec.png"
              alt="person"
              loading="lazy"
              class="md:w-[30rem] h-[27rem] md:ms-[7rem]"
            />
          </div>
          <div
            dir="rtl"
            class="flex-col text-start justify-start items-start w-full text-white"
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
      <!--example-->
      <section aria-labelledby="latest-courses-heading w-full " class="section">
        <div
          class="w-full flex-cols justify-start text-start self-start pb-[4rem] animate-fade-in md:mx-[7rem]"
        >
          <!--title-->
          <div class="w-full">
            <h1 class="text-bold text-[3rem] text-white">نمونه کارها</h1>
          </div>
          <!--button box-->
          <div class="grid grid-cols-3 md:w-[20%] text-white">
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
        </div>
        <!--cardbox-->
        <div class="grid grid-cols-3 w-full md:ps-14">
          <ExamCard
            v-for="d in dataExam"
            :img="d.img"
            :alt="d.alt"
            :title="d.title"
            :des="d.des"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useHead, ref, onMounted } from "vue";
import { bannerHead } from "~/types/bannerhead";
const dataExam = ref([
  {
    img: "/img/ex1.png",
    alt: "siname.ir",
    title: "وب سایت سینا می",
    des: "وب سایت آموزشی پزشکی",
  },
  {
    img: "/img/2.jpg",
    alt: "VideoDownloader",
    title: "وب سایت ویدئو دانلودر",
    des: "وب سایت دانلود ویدئو از شبکه های اجتماعی ",
  },
  {
    img: "/img/xp.png",
    alt: "Xprogramer",
    title: "وب سایت ایکس پروگرمر",
    des: "یک وب سایت حرفه ای برای معرفی اشخاص ",
  },
]);
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
