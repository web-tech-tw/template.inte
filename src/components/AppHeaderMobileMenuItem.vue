<template>
  <button
    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full"
    type="button"
  >
    <dynamic-hero-icon
      :name="props.icon"
      class="rounded-full w-6 h-6"
    />
    <span class="ml-3 text-base font-medium text-gray-900">{{ props.name }}</span>
  </button>
</template>

<script setup>
import DynamicHeroIcon from "./DynamicHeroIcon.vue"

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>
