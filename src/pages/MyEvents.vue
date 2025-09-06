<script setup lang="ts"></script>

<template>
  <v-container>
    <h1 class="text-uppercase text-center">Мои мероприятия</h1>
    <div class="d-flex justify-space-between">
      <v-btn variant="outlined" rounded="xl" class="text-none">Создать</v-btn>
      <div class="d-flex align-center">
        <div>Вид отображения</div>
        <v-item-group>
          <v-item v-slot="{ isSelected, toggle }">
            <v-btn
              icon="mdi-view-module"
              variant="text"
              @click="toggle"
              :color="isSelected ? '#FCA311' : '#14213D'"
            />
          </v-item>
          <v-item v-slot="{ isSelected, toggle }">
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
  </v-container>
</template>

<style scoped lang="scss"></style>
