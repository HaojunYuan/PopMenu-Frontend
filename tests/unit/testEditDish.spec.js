import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import Dishes from '@/components/Dishes.vue'
import Dish from '@/components/Dish.vue'
import EditDish from '@/components/editDish.vue'


test('delete a dish will decrease the number of dishes list by 1', async () => {
    global.confirm = jest.fn(() => true);

    const wrapper = mount(App)
    const numOfDishes = wrapper.vm.dishes.length
    const menu = wrapper.findComponent(Dishes)
    //Choose a random dish from menu and click on delete button
    const randomIndex = Math.floor(Math.random() * wrapper.vm.dishes.length)
    const dish = menu.findAllComponents(Dish).at(randomIndex)
    const editForm = dish.findComponent(EditDish)
    //Fill in the form
    const dishImage = editForm.find('input[name="image"]')
    const dishName = editForm.find('input[name="title"]')
    const dishPrice = editForm.find('input[name="price"]')
    const dishDescription = editForm.find('input[name="description"]')

    await dishImage.setValue('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
    await dishName.setValue('Test Dish')
    await dishPrice.setValue('$ 10')
    await dishDescription.setValue('Test Description')
    await editForm.trigger('submit')

    //Edit the dish should not change the number of dishes
    expect(wrapper.vm.dishes.length).toBe(numOfDishes)

    //Check the edited dish
    const editedDish = wrapper.vm.dishes[randomIndex]
    expect(editedDish.title).toBe('Test Dish')
    expect(editedDish.price).toBe("$ 10")
    expect(editedDish.description).toBe('Test Description')
    expect(editedDish.image).toBe('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')

})
