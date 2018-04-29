import { shallow } from '@vue/test-utils'
import IngredientsForm from '@/components/Ingredients/IngredientsForm'

describe('IngredientsForm.vue', () => {
  it('should render', () => {
    const wrapper = shallow(IngredientsForm)

    expect(wrapper.find('form').exists()).toBe(true)
  })
})
