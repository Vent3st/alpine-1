<template>
    <div class="bg-gray-900 border-gray-800 hover:border-gray-700 p-4">
      <div class="relative">
        <img :src="image" alt="Card image" class="w-full h-56 object-cover" />
      </div>
      <h3 class="text-xl mb-2 text-white">{{ title }}</h3>
      <p class="text-gray-400">{{ description }}</p>
      <div class="flex flex-wrap gap-2 mt-4">
        <span v-for="tag in tags" :key="tag" class="bg-gray-800 text-sm px-2 py-1 rounded">
          {{ tag }}
        </span>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-6">
        <div class="text-center">
          <div class="text-xl font-bold text-blue-400">{{ accuracy }}%</div>
          <div class="text-xs text-gray-400">Accuracy</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      title: String,
      description: String,
      tags: Array,
      accuracy: Number,
    },
  };
  </script>
  