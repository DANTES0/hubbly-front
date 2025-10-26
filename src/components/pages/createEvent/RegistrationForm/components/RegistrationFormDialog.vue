<script setup lang="ts">
import { ref } from 'vue'
import TextFieldInput from './TextFieldInput.vue'
import type { FieldType } from '@/types/RgistrationForm/Form'

const model = defineModel<boolean>({ default: false })

const props = withDefaults(
  defineProps<{
    label?: string
    type?: FieldType
  }>(),
  {
    label: 'Название поля',
  },
)

const inputModel = ref('')

const emits = defineEmits(['updateFieldTemplate'])

const autocompleteItems = ref<{ name: string; value: string }[]>([
  { name: 'Элемент 1', value: '' },
  { name: 'Элемент 2', value: '' },
])
function autocompleteItemsAddHandle() {
  const nameField = `Элемент ${autocompleteItems.value.length + 1}`
  autocompleteItems.value.push({ name: nameField, value: '' })
}

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
        <div v-if="props.type === 'select'">
          <h4 class="mb-4">Элементы справочника</h4>
          <div
            class="d-flex"
            style="width: 100%"
            v-for="(items, index) in autocompleteItems"
            :key="index"
          >
            <TextFieldInput :label="items.name" v-model="items.value" />
            <v-btn
              icon="mdi-close"
              size="small"
              variant="text"
              class="ms-4"
              :ripple="{ class: `ripple-yellow` }"
            />
          </div>
          <v-btn
            variant="outlined"
            rounded="xl"
            size="small"
            class="text-none"
            :ripple="{ class: `ripple-yellow` }"
            prepend-icon="mdi-plus"
            @click="autocompleteItemsAddHandle()"
            >Добавить элемент</v-btn
          >
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="model = false" class="text-none btn-text" variant="plain">Отменить</v-btn>
        <v-btn @click="handleButtonClick" class="text-none btn-common">Сохранить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
