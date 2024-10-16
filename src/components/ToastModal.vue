<template>
  <button
    v-show="model"
    type="button"
    class="fixed right-2 lg:right-24 top-24 z-50 rounded-md px-4 py-2 text-white transition bg-amber-500 hover:bg-amber-600 animate-fade"
    @click="handleClickClose"
  >
    <div class="flex items-center space-x-2">
      <span>
        <information-circle-icon class="h-5 w-5" />
      </span>
      <span class="font-bold">
        {{ model }}
      </span>
    </div>
  </button>
</template>

<script setup>
import { watch } from "vue";

import {
  InformationCircleIcon,
} from "@heroicons/vue/24/solid";

let timer;

const model = defineModel({
  type: String,
});

const handleClickClose = () => {
  if (timer) {
    clearTimeout(timer);
  }
  model.value = "";
}

watch(model, () => {
  if (!model.value) return;
  timer = setTimeout(handleClickClose, 3000);
});
</script>
