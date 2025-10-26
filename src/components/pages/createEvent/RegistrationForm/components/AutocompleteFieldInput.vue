<script setup lang="ts">
import type { FieldType } from '@/types/RgistrationForm/Form'

const props = withDefaults(
  defineProps<{
    label: string
    disabled?: boolean
    placeholder?: string
    type?: FieldType
    items: string[]
  }>(),
  {
    disabled: false,
    placeholder: 'Введите название',
    type: 'text',
    items: undefined,
  },
)

const model = defineModel<string>({ default: null })
</script>

<template>
  <v-autocomplete
    color="#14213d"
    variant="outlined"
    :label="props.label"
    :placeholder="props.placeholder"
    v-model="model"
    min-width="300"
    density="compact"
    :type="type"
    :disabled="props.disabled"
    :items="props.items"
  />
</template>
