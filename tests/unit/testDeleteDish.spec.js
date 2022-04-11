import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import Menu from '@/components/Menu.vue'
import Dish from '@/components/Dish.vue'


test('delete a dish will decrease the number of dishes list by 1', async () => {
    global.confirm = jest.fn(() => true);

    const wrapper = mount(App)
    const numOfDishes = wrapper.vm.dishes.length
    const menu = wrapper.findComponent(Menu)
    //Choose a random dish from menu and click on delete button
    const randomIndex = Math.floor(Math.random() * wrapper.vm.dishes.length)
    const dish = menu.findAllComponents(Dish).at(randomIndex)
    const deleteButton = dish.find('button')
    await deleteButton.trigger('click')
    //Expect a confirmation dialog to appear
    expect(global.confirm).toHaveBeenCalledWith('Are you sure you want to delete this dish?')
    //Expect the number of dishes to be decreased by 1
    expect(wrapper.vm.dishes.length).toBe(numOfDishes - 1)

})
