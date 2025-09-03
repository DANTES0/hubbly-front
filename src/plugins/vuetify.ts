import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

export default createVuetify({
  defaults: {
    VBtn: {
      ripple: { color: 'pink' },
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#EFF6FF',
          'app-bar': '#EFF6FF',
        },
      },
      dark: {
        dark: true,
        colors: {},
      },
    },
  },
  components,
  directives,
})
