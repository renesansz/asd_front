import { ENTRY_TYPE } from '@/constants'

import Entry from '@/models/Entry'

describe('Entry model class', () => {
  test('should have default value if no params passed', () => {
    const entry = new Entry()

    expect(entry.id).toEqual(0)
    expect(entry.value).toEqual('')
    expect(entry.entry_type).toEqual(ENTRY_TYPE.VALUE)
    expect(entry.created_at).toBeNull()
    expect(entry.updated_at).toBeNull()
  })
})
