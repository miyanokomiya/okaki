import { configure } from '@storybook/vue'
import { addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'
import Vuetify from 'vuetify'

import 'ress'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/styles/icons.css'

Vue.use(Vuetify)
addDecorator(withKnobs)

const req = require.context('../test/storybook', true, /\.story\.js$/)
const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}
configure(loadStories, module)
