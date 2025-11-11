<template>
  <nav class="md:flex space-x-10 hidden">
    <div
      v-for="(item, index) in menuItems"
      :key="index"
    >
      <app-header-menu-dropdown
        v-if="item.type === 'dropdown'"
        :name="item.name"
        :children="item.children"
        variant="normal"
      />
      <app-header-menu-item
        v-else
        :name="item.name"
        variant="normal"
        @click="onClickItem(item)"
      />
    </div>
    <app-header-menu-sara v-if="isSaraEnabled" variant="normal" />
  </nav>
</template>

<script setup lang="ts">
import {inject, type Ref} from "vue";

import AppHeaderMenuItem from "./AppHeaderMenuItem.vue";
import AppHeaderMenuDropdown from "./AppHeaderMenuDropdown.vue";
import AppHeaderMenuSara from "./AppHeaderMenuSara.vue";

import {
  isSaraEnabled,
  menuItems,
  type MenuFunctionItem,
} from "./AppHeaderMenuData";

const parentMenuState = inject<Ref<boolean>>("parent-menu-state")!;

const onClickItem = (item: MenuFunctionItem): void => {
  parentMenuState.value = false;
  item.onClick();
};
</script>
