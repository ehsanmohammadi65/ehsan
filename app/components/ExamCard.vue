<template>
  <div
    class="w-[20rem] text-white mt-5 bg-[#171817] border border-[#1e1f20] rounded"
  >
    <div>
      <NuxtImg :src="props.img" :alt="props.alt" class="w-[20rem] h-[20rem] object-contain" />
    </div>
    <div class="bg-[#222324] w-[20rem] h-[1px] my-1"></div>
    <div class="px-[1rem]">
      <div>
        <h1 class="text-[1.5rem]">{{ props.title }}</h1>
      </div>
      <div>
        <p>{{ props.des }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  img: { require: true, type: String },
  alt:{require:true,type:String},
  title: { require: true, type: String },
  des: { require: true, type: String },
});
</script>
