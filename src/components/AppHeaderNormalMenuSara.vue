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

import { useProfile } from "../plugins/profile.js";

const saraInteHost = import.meta.env.VITE_SARA_INTE_HOST;

const profile = useProfile();

const nickname = computed(() => {
    const { nickname } = profile;
    return nickname;
})

const handleClick = () => {
    location.assign(saraInteHost);
}
</script>
