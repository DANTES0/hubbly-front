<script setup lang="ts">
import logo from '@/assets/image/logo.jpg'
import { Pages } from '@/enums/pages'
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
        <h2 class="mt-2 mb-8">Вы успешно подтвердили почту</h2>

        <v-btn
          class="btn-common text-none mt-4"
          min-width="120px"
          rounded="xl"
          :to="Pages.Login.StaticPath"
          >Войти</v-btn
        >
      </div>
    </v-card>
  </v-container>
</template>

<style lang="sass"></style>
