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
      class="ml-auto mr-auto py-4 px-4"
      style="height: fit-content"
      color="#F5F9FF"
      elevation="2"
    >
      <div class="d-flex align-center flex-column">
        <v-img :src="logo" width="200" aspect-ratio="1/1" />
        <h2 class="mt-2 mb-8">Добро пожаловать</h2>
        <v-text-field
          color="#14213d"
          variant="outlined"
          label="Электронная почта"
          placeholder="example@email.com"
          min-width="300"
          density="compact"
          type="email"
        />
        <v-text-field
          color="#14213d"
          variant="outlined"
          min-width="300"
          label="Пароль"
          :type="!visiblePassword ? 'password' : 'text'"
          density="compact"
          placeholder="Пароль"
          hide-details
          :append-inner-icon="!visiblePassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          @click:append-inner="visiblePassword = !visiblePassword"
        />
        <v-checkbox label="Запомнить данные" hide-details color="#fca311" min-width="320" />
        <div>
          <v-btn
            class="text-none btn-text"
            variant="plain"
            :ripple="false"
            :to="Pages.ResetPassword.StaticPath"
            >Забыли пароль?</v-btn
          >
          <v-btn
            class="text-none btn-text"
            variant="plain"
            :ripple="false"
            :to="Pages.Registration.StaticPath"
            >Зарегистрироваться</v-btn
          >
        </div>
        <v-btn class="btn-common text-none mt-4" min-width="120px" rounded="xl" :to="'/'"
          >Войти</v-btn
        >
        <div class="mt-8 text-center" style="font-weight: 300; font-size: 12px">
          Нажимая “Войти”, вы принимаете пользовательское соглашение и политику конфиденциальности
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<style lang="sass"></style>
