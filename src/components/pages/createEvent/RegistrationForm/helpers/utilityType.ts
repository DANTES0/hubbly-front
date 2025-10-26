import { type Component } from 'vue'
import TextFieldInput from '../components/TextFieldInput.vue'
import TextAreaInput from '../components/TextAreaInput.vue'
import FileFieldInput from '../components/FileFieldInput.vue'
import NumberFieldInput from '../components/NumberFieldInput.vue'
import AutocompleteFieldInput from '../components/AutocompleteFieldInput.vue'
export const dataTypeComponents: Record<string, Component> = {
  text: TextFieldInput,
  textarea: TextAreaInput,
  email: TextFieldInput,
  phone: TextFieldInput,
  number: NumberFieldInput,
  file: FileFieldInput,
  select: AutocompleteFieldInput,
}
