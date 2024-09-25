<template>
    <app-header-mobile-menu-item name="回首頁" icon="HomeIcon" @click="handleClick" />
</template>

<script setup>
import AppHeaderMobileMenuItem from "./AppHeaderMobileMenuItem.vue";

const homeInteHost = import.meta.env.VITE_HOME_INTE_HOST;

const handleClick = () => {
    location.assign(homeInteHost);
};
</script>
