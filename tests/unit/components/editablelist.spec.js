import { shallowMount } from '@vue/test-utils'

import EditableList from '@/components/EditableList.vue'

describe('EditableList.vue component', () => {

  test('show edit form field if editable prop is set to true', () => {
    const wrapper = shallowMount(EditableList, {
      propsData: {
        editable: true,
        items: [{ id: 1, value: 'test' }],
      },
    })
    const editableForm = wrapper.find('.editable-form')

    expect(editableForm.exists()).toBeTruthy()
  })

  test('show new form field if editable prop is set to true', () => {
    const wrapper = shallowMount(EditableList, {
      propsData: {
        editable: true,
        items: [],
      },
    })
    const newForm = wrapper.find('.new-form')

    expect(newForm.exists()).toBeTruthy()
  })

})
