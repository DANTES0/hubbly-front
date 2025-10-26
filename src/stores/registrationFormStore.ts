import type { FormField } from '@/types/RgistrationForm/Form'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRegistrationFormStore = defineStore('formBuilder', () => {
  const fields = ref<FormField[]>([])

  function setFields(newFields: FormField[]) {
    fields.value = [...newFields]
  }

  function addField(field: FormField) {
    fields.value.push(field)
  }

  function updateField(id: string, updates: Partial<FormField>) {
    const field = fields.value.find((f) => f.id === id)
    if (field) Object.assign(field, updates)
  }

  function removeField(id: string) {
    fields.value = fields.value.filter((f) => f.id !== id)
  }

  return { fields, setFields, addField, updateField, removeField }
})
