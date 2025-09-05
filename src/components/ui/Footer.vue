<script setup lang="ts"></script>

<template>
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
</template>

<style scoped lang="scss"></style>
