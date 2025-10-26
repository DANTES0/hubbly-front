<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    disabled?: boolean
    placeholder?: string
  }>(),
  {
    disabled: false,
    placeholder: 'Введите название',
  },
)

const model = defineModel<string>({ default: '' })
</script>

<template>
  <v-textarea
    color="#14213d"
    variant="outlined"
    :label="props.label"
    :placeholder="props.placeholder"
    v-model="model"
    hide-details
    min-width="300"
    density="compact"
    :disabled="props.disabled"
  />
</template>
