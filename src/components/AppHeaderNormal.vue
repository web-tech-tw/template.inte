<template>
  <nav class="md:flex space-x-10 hidden">
    <div v-for="(item, index) in menuItems" :key="index">
      <app-header-normal-menu-dropdown :name="item.name" :children="item.children" v-if="item.type === 'dropdown'" />
      <app-header-normal-menu-item :name="item.name" @click="handleItemClick(item)" v-else />
    </div>
    <app-header-normal-menu-home v-if="isHomeEnabled" />
    <app-header-normal-menu-sara v-if="isSaraEnabled" />
  </nav>
</template>

<script setup>
import { inject } from "vue";

import AppHeaderNormalMenuItem from "./AppHeaderNormalMenuItem.vue"
import AppHeaderNormalMenuDropdown from "./AppHeaderNormalMenuDropdown.vue"
import AppHeaderNormalMenuHome from "./AppHeaderNormalMenuHome.vue"
import AppHeaderNormalMenuSara from "./AppHeaderNormalMenuSara.vue"

import {
  isHomeEnabled,
  isSaraEnabled,
  menuItems,
} from "./AppHeaderMenuData.js";

const parentMenuState = inject('parent-menu-state');

const handleItemClick = (item) => {
  parentMenuState.value = false;
  item.onClick();
}
</script>
