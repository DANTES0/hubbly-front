<script setup lang="ts">
import { ref } from 'vue'
import { progressText } from './utils/mainPageWords'
import { mainPageDescriptionCard } from './utils/mainPageDescriptionCard'

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
          <v-btn
            :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            text="Toggle Theme"
            slim
            @click="onClick"
          ></v-btn>
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
              <div style="background-color: #fca311; width: 180px; height: 200px"></div>
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

          <div
            class="d-flex justify-space-between align-center"
            style="margin-top: 120px; color: #14213d"
          >
            <div
              v-for="(value, index) in progressText"
              :key="index"
              style="text-align: center; line-height: 0.8"
            >
              <h1 style="font-weight: 900; font-size: 56px">{{ value.title }}+</h1>
              <h2 style="font-size: 36px">{{ value.text }}</h2>
            </div>
          </div>
          <v-divider
            :thickness="3"
            style="margin-top: 80px; opacity: 1"
            color="#fca311"
          ></v-divider>
          <v-row style="margin-top: 100px; --v-row-gap: 36px">
            <v-col cols="4" v-for="(value, index) in mainPageDescriptionCard" :key="index">
              <v-card
                max-width="350px"
                min-height="390px"
                color="#F5F9FF"
                style="box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.15)"
              >
                <v-card-title class="mt-4">
                  <div
                    style="
                      width: 80px;
                      height: 80px;
                      border-radius: 100%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                    :style="{ backgroundColor: value.colorCircle }"
                  >
                    <v-icon size="48" :color="value.colorIcon">{{ value.icon }}</v-icon>
                  </div>
                  <div class="mt-4" style="font-size: 24px; text-align: center">
                    {{ value.title }}
                  </div></v-card-title
                >
                <v-card-item class="" style="font-weight: 500; font-size: 18px">{{
                  value.text
                }}</v-card-item>
              </v-card>
            </v-col>
          </v-row>
          <v-divider
            :thickness="3"
            style="margin-top: 80px; opacity: 1; margin-bottom: 100px"
            color="#fca311"
          ></v-divider>
        </v-container>
      </v-main>
      <v-footer color="transparent" style="border-top: 2px solid #fca311">
        <div class="d-flex align-center justify-space-between" style="width: 100%">
          <div class="d-flex align-center">
            <v-btn class="text-none opacity-100" :ripple="false" variant="text"
              >Конфидициальность</v-btn
            >
            <v-btn class="text-none opacity-100" :ripple="false" variant="text"
              >Пользовательское соглашение</v-btn
            >
          </div>
          <div>Copyright ©{{ new Date().getFullYear() }} — <strong>Hubbly</strong></div>
        </div>
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<style scoped>
.appbar {
  background-color: transparent;
}
</style>
