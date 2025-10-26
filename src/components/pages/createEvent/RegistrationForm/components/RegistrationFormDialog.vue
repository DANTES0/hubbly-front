<script setup lang="ts">
import { ref, watch } from 'vue'
import TextFieldInput from './TextFieldInput.vue'
import type { FieldType, FormFieldTemplateOptions } from '@/types/RgistrationForm/Form'
import type { AutocompleteFieldType } from '../helpers/autocompleteType'

const model = defineModel<boolean>({ default: false })

const props = withDefaults(
  defineProps<{
    label?: string
    type?: FieldType
    options?: FormFieldTemplateOptions
  }>(),
  {
    label: 'Название поля',
  },
)

const inputModel = ref('')
const autocompleteItems = ref<AutocompleteFieldType[]>([])

watch(
  () => props.options,
  (newOptions) => {
    inputModel.value = newOptions?.nameField ?? ''

    if (props.type === 'select' || props.type === 'radio') {
      const items = newOptions?.autocompleteItems ?? []
      if (items.length > 0) {
        autocompleteItems.value = items.map((val, i) => ({
          name: `Элемент ${i + 1}`,
          value: String(val),
        }))
      } else {
        autocompleteItems.value = [
          { name: 'Элемент 1', value: '' },
          { name: 'Элемент 2', value: '' },
        ]
      }
    }
  },
  { immediate: true },
)

const emits = defineEmits(['updateFieldTemplate'])

function autocompleteItemsAddHandle() {
  const nameField = `Элемент ${autocompleteItems.value.length + 1}`
  autocompleteItems.value.push({ name: nameField, value: '' })
}

function deleteAutocompleteItem(index: number) {
  if (autocompleteItems.value.length <= 1) return
  autocompleteItems.value.splice(index, 1)
}

function handleButtonClick() {
  const data: FormFieldTemplateOptions = {
    nameField: inputModel.value,
    autocompleteItems: autocompleteItems.value.map((item) => item.value).filter((v) => v !== ''),
  }
  emits('updateFieldTemplate', data)
  model.value = false
}
</script>

<template>
  <v-dialog v-model="model" max-width="900px">
    <v-card>
      <v-card-title>Изменение поля</v-card-title>
      <v-card-text>
        <TextFieldInput v-model="inputModel" :label="props.label" />
        <div v-if="props.type === 'select' || props.type === 'radio'">
          <h4 class="mb-4">Элементы {{ props.type === 'select' ? 'справочника' : 'кнопки' }}</h4>
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
              @click="deleteAutocompleteItem(index)"
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
