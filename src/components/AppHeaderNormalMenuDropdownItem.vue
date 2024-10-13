<template>
  <div class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
    <dynamic-hero-icon
      :name="props.icon"
      class="rounded-full w-6 h-6"
    />
    <div class="ml-4">
      <p class="text-base font-medium text-gray-900">
        {{ props.name }}
      </p>
      <p class="mt-1 text-sm text-gray-500">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import DynamicHeroIcon from "./DynamicHeroIcon.vue"

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  }
});
</script>
