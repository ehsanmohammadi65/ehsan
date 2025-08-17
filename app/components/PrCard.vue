<template>
  <div class="bg-[#12181f] border rounded-2xl w-[20rem] h-[20rem]">
    <div class="img flex justify-center items-center text-center">
      <Icon :name="props.img" class="w-[8rem] h-[8rem] bg-[#4c97ff]" />
    </div>
    <div class="title flex-row justify-center text-center w-full">
      <h1 class="font-vazir  text-[1.7rem]">{{ props.title }}</h1>
      <p>
    {{ props.des }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
let props = defineProps({
  img: { type: String, required: true },
  title: { type: String, required: true },
  des: { type: String, required: true },
});
</script>
