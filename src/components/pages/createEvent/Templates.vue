<script setup lang="ts">
const tempLabels = [
  'Шаблоны письма при регистрации',
  'Шаблон письма об успешной регистрации',
  'Шаблон письма отклонения участия',
  'Шаблон бейджика участника',
  'Шаблон диплома участника',
]
</script>

<template>
  <v-card style="height: fit-content" color="#EFF6FF" elevation="2" class="px-6 py-6 mt-8 mb-10">
    <v-row>
      <v-col cols="12">
        <div class="d-flex flex-column ga-6">
          <div class="d-flex flex-column" v-for="(item, index) in tempLabels" :key="index">
            <h4 class="mb-4" style="font-size: 18px">{{ item }}</h4>
            <v-file-input :label="item" variant="outlined" hide-details></v-file-input>
            <div class="d-flex align-center">
              <v-checkbox label="Использовать по умолчанию?" hide-details color="#fca311" />
              <v-btn class="btn-common text-none ml-auto" size="small">Просмотр</v-btn>
            </div>
            <v-divider class="mt-6" :thickness="2" style="opacity: 0.2" color="#fca311" />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style lang="scss" scoped></style>
