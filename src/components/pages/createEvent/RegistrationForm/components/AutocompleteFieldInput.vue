<script setup lang="ts">
import type { FieldType } from '@/types/RgistrationForm/Form'
import type { AutocompleteFieldType } from '../helpers/autocompleteType'

const props = withDefaults(
  defineProps<{
    label: string
    disabled?: boolean
    placeholder?: string
    type?: FieldType
    items: AutocompleteFieldType[]
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
    item-title="value"
    item-value="value"
  />
</template>
