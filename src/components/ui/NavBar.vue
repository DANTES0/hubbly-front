<script setup lang="ts">
import { Pages } from '@/enums/pages'

defineProps<{
  theme: string
  onClick: () => void
}>()
</script>

<template>
  <v-app-bar elevation="0" class="px-3 bg-app-bar">
    <v-spacer></v-spacer>
    <div class="d-flex align-center" style="gap: 12px">
      <v-btn
        variant="outlined"
        rounded="xl"
        size="small"
        class="text-none"
        :ripple="{ class: `ripple-yellow` }"
        >Инструкция</v-btn
      >
      <v-btn
        variant="outlined"
        rounded="xl"
        size="small"
        class="text-none"
        :ripple="{ class: `ripple-yellow` }"
        :to="Pages.Login.StaticPath"
        >Войти</v-btn
      >
      <v-btn
        variant="outlined"
        rounded="xl"
        size="small"
        class="text-none"
        :ripple="{ class: `ripple-yellow` }"
        :to="Pages.Registration.StaticPath"
        >Зарегистрироваться</v-btn
      >
      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        text="Toggle Theme"
        slim
        @click="onClick"
      ></v-btn>
    </div>
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
