<script setup lang="ts">
import type { FieldType } from '@/types/RgistrationForm/Form'
import type { AutocompleteFieldType } from '../helpers/autocompleteType'

const props = withDefaults(
  defineProps<{
    label: string
    disabled?: boolean
    placeholder?: string
    type?: FieldType
    items?: AutocompleteFieldType[]
  }>(),
  {
    disabled: false,
    type: 'text',
  },
)

const model = defineModel<string>({ default: '' })
</script>

<template>
  <v-radio-group inline v-model="model" :label="props.label" color="#fca311">
    <v-radio
      v-for="(item, index) in props.items"
      :key="index"
      :label="item.value"
      :value="item.value"
    />
  </v-radio-group>
</template>
