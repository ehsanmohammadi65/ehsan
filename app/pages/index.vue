<template>
  <div class="w-full min-h-[100dvh] flex flex-col" dir="rtl">
    <main>
      <header
        class="flex justify-center items-center py-2 px-3 md:px-0 md:py-5 animate-fade-in"
      >
        <div class="bg-[#12181f] border rounded-2xl">
          <div class="img">
            <Icon
              name="material-symbols:robot-2-outline"
              class="w-[10rem] h-[10rem]"
            />
          </div>
          <div class="title flex justify-center text-center w-full"><h1 class="font-vazir">طراحی ربات</h1></div>
        </div>
            <div class="bg-[#12181f] border rounded-2xl">
          <div class="img">
            <Icon
              name="material-symbols:captive-portal"
              class="w-[10rem] h-[10rem]"
            />
          </div>
          <div class="title flex justify-center text-center w-full"><h1 class="font-vazir">طراحی سایت</h1></div>
        </div>
              <div class="bg-[#12181f] border rounded-2xl">
          <div class="img">
            <Icon
              name="material-symbols:computer-outline-rounded"
              class="w-[10rem] h-[10rem]"
            />
          </div>
          <div class="title flex justify-center text-center w-full"><h1 class="font-vazir">طراحی سایت</h1></div>
        </div>
      </header>

      <section aria-labelledby="category-heading">
        <h1
          id="category-heading"
          class="text-white font-vazir text-[1.3rem] md:ps-5"
        >
          دسته‌بندی‌ها:
          <NuxtLink
            to="/categores/list"
            class="text-green-400 hover:underline ps-1"
            >مشاهده همه</NuxtLink
          >
        </h1>
        <div
          class="w-full flex justify-center text-center self-center flex-grow pb-[4rem] animate-fade-in"
        >
          <div class="w-[100%] md:w-[95%] text-white"></div>
        </div>
      </section>

      <section aria-labelledby="latest-courses-heading">
        <h2
          id="latest-courses-heading"
          class="text-white font-vazir text-[1.3rem] md:ps-5"
        >
          آخرین آموزش‌ها:
        </h2>
        <div
          class="w-full flex justify-center text-center self-center flex-grow pb-[4rem] animate-fade-in"
        >
          <div class="w-[100%] md:w-[95%] text-white"></div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useHead, ref } from "vue";
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
