<template>
  <component
    :is="iconInstance"
    v-bind="props"
  />
</template>

<script setup>
import * as allIcons from "@heroicons/vue/24/solid";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: false,
    default: () => ""
  },
});

const iconInstance = allIcons[props.name];
</script>