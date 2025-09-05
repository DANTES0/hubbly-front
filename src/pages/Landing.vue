<script setup lang="ts">
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { mainPageDescriptionCard } from '@/utils/mainPageDescriptionCard'
import { progressText } from '@/utils/mainPageWords'

const { isLgAndUp } = useBreakpoints()
</script>

<template>
  <v-container class="d-flex flex-column" style="justify-content: center">
    <v-row
      v-if="isLgAndUp"
      align="center"
      justify="center"
      class="main-title"
      :class="{ 'ml-auto': isLgAndUp, 'mr-auto': isLgAndUp }"
      style="max-width: 1444px"
    >
      <v-col cols="2">
        <div style="background-color: #fca311; width: 180px; height: 200px"></div>
      </v-col>
      <v-col cols="10">
        <div class="d-flex flex-column" :class="{ 'ml-12': isLgAndUp }">
          <h1 class="ml-auto" style="color: #fca311">Hubbly</h1>
          <h1>Все мероприятия</h1>
          <h1>Под твоим</h1>
          <h1 class="ml-auto">контролем</h1>
        </div>
      </v-col>
    </v-row>
    <v-row v-else align="center" justify="center"
      ><div class="d-flex flex-column align-center" style="font-size: 36px">
        <div style="background-color: #fca311; width: 180px; height: 200px" />
        <h1 style="color: #fca311">Hubbly</h1>
        <h1>Все мероприятия</h1>
        <h1>Под твоим</h1>
        <h1>контролем</h1>
      </div>
    </v-row>
    <v-btn width="250" class="mx-auto text-none main-page-button" color="#fca311" rounded="lg"
      >Стать организатором</v-btn
    >

    <div
      class="d-flex justify-space-between align-center"
      style="margin-top: 120px; color: #14213d"
    >
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="3"
          v-for="(value, index) in progressText"
          :key="index"
          class="text-center mt-md-12 mt-sm-12 mt-xs-12"
          style="line-height: 0.8"
        >
          <h1 style="font-weight: 900; font-size: 56px">{{ value.title }}+</h1>
          <h2 style="font-size: 36px">{{ value.text }}</h2>
        </v-col>
      </v-row>
    </div>
    <v-divider :thickness="3" style="margin-top: 80px; opacity: 1" color="#fca311"></v-divider>
    <v-row style="margin-top: 100px; --v-row-gap: 36px" justify="center">
      <v-col
        cols="12"
        md="6"
        lg="4"
        sm="12"
        v-for="(value, index) in mainPageDescriptionCard"
        :key="index"
      >
        <v-card
          max-width="350px"
          min-height="390px"
          color="#F5F9FF"
          style="box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.15)"
          class="ml-auto mr-auto"
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
</template>

<style scoped lang="scss">
.main-title {
  font-size: 40px;
  text-transform: uppercase;
  line-height: 1;
  color: #14213d;
  font-weight: 700;
  margin-top: 80px;
}
.fontLg {
  font-size: 32px;
}
</style>
