import { shallow } from '@vue/test-utils'
import NavBar from '@/components/common/NavBar/NavBar'

describe('NavBar.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(NavBar, {
      stubs: ['router-link'],
    })

    expect(wrapper.find('span').text()).toEqual('MealPlanner')
  })
})
