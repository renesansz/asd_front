import { shallowMount } from '@vue/test-utils'

import Principles from '@/components/Principles.vue'

describe('Principles.vue component', () => {

  beforeAll(() => {
    fetch.mockResponse(JSON.stringify([]))
  })

  afterAll(() => {
    fetch.resetMocks()
    jest.resetAllMocks()
  })

  test('should contain onSaveHandler() method', () => {
    const wrapper = shallowMount(Principles)
    expect(wrapper.vm).toHaveProperty('onSaveHandler')
  })

  test('should contain onAddHandler() method', () => {
    const wrapper = shallowMount(Principles)
    expect(wrapper.vm).toHaveProperty('onAddHandler')
  })

  test('should have triggered fetched entry list during mount', () => {
    const MockedEntry = require('@/models/Entry').default

    MockedEntry.prototype.getList = jest.fn()

    jest.setMock('@/models/Entry', MockedEntry);

    const wrapper = shallowMount(Principles)

    expect(MockedEntry.prototype.getList).toHaveBeenCalled()
  })

})
