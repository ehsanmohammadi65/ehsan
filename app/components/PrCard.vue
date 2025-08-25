<template>
  <div class="bg-[#12181f] border rounded-2xl text-white  w-[8rem] h-[8rem] md:w-[20rem] md:h-[20rem]">
    <div class="img flex justify-center items-center text-center">
      <Icon :name="props.img" class="md:w-[8rem] w-[3rem] h-[3rem] md:h-[8rem] bg-[#4c97ff]" />
    </div>
    <div class="title flex-row justify-center text-center w-full">
      <h1 class="font-vazir  text-[1.3rem] md:text-[1.7rem]">{{ props.title }}</h1>
      <p class="font-vazir  text-[0.7rem] md:text-[1.7rem]">
    {{ props.des }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
let props = defineProps({
  img: { type: String, required: true },
  title: { type: String, required: true },
  des: { type: String, required: true },
});
</script>
