<script setup lang="ts">
import { ref } from 'vue'
import TextFieldInput from './TextFieldInput.vue'

const model = defineModel<boolean>({ default: false })

const props = withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'Название поля',
  },
)

const inputModel = ref('')

const emits = defineEmits(['updateFieldTemplate'])

function handleButtonClick() {
  emits('updateFieldTemplate', inputModel.value)
  inputModel.value = ''
  model.value = false
}
</script>

<template>
  <v-dialog v-model="model" max-width="900px">
    <v-card>
      <v-card-title>Изменение поля</v-card-title>
      <v-card-text>
        <TextFieldInput v-model="inputModel" :label="props.label" />
      </v-card-text>

      <v-card-actions>
        <v-btn @click="model = false" class="text-none btn-text" variant="plain">Отменить</v-btn>
        <v-btn @click="handleButtonClick" class="text-none btn-common">Сохранить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
