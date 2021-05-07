import { shallowMount } from '@vue/test-utils'

import Manifesto from '@/components/Manifesto.vue'

describe('Manifesto.vue component', () => {
  it('should show "The Agile Manifesto" as the header text', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Manifesto)

    expect(wrapper.find('.title').text()).toMatch('The Agile Manifesto')
  })
})
