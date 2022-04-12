import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import Menu from '@/components/Menu.vue'
import AddDish from '@/components/AddDish.vue'


test('toggle add dish form when clicking `Add Dish` button', async () => {
  const wrapper = mount(Menu)
  const showAddDish = wrapper.vm.showAddDish
  //Find the button and click it
  const header = wrapper.find('header')
  const button = header.find('button')
  expect(button.text()).toBe('Add Dish')
  await button.trigger('click')
  //Check if the form is now visible
  expect(wrapper.vm.showAddDish).toBe(!showAddDish)
})

test('add a italian dish will increase the number of italian dishes by 1', async () => {
  const wrapper = mount(App)
  const numOfItalianDishes = wrapper.vm.italian.length
  const numOfMexicanDishes = wrapper.vm.mexican.length
  const numOfChineseDishes = wrapper.vm.chinese.length
  //Select Italian menu
  const menus = wrapper.findAllComponents(Menu)
  const italian = menus.at(0)
  const addDishForm = italian.findComponent(AddDish)

  //Add an Italian dish
  const dishImage = addDishForm.find('input[name="image"]')
  const dishName = addDishForm.find('input[name="title"]')
  const dishPrice = addDishForm.find('input[name="price"]')
  const dishDescription = addDishForm.find('input[name="description"]')

  await dishImage.setValue('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
  await dishName.setValue('Test Dish')
  await dishPrice.setValue('$ 10')
  await dishDescription.setValue('Test Description')
  await addDishForm.trigger('submit')

  //Check if the number of italian dishes has increased by 1
  expect(wrapper.vm.italian.length).toBe(numOfItalianDishes + 1)
  //Check if the number of other dishes has not changed
  expect(wrapper.vm.mexican.length).toBe(numOfMexicanDishes)
  expect(wrapper.vm.chinese.length).toBe(numOfChineseDishes)

  //Check the new dish
  const newDish = wrapper.vm.italian[numOfItalianDishes]
  expect(newDish.title).toBe('Test Dish')
  expect(newDish.price).toBe("$ 10")
  expect(newDish.description).toBe('Test Description')
  expect(newDish.image).toBe('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')

})

test('add a mexican dish will increase the number of mexican dishes by 1', async () => {
  const wrapper = mount(App)
  const numOfItalianDishes = wrapper.vm.italian.length
  const numOfMexicanDishes = wrapper.vm.mexican.length
  const numOfChineseDishes = wrapper.vm.chinese.length
  //Select Mexican menu
  const menus = wrapper.findAllComponents(Menu)
  const mexican = menus.at(1)
  const addDishForm = mexican.findComponent(AddDish)

  //Add an Mexican dish
  const dishImage = addDishForm.find('input[name="image"]')
  const dishName = addDishForm.find('input[name="title"]')
  const dishPrice = addDishForm.find('input[name="price"]')
  const dishDescription = addDishForm.find('input[name="description"]')

  await dishImage.setValue('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
  await dishName.setValue('Test Dish')
  await dishPrice.setValue('$ 10')
  await dishDescription.setValue('Test Description')
  await addDishForm.trigger('submit')

  //Check if the number of mexican dishes has increased by 1
  expect(wrapper.vm.mexican.length).toBe(numOfMexicanDishes + 1)
  //Check if the number of other dishes has not changed
  expect(wrapper.vm.italian.length).toBe(numOfItalianDishes)
  expect(wrapper.vm.chinese.length).toBe(numOfChineseDishes)

  //Check the new dish
  const newDish = wrapper.vm.mexican[numOfMexicanDishes]
  expect(newDish.title).toBe('Test Dish')
  expect(newDish.price).toBe("$ 10")
  expect(newDish.description).toBe('Test Description')
  expect(newDish.image).toBe('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')

})

test('add a chinese dish will increase the number of chinese dishes by 1', async () => {
  const wrapper = mount(App)
  const numOfItalianDishes = wrapper.vm.italian.length
  const numOfMexicanDishes = wrapper.vm.mexican.length
  const numOfChineseDishes = wrapper.vm.chinese.length
  //Select Chinese menu
  const menus = wrapper.findAllComponents(Menu)
  const chinese = menus.at(2)
  const addDishForm = chinese.findComponent(AddDish)

  //Add an Chinese dish
  const dishImage = addDishForm.find('input[name="image"]')
  const dishName = addDishForm.find('input[name="title"]')
  const dishPrice = addDishForm.find('input[name="price"]')
  const dishDescription = addDishForm.find('input[name="description"]')

  await dishImage.setValue('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
  await dishName.setValue('Test Dish')
  await dishPrice.setValue('$ 10')
  await dishDescription.setValue('Test Description')
  await addDishForm.trigger('submit')

  //Check if the number of chinese dishes has increased by 1
  expect(wrapper.vm.chinese.length).toBe(numOfChineseDishes + 1)
  //Check if the number of other dishes has not changed
  expect(wrapper.vm.italian.length).toBe(numOfItalianDishes)
  expect(wrapper.vm.mexican.length).toBe(numOfMexicanDishes)

  //Check the new dish
  const newDish = wrapper.vm.chinese[numOfChineseDishes]
  expect(newDish.title).toBe('Test Dish')
  expect(newDish.price).toBe("$ 10")
  expect(newDish.description).toBe('Test Description')
  expect(newDish.image).toBe('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
})
