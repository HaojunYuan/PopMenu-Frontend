import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import Menu from '@/components/Menu.vue'
import Dishes from '@/components/Dishes.vue'
import Dish from '@/components/Dish.vue'


test('delete a italian dish will decrease the number of italian dishes list by 1', async () => {
    global.confirm = jest.fn(() => true);

    const wrapper = mount(App)
    const numOfItalianDishes = wrapper.vm.italian.length
    const numOfMexicanDishes = wrapper.vm.mexican.length
    const numOfChineseDishes = wrapper.vm.chinese.length
    //Select Italian menu
    const menus = wrapper.findAllComponents(Menu)
    const italian = menus.at(0)
    //Choose a random dish from menu and click on delete button
    const randomIndex = Math.floor(Math.random() * wrapper.vm.italian.length)
    const dish = italian.findAllComponents(Dish).at(randomIndex)
    const deleteButton = dish.findAll('button').at(1)
    await deleteButton.trigger('click')
    //Expect a confirmation dialog to appear
    expect(global.confirm).toHaveBeenCalledWith('Are you sure you want to delete this dish?')
    //Expect the number of italian dishes to be decreased by 1
    expect(wrapper.vm.italian.length).toBe(numOfItalianDishes - 1)
    //Expect the number of other dishes to be the same
    expect(wrapper.vm.mexican.length).toBe(numOfMexicanDishes)
    expect(wrapper.vm.chinese.length).toBe(numOfChineseDishes)

})

test('delete a mexican dish will decrease the number of mexican dishes list by 1', async () => {
    global.confirm = jest.fn(() => true);

    const wrapper = mount(App)
    const numOfItalianDishes = wrapper.vm.italian.length
    const numOfMexicanDishes = wrapper.vm.mexican.length
    const numOfChineseDishes = wrapper.vm.chinese.length
    //Select Mexican menu
    const menus = wrapper.findAllComponents(Menu)
    const mexican = menus.at(1)
    //Choose a random dish from menu and click on delete button
    const randomIndex = Math.floor(Math.random() * wrapper.vm.mexican.length)
    const dish = mexican.findAllComponents(Dish).at(randomIndex)
    const deleteButton = dish.findAll('button').at(1)
    await deleteButton.trigger('click')
    //Expect a confirmation dialog to appear
    expect(global.confirm).toHaveBeenCalledWith('Are you sure you want to delete this dish?')
    //Expect the number of mexican dishes to be decreased by 1
    expect(wrapper.vm.mexican.length).toBe(numOfMexicanDishes - 1)
    //Expect the number of other dishes to be the same
    expect(wrapper.vm.italian.length).toBe(numOfItalianDishes)
    expect(wrapper.vm.chinese.length).toBe(numOfChineseDishes)

})

test('delete a chinese dish will decrease the number of chinese dishes list by 1', async () => {
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
    const deleteButton = dish.findAll('button').at(1)
    await deleteButton.trigger('click')
    //Expect a confirmation dialog to appear
    expect(global.confirm).toHaveBeenCalledWith('Are you sure you want to delete this dish?')
    //Expect the number of chinese dishes to be decreased by 1
    expect(wrapper.vm.chinese.length).toBe(numOfChineseDishes - 1)
    //Expect the number of other dishes to be the same
    expect(wrapper.vm.italian.length).toBe(numOfItalianDishes)
    expect(wrapper.vm.mexican.length).toBe(numOfMexicanDishes)

})
