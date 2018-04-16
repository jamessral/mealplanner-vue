import Vue from 'vue'
import NavBar from '@/components/common/NavBar/NavBar'

const factory = () => new Vue(NavBar).$mount()

describe('NavBar.vue', () => {
  it('should render correct contents', () => {
    const wrapper = factory()

    // This test is too invasive. Just using it as a proof
    // of concept
    expect(wrapper.$el.children[0].innerHTML).toEqual('MealPlanner')
  })
})
