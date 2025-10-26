<script setup lang="ts">
import type { FieldType } from '@/types/RgistrationForm/Form'

const props = withDefaults(
  defineProps<{
    label: string
    disabled?: boolean
    placeholder?: string
    type?: FieldType
    fieldRules?: []
  }>(),
  {
    disabled: false,
    placeholder: 'Введите название',
    type: 'text',
    mask: undefined,
  },
)
const model = defineModel<File[]>({ default: null })
</script>

<template>
  <v-file-input
    color="#14213d"
    variant="outlined"
    :label="props.label"
    :placeholder="props.placeholder"
    v-model="model"
    min-width="300"
    density="compact"
    :type="type"
    hide-details
    :disabled="props.disabled"
    multiple
  />
</template>
