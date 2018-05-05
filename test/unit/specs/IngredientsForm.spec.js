import { shallow } from '@vue/test-utils'
import IngredientsForm from '@/components/Ingredients/IngredientsForm'

describe('IngredientsForm.vue', () => {
  it('should render', () => {
    const wrapper = shallow(IngredientsForm)

    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('should reset values when clear button clicked', () => {
    const wrapper = shallow(IngredientsForm)

    wrapper.setData({
      name: 'name',
      description: 'description',
      price: 42,
    })

    const clearButton = wrapper.find('button')
    clearButton.trigger('click')

    expect(wrapper.vm).toEqual({
      name: '',
      description: '',
      price: 0,
    })
  })
})
