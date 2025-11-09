<template>
  <UIcon
    :name="props.name"
    :class="props.class"
  />
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: false,
    default: () => "",
  },
});
</script>
