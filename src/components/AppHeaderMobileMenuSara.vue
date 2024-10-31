<template>
  <app-header-mobile-menu-item
    v-if="profile === null"
    name="登入"
    icon="ArrowRightOnRectangleIcon"
    @click="handleClick"
  />
  <app-header-mobile-menu-item
    v-else
    :name="nickname"
    icon="UserIcon"
    @click="handleClick"
  />
</template>

<script setup>
import { computed } from "vue";

import AppHeaderMobileMenuItem from "./AppHeaderMobileMenuItem.vue";

import { onClickSara } from "./AppHeaderMenuData.js";

import { useProfile } from "../plugins/profile.js";

const profile = useProfile();

const nickname = computed(() => {
    const { nickname } = profile;
    return nickname;
})

const handleClick = () => {
  onClickSara(profile);
};
</script>
