<script setup lang="ts">
import type { FieldType } from '@/types/RgistrationForm/Form'

const props = withDefaults(
  defineProps<{
    label: string
    disabled?: boolean
    type?: FieldType
  }>(),
  {
    disabled: false,
    type: 'text',
    mask: undefined,
  },
)

const model = defineModel<boolean>({ default: false })
</script>

<template>
  <v-checkbox
    color="#fca311"
    variant="outlined"
    :label="props.label"
    v-model="model"
    :type="type"
    hide-details
    :disabled="props.disabled"
  />
</template>
