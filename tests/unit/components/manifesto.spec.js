import { shallowMount } from '@vue/test-utils'

import Manifesto from '@/components/Manifesto.vue'

describe('Manifesto.vue component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Manifesto)
  })

  test('should show "The Agile Manifesto" as the header text', () => {
    const msg = 'The Agile Manifesto'

    expect(wrapper.find('.title').text()).toMatch(msg)
  })

  test('should toggle edit & read-only mode when button is clicked', async () => {
    const editBtn = wrapper.find('.edit-btn')

    expect(wrapper.vm.editable).toBeFalsy()
    expect(editBtn.text()).toBe('Edit')

    await editBtn.trigger('click')

    expect(wrapper.vm.editable).toBeTruthy()
    expect(editBtn.text()).toBe('Done')
  })
})
