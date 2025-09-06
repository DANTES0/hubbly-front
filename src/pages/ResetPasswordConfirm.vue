<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/image/logo.jpg'
import { Pages } from '@/enums/pages'

const visiblePassword = ref(false)
</script>

<template>
  <v-container>
    <v-card
      height="450px"
      width="550px"
      class="ml-auto mr-auto py-4 px-4 pb-16"
      style="height: fit-content"
      color="#F5F9FF"
      elevation="2"
    >
      <div class="d-flex align-center flex-column">
        <v-img :src="logo" width="200" aspect-ratio="1/1" />
        <h2 class="mt-2 mb-8">Восстановить пароль</h2>
        <v-text-field
          color="#14213d"
          variant="outlined"
          label="Электронная почта"
          placeholder="example@email.com"
          min-width="300"
          density="compact"
          type="email"
          :disabled="true"
        />
        <v-text-field
          color="#14213d"
          variant="outlined"
          min-width="300"
          label="Пароль"
          :type="!visiblePassword ? 'password' : 'text'"
          density="compact"
          placeholder="Пароль"
          :append-inner-icon="!visiblePassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          @click:append-inner="visiblePassword = !visiblePassword"
        />
        <v-text-field
          color="#14213d"
          variant="outlined"
          min-width="300"
          label="Введите пароль повторно"
          :type="!visiblePassword ? 'password' : 'text'"
          density="compact"
          placeholder="Пароль"
          :append-inner-icon="!visiblePassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          @click:append-inner="visiblePassword = !visiblePassword"
        />
        <v-btn class="btn-common text-none mt-4" min-width="120px" rounded="xl">Восстановить</v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<style lang="sass"></style>
