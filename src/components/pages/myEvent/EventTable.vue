<script setup lang="ts">
import { myEventCard } from '@/utils/myEventCard'
import { computed, ref } from 'vue'

const selected = ref<number[]>([])

const allSelected = computed({
  get: () => selected.value.length === myEventCard.length && myEventCard.length > 0,
  set: (value) => {
    selected.value = value ? myEventCard.map((_, index) => index) : []
  },
})
</script>

<template>
  <div class="table-wrapper">
    <v-table striped="even" color="#F5F9FF" class="table table-bg">
      <thead class="table-head">
        <tr>
          <th class="text-left">
            <v-checkbox v-model="allSelected" hide-details color="#fca311" />
          </th>
          <th class="text-left">Название</th>
          <th class="text-left">Дата</th>
          <th class="text-left">Место проведения</th>
          <th class="text-left">Статус</th>
          <th class="text-left">Количество регистарций</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in myEventCard" :key="index">
          <td><v-checkbox :value="index" v-model="selected" hide-details color="#fca311" /></td>
          <td>{{ item.title }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.place }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.numParticipants }}</td>
          <td>
            <v-btn icon="mdi-dots-vertical" variant="plain" class="btn-text" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <v-divider :thickness="1" class="mt-4 opacity-100" color="#fca311"></v-divider>
  <div class="d-flex ga-8 mt-4" style="font-family: Roboto; font-size: 18px">
    <div>Всего: {{ myEventCard.length }}</div>
    <div v-show="selected.length">
      <div>Выделено: {{ selected.length }}</div>
    </div>
  </div>
</template>

<style lang="scss"></style>
