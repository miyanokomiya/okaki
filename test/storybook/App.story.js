import { storiesOf } from '@storybook/vue'
import App from '@/App'

storiesOf('MyButton', module).add('story as a component', () => ({
  components: { App },
  template: '<App/>'
}))
