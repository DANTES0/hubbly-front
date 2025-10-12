<script setup lang="ts">
import draggable from 'vuedraggable'
import { ref, type Component } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { FIELD_TEMPLATES, type FieldTemplate, type FormField } from '@/types/RgistrationForm/Form'
import TextFieldInput from './components/TextFieldInput.vue'
import RegistrationFormDialog from './components/RegistrationFormDialog.vue'

const drawer = ref(true)

const formView = ref<'base' | 'unique'>('base')
const isDialog = ref(false)

const formFields = ref<FormField[]>([])
const editingField = ref<FormField | null>(null)

const isDraggable = ref(false)

const dataTypeComponents: Record<string, Component> = {
  text: TextFieldInput,
}

function cloneField(template: FieldTemplate): FormField {
  return { ...template, id: uuidv4(), options: { nameField: '' } }
}

function onAdd(event: any) {
  console.log(formFields.value)
  const newItem = event.item?._underlying_vm_ as FormField
  if (newItem && !newItem.id) {
    formFields.value[event.newIndex] = { ...newItem, id: uuidv4() }
  }
}
</script>

<template>
  <v-card style="height: fit-content" color="#F5F9FF" elevation="2" class="px-6 py-6">
    <v-card-text :class="{ drag: isDraggable }">
      <draggable
        v-model="formFields"
        item-key="id"
        group="form"
        :animation="200"
        :empty-insert-threshold="20"
        class="form-canvas"
        @add="onAdd"
      >
        <template #item="{ element }">
          <v-card outlined class="mb-3" color="white">
            <v-card-title class="d-flex align-center">
              <v-icon size="small" class="me-2">{{ element.icon }}</v-icon>
              {{ element.label }}
            </v-card-title>
            <v-card-text
              ><component
                :is="dataTypeComponents[element.type]"
                :label="element.options.nameField || element.label"
                :disabled="true"
            /></v-card-text>
            <v-card-actions>
              <v-btn
                @click="
                  () => {
                    editingField = element
                    isDialog = true
                    console.log(editingField)
                    console.log(formFields)
                  }
                "
                icon="mdi-cog"
                size="small"
                variant="text"
              ></v-btn>
              <v-spacer />
              <v-btn icon="mdi-delete" size="small" variant="text" color="error"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </draggable>

      <v-alert v-if="!isDraggable && formFields.length == 0" type="info" variant="tonal">
        Перетащите поля из панели справа
      </v-alert>
    </v-card-text>
    <v-card-action class="px-4">
      <v-btn v-if="formFields.length" class="btn-common text-none">Сохранить шаблон</v-btn>
    </v-card-action>
  </v-card>
  <v-navigation-drawer
    style="margin-top: 20px; border-left: 1px solid #fca311"
    location="right"
    v-model="drawer"
    color="#EFF6FF"
    permanent
  >
    <v-item-group class="d-flex justify-center" v-model="formView" mandatory>
      <v-item value="base" v-slot="{ isSelected, toggle }">
        <v-btn
          class="text-none"
          variant="text"
          @click="toggle"
          :color="isSelected ? '#FCA311' : '#14213D'"
        >
          Базовые</v-btn
        >
      </v-item>
      <v-item value="unique" v-slot="{ isSelected, toggle }">
        <v-btn
          class="text-none"
          variant="text"
          @click="toggle"
          :color="isSelected ? '#FCA311' : '#14213D'"
        >
          Уникальные</v-btn
        >
      </v-item>
    </v-item-group>
    <v-divider :thickness="2" style="opacity: 0.2" color="#fca311" />
    <draggable
      :list="FIELD_TEMPLATES"
      item-key="type"
      :group="{ name: 'form', pull: 'clone', put: false }"
      :clone="cloneField"
      :animation="150"
      @start="() => (isDraggable = true)"
      @end="() => (isDraggable = false)"
      class="field-palette"
      v-if="formView === 'base'"
    >
      <template #item="{ element }">
        <v-list-item :prepend-icon="element.icon" :title="element.label" class="list-form" />
      </template>
    </draggable>
  </v-navigation-drawer>
  <RegistrationFormDialog
    @updateFieldTemplate="
      (event) => {
        console.log(event)
        if (editingField && editingField.options) {
          editingField.options.nameField = event
        }
        console.log('emit editField', editingField)
        console.log('emit formfields', formFields)
      }
    "
    v-model="isDialog"
  />
</template>

<style scoped>
.list-form {
  cursor: pointer;
}
.list-form:hover {
  color: #fca311;
}
.drag {
  border: 2px dashed #fca311;
  padding: 8px;
  text-align: center;
  padding: 16px;
}
</style>
