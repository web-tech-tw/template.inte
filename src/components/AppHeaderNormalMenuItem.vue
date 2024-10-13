<template>
  <button
    aria-expanded="false"
    class="text-base font-medium text-gray-500 hover:text-gray-900"
    type="button"
  >
    {{ props.name }}
  </button>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
