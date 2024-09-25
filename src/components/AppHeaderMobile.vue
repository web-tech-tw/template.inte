<template>
  <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5">
        <div class="flex items-center justify-between" @click="handleMobileMenuCloseClick">
          <div>
            <h1 class="flex-auto text-lg font-semibold text-gray-900 sm:hidden">
              {{ titleShort }}
            </h1>
          </div>
          <div class="-mr-2">
            <button
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              type="button">
              <span class="sr-only">Close menu</span>
              <x-mark-icon class="h-6 w-6" />
            </button>
          </div>
        </div>
        <div class="mt-6">
          <nav class="grid gap-y-8">
            <div v-for="(item, index) in menuItems" :key="index">
              <app-header-mobile-menu-dropdown :name="item.name" :children="item.children" v-if="item.type === 'dropdown'" />
              <app-header-mobile-menu-item :name="item.name" :icon="item.icon" @click="handleItemClick(item)" v-else />
            </div>
            <app-header-mobile-menu-home v-if="isHomeEnabled" />
            <app-header-mobile-menu-sara v-if="isSaraEnabled" />
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, watch } from "vue";

import { XMarkIcon } from "@heroicons/vue/24/solid"

import AppHeaderMobileMenuItem from "./AppHeaderMobileMenuItem.vue"
import AppHeaderMobileMenuDropdown from "./AppHeaderMobileMenuDropdown.vue"
import AppHeaderMobileMenuHome from "./AppHeaderMobileMenuHome.vue"
import AppHeaderMobileMenuSara from "./AppHeaderMobileMenuSara.vue"

import {
  titleShort,
  isHomeEnabled,
  isSaraEnabled,
  menuItems,
} from "./AppHeaderMenuData.js";

const emit = defineEmits(["close"]);

const parentMenuState = inject('parent-menu-state')
watch(parentMenuState, (value) => {
  if (!value) {
    emit("close");
  }
});

const handleMobileMenuCloseClick = () => {
  emit("close");
}

const handleItemClick = (item) => {
  parentMenuState.value = false;
  item.onClick();
}
</script>
