<script setup lang="ts">
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">
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
            >Войти</v-btn
          >
          <v-btn
            variant="outlined"
            rounded="xl"
            size="small"
            class="text-none"
            :ripple="{ class: `ripple-yellow` }"
            >Зарегистрироваться</v-btn
          >
          <!-- <v-btn
            :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            text="Toggle Theme"
            slim
            @click="onClick"
          ></v-btn> -->
        </div>
      </v-app-bar>
      <v-main>
        <v-container class="d-flex flex-column" style="justify-content: center">
          <v-row
            align="center"
            justify="center"
            style="
              font-size: 40px;
              text-transform: uppercase;
              line-height: 1;
              color: #14213d;
              font-weight: 700;
              margin-top: 80px;
            "
          >
            <v-col cols="2">
              <div style="background-color: red; width: 180px; height: 200px"></div>
            </v-col>
            <v-col cols="10">
              <div class="d-flex flex-column">
                <h1 style="margin-left: auto; color: #fca311">Hubbly</h1>
                <h1>Все мероприятия</h1>
                <h1>Под твоим</h1>
                <h1 style="margin-left: auto">контролем</h1>
              </div>
            </v-col>
          </v-row>
          <v-btn
            width="250"
            class="mx-auto text-none"
            style="margin-top: 128px; font-size: 18px; font-weight: 500; color: #14213d"
            color="#fca311"
            rounded="lg"
            >Стать организатором</v-btn
          >
          <!-- <v-divider
            :thickness="3"
            style="margin-top: 80px; opacity: 1"
            color="#fca311"
          ></v-divider> -->
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped>
.appbar {
  background-color: transparent;
}
</style>
