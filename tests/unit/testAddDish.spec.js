import { shallowMount } from '@vue/test-utils'
import AddDish from '@/components/AddDish.vue'
import App from '@/App.vue'

describe('AddDish.vue', () => {
  it('renders props.msg when passed', () => {
    const showAddDish = App.showAddDish
    const wrapper = shallowMount(AddDish)
    wrapper.trigger('click').then(() => {
      expect(wrapper.vm.showAddDish).toBe(!showAddDish)
    })
  })
})
