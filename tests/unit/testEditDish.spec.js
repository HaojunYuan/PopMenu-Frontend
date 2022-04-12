import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import Menu from '@/components/Menu.vue'
import Dishes from '@/components/Dishes.vue'
import Dish from '@/components/Dish.vue'
import EditDish from '@/components/editDish.vue'


test('edit a italian dish will change its info', async () => {
    global.confirm = jest.fn(() => true);

    const wrapper = mount(App)
    const numOfItalianDishes = wrapper.vm.italian.length
    const numOfMexicanDishes = wrapper.vm.mexican.length
    const numOfChineseDishes = wrapper.vm.chinese.length
    //Select Chinese menu
    const menus = wrapper.findAllComponents(Menu)
    const italian = menus.at(0)
    //Choose a random dish from menu and click on delete button
    const randomIndex = Math.floor(Math.random() * wrapper.vm.italian.length)
    const dish = italian.findAllComponents(Dish).at(randomIndex)
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
    expect(wrapper.vm.italian.length).toBe(numOfItalianDishes)
    expect(wrapper.vm.mexican.length).toBe(numOfMexicanDishes)
    expect(wrapper.vm.chinese.length).toBe(numOfChineseDishes)

    //Check the edited dish
    const editedDish = wrapper.vm.italian[randomIndex]
    expect(editedDish.title).toBe('Test Dish')
    expect(editedDish.price).toBe("$ 10")
    expect(editedDish.description).toBe('Test Description')
    expect(editedDish.image).toBe('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')

})

test('edit a mexican dish will change its info', async () => {
    global.confirm = jest.fn(() => true);

    const wrapper = mount(App)
    const numOfItalianDishes = wrapper.vm.italian.length
    const numOfMexicanDishes = wrapper.vm.mexican.length
    const numOfChineseDishes = wrapper.vm.chinese.length
    //Select Chinese menu
    const menus = wrapper.findAllComponents(Menu)
    const mexican = menus.at(1)
    //Choose a random dish from menu and click on delete button
    const randomIndex = Math.floor(Math.random() * wrapper.vm.mexican.length)
    const dish = mexican.findAllComponents(Dish).at(randomIndex)
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
    expect(wrapper.vm.italian.length).toBe(numOfItalianDishes)
    expect(wrapper.vm.mexican.length).toBe(numOfMexicanDishes)
    expect(wrapper.vm.chinese.length).toBe(numOfChineseDishes)

    //Check the edited dish
    const editedDish = wrapper.vm.mexican[randomIndex]
    expect(editedDish.title).toBe('Test Dish')
    expect(editedDish.price).toBe("$ 10")
    expect(editedDish.description).toBe('Test Description')
    expect(editedDish.image).toBe('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
})

test('edit a chinese dish will change its info', async () => {
    global.confirm = jest.fn(() => true);

    const wrapper = mount(App)
    const numOfItalianDishes = wrapper.vm.italian.length
    const numOfMexicanDishes = wrapper.vm.mexican.length
    const numOfChineseDishes = wrapper.vm.chinese.length
    //Select Chinese menu
    const menus = wrapper.findAllComponents(Menu)
    const chinese = menus.at(2)
    //Choose a random dish from menu and click on delete button
    const randomIndex = Math.floor(Math.random() * wrapper.vm.chinese.length)
    const dish = chinese.findAllComponents(Dish).at(randomIndex)
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
    expect(wrapper.vm.italian.length).toBe(numOfItalianDishes)
    expect(wrapper.vm.mexican.length).toBe(numOfMexicanDishes)
    expect(wrapper.vm.chinese.length).toBe(numOfChineseDishes)

    //Check the edited dish
    const editedDish = wrapper.vm.chinese[randomIndex]
    expect(editedDish.title).toBe('Test Dish')
    expect(editedDish.price).toBe("$ 10")
    expect(editedDish.description).toBe('Test Description')
    expect(editedDish.image).toBe('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
})
