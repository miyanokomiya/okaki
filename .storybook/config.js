import { configure } from '@storybook/vue'
import { addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import 'ress'

addDecorator(withKnobs)

const req = require.context('../test/storybook', true, /\.story\.js$/)
const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}
configure(loadStories, module)
