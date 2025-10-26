import { mask } from '@/utils/mask'
import type { Component } from 'vue'

export type FieldType =
  | 'text'
  | 'email'
  | 'radio'
  | 'select'
  | 'checkbox'
  | 'textarea'
  | 'phone'
  | 'file'
  | 'number'

export interface FieldTemplate {
  type: FieldType
  label: string
  icon: string
  component?: Component
  mask?: string
}

export interface FormField extends FieldTemplate {
  id: string
  options: {
    nameField: string
    rules: []
  }
}

export const FIELD_TEMPLATES: FieldTemplate[] = [
  { type: 'text', label: 'Текстовое поле', icon: 'mdi-format-text' },
  { type: 'textarea', label: 'Многострочное поле', icon: 'mdi-text-box-outline' },
  { type: 'email', label: 'Email', icon: 'mdi-email' },
  { type: 'phone', label: 'Телефон', icon: 'mdi-phone', mask: mask.phone },
  { type: 'number', label: 'Число', icon: 'mdi-numeric' },
  { type: 'file', label: 'Файл', icon: 'mdi-file' },
  { type: 'select', label: 'Выпадающий список', icon: 'mdi-book-alphabet' },
  { type: 'checkbox', label: 'Чекбокс', icon: 'mdi-checkbox-marked' },
  { type: 'radio', label: 'Радио кнопка', icon: 'mdi-radiobox-marked' },
]
