<template>
    <app-header-normal-menu-item name="回首頁" @click="handleClick" />
</template>

<script setup>
import AppHeaderNormalMenuItem from "./AppHeaderNormalMenuItem.vue";

const homeInteHost = import.meta.env.VITE_HOME_INTE_HOST;

const handleClick = () => {
    location.assign(homeInteHost);
};
</script>
