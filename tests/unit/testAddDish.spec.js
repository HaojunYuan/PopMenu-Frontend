import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import AddDish from '@/components/AddDish.vue'


test('toggle add dish form when clicking `Add Dish` button', async () => {
  const wrapper = mount(App)
  const showAddDish = wrapper.vm.showAddDish
  //Find the button and click it
  const header = wrapper.find('header')
  const button = header.find('button')
  expect(button.text()).toBe('Add Dish')
  await button.trigger('click')
  //Check if the form is now visible
  expect(wrapper.vm.showAddDish).toBe(!showAddDish)
})

test('add a dish will increase the number of dishes list by 1', async () => {
  const wrapper = mount(App)
  const numOfDishes = wrapper.vm.dishes.length
  //Fill in the form
  const addDishForm = wrapper.findComponent(AddDish)

  const dishImage = addDishForm.find('input[name="image"]')
  const dishName = addDishForm.find('input[name="title"]')
  const dishPrice = addDishForm.find('input[name="price"]')
  const dishDescription = addDishForm.find('input[name="description"]')

  await dishImage.setValue('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
  await dishName.setValue('Test Dish')
  await dishPrice.setValue('10')
  await dishDescription.setValue('Test Description')
  await addDishForm.trigger('submit')

  //Check if the number of dishes has increased by 1
  expect(wrapper.vm.dishes.length).toBe(numOfDishes + 1)

})
