<script setup lang="ts">
import EventCard from '@/components/pages/myEvent/EventCard.vue'
import EventTable from '@/components/pages/myEvent/EventTable.vue'
import { Pages } from '@/enums/pages'
import { myEventCard } from '@/utils/myEventCard'
import { computed, ref } from 'vue'

const pages = ref(1)
const totalPages = computed(() => Math.ceil(myEventCard.length / itemsPerPage))

const itemsPerPage = 6
const paginatedEvents = computed(() => {
  const start = (pages.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return myEventCard.slice(start, end)
})

const myEventView = ref<'card' | 'table'>('card')
</script>

<template>
  <v-container>
    <h1 class="text-uppercase text-center">Мои мероприятия</h1>
    <div class="d-flex justify-space-between">
      <v-btn
        variant="outlined"
        rounded="xl"
        class="text-none"
        :to="{ name: Pages.CreateEvents.Name }"
        >Создать</v-btn
      >
      <div class="d-flex align-center">
        <div>Вид отображения</div>
        <v-item-group v-model="myEventView" mandatory>
          <v-item value="card" v-slot="{ isSelected, toggle }">
            <v-btn
              icon="mdi-view-module"
              variant="text"
              @click="toggle"
              :color="isSelected ? '#FCA311' : '#14213D'"
            />
          </v-item>
          <v-item value="table" v-slot="{ isSelected, toggle }">
            <v-btn
              icon="mdi-view-list"
              variant="text"
              @click="toggle"
              :color="isSelected ? '#FCA311' : '#14213D'"
            />
          </v-item>
        </v-item-group>
      </div>
    </div>
    <v-card style="height: fit-content" color="#EFF6FF" elevation="2" class="px-6 py-6">
      <v-row v-if="myEventView == 'card'">
        <EventCard
          v-for="(item, index) in paginatedEvents"
          :title="item.title"
          :date="item.date"
          :num-participants="item.numParticipants"
          :place="item.place"
          :status="item.status"
          :time="item.time"
          :key="index"
        />
      </v-row>

      <EventTable v-else />

      <v-pagination
        v-model="pages"
        :length="totalPages"
        rounded="circle"
        class="mt-6"
      ></v-pagination>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss"></style>
