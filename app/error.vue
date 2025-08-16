<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-800">404</h1>
      <p class="text-xl text-gray-600 mb-4">Page Not Found</p>
      <p class="text-gray-500 mb-8">
        The page you are looking for does not existبذیبلبی.
      </p>
      <NuxtLink
        to="/"
        class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      >
        Go to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {  useHead } from "vue";

useHead({
  title: 'Page Not Found - My App',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' } // Prevent indexing of error pages
  ]
})
</script>
