<script setup lang="ts">
import photo from '@/assets/image/photo.jpg'

defineProps<{
  title: string
  date: string
  time: string
  place: string
  status: string
  numParticipants: number
}>()
</script>

<template>
  <v-col cols="4">
    <v-card>
      <v-img height="160px" :src="photo" cover />
      <v-card-text class="d-flex flex-column ga-3">
        <h2>{{ title }}</h2>
        <div class="d-flex ga-4">
          <div>Дата проведения:</div>
          <div>{{ date }}</div>
        </div>
        <div class="d-flex ga-4">
          <div>Время проведения:</div>
          <div>{{ time }}</div>
        </div>
        <div>Место проведения:</div>
        <h3>{{ place }}</h3>
        <v-chip color="success" class="chips">{{ status }}</v-chip>
        <div class="d-flex justify-space-between align-center mt-6">
          <div class="d-flex ga-4 align-end">
            <v-icon size="large" icon="mdi-account-group" />
            <div>{{ numParticipants }}</div>
          </div>
          <v-btn class="btn-common text-none" rounded="xl">Открыть</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<style lang="scss"></style>
