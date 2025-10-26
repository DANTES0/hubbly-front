<script setup lang="ts">
import { useRegistrationFormStore } from '@/stores/registrationFormStore'
import { dataTypeComponents } from './helpers/utilityType'

const store = useRegistrationFormStore()
</script>

<template>
  <v-card style="height: fit-content" color="#F5F9FF" elevation="2" class="px-6 py-6">
    <v-card-text class="d-flex ga-6 flex-column">
      <div v-for="field in store.fields" :key="field.id">
        <component
          :is="dataTypeComponents[field.type]"
          :label="field.options.nameField"
          :type="field.type"
        />
      </div>
    </v-card-text>
  </v-card>
  <div>
    {{ store.fields }}
  </div>
</template>
