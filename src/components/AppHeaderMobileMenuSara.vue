<template>
  <app-header-mobile-menu-item
    v-if="loginState === null"
    name="載入中..."
    icon="ArrowPathIcon"
  />
  <app-header-mobile-menu-item
    v-else-if="loginState === false"
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
import { ref, computed } from "vue";

import AppHeaderMobileMenuItem from "./AppHeaderMobileMenuItem.vue";

import { useClient } from "../clients/sara.js";

const saraInteHost = import.meta.env.VITE_SARA_INTE_HOST;

const client = useClient();

const loginState = ref(null);

const nickname = computed(() => {
    const { profile } = loginState.value;
    return profile.nickname;
})

const handleClick = () => {
    location.assign(saraInteHost);
}

client.get("users/me").json().then((result) => {
    loginState.value = result;
}).catch((error) => {
    loginState.value = false;
    console.warn(error.message);
});
</script>