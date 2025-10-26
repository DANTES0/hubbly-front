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
  },
)

const model = defineModel<number>({ default: null })
</script>

<template>
  <v-number-input
    color="#14213d"
    variant="outlined"
    :label="props.label"
    :placeholder="props.placeholder"
    v-model="model"
    min-width="300"
    density="compact"
    :type="type"
    :disabled="props.disabled"
  />
</template>
