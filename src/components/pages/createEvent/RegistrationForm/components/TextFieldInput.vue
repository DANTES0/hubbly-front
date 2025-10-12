<script setup lang="ts">
const props = defineProps<{
  label?: {
    type: string
  }
  disabled?: {
    type: boolean
    default: false
  }
  placeholder?: {
    type: string
    required: false
    default: 'Введите название'
  }
}>()

const model = defineModel<string>({ default: '' })
</script>

<template>
  <v-text-field
    color="#14213d"
    variant="outlined"
    :label="props.label"
    :placeholder="props.placeholder"
    v-model="model"
    hide-details
    min-width="300"
    density="compact"
    type="email"
    :disabled="props.disabled"
  />
</template>
