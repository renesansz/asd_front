import { shallowMount } from '@vue/test-utils'

import Values from '@/components/Values.vue'

describe('Values.vue component', () => {

  beforeAll(() => {
    fetch.mockResponse(JSON.stringify([]))
  })

  afterAll(() => {
    fetch.resetMocks()
    jest.resetAllMocks()
  })

  test('should contain onSaveHandler() method', () => {
    const wrapper = shallowMount(Values)
    expect(wrapper.vm).toHaveProperty('onSaveHandler')
  })

  test('should contain onAddHandler() method', () => {
    const wrapper = shallowMount(Values)
    expect(wrapper.vm).toHaveProperty('onAddHandler')
  })

  test('should have triggered fetched entry list during mount', () => {
    const MockedEntry = require('@/models/Entry').default

    MockedEntry.prototype.getList = jest.fn()

    jest.setMock('@/models/Entry', MockedEntry);

    const wrapper = shallowMount(Values)

    expect(MockedEntry.prototype.getList).toHaveBeenCalled()
  })

})
