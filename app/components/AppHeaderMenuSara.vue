<template>
  <app-header-menu-item
    v-if="profile === null"
    :name="loginText"
    :icon="loginIcon"
    :variant="props.variant"
    @click="onClick"
  />
  <app-header-menu-item
    v-else
    :name="nickname"
    :variant="props.variant"
    @click="onClick"
  >
    <template #prepend>
      <img
        :src="identicon"
        :alt="nickname"
        :class="avatarClass"
      >
    </template>
  </app-header-menu-item>
</template>

<script setup lang="ts">
import {computed} from "vue";

import AppHeaderMenuItem from "./AppHeaderMenuItem.vue";

import {onClickSara} from "./AppHeaderMenuData";

const props = defineProps<{
  variant?: "mobile" | "normal";
}>();

const profile = useProfile();

const loginText = "登入";
const loginIcon = props.variant === "mobile" ? "ArrowRightOnRectangleIcon" : "";

const nickname = computed(() => {
  if (!profile) return "";
  return profile.nickname;
});

const identicon = computed(() => {
  if (!profile) return "";
  const {avatar_hash: avatarHash} = profile;
  return `https://api.gravatar.com/avatar/${avatarHash}?d=identicon`;
});

const avatarClass = computed(() => {
  return props.variant === "mobile" 
    ? "rounded-full w-6 h-6 mr-4" 
    : "rounded-full w-8 h-8 mr-2";
});

const onClick = (): void => {
  onClickSara(profile);
};
</script>
