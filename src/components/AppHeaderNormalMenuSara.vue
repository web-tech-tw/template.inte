<template>
  <app-header-normal-menu-item
    v-if="profile === null"
    name="登入"
    @click="handleClick"
  />
  <app-header-normal-menu-item
    v-else
    :name="nickname"
    @click="handleClick"
  />
</template>

<script setup>
import { computed } from "vue";

import AppHeaderNormalMenuItem from "./AppHeaderNormalMenuItem.vue";

import { onClickSara } from "./AppHeaderMenuData.js";

import { useProfile } from "../plugins/profile.js";

const profile = useProfile();

const nickname = computed(() => {
    const { nickname } = profile;
    return nickname;
});

const handleClick = () => {
  onClickSara(profile);
};
</script>
