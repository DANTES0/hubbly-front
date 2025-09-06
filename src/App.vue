<script setup lang="ts">
import { computed, ref } from 'vue'

import NavBar from './components/ui/NavBar.vue'
import Footer from './components/ui/Footer.vue'
import { useRoute } from 'vue-router'

const theme = ref('light')
const route = useRoute()
const isActiveBars = computed(() => !route.fullPath.startsWith('/permission'))
function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">
      <NavBar v-if="isActiveBars" :theme="theme" :onClick="onClick" />
      <div class="d-flex flex-column" style="min-height: 100vh">
        <v-main>
          <router-view></router-view>
        </v-main>
      </div>
      <Footer v-if="isActiveBars" />
    </v-app>
  </v-responsive>
</template>

<style scoped>
.appbar {
  background-color: transparent;
}
</style>
