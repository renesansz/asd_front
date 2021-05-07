import API from '@/utils/api'

describe('API utils', () => {
  let instance

  beforeAll(() => {
    instance = API()
  })

  test('should return an instance with a GET method', () => {
    expect(instance).toHaveProperty('get')
  })

  test('should return an instance with a POST method', () => {
    expect(instance).toHaveProperty('post')
  })

  test('should return an instance with a UPDATE method', () => {
    expect(instance).toHaveProperty('update')
  })

  test('should return an instance with a DELETE method', () => {
    expect(instance).toHaveProperty('delete')
  })
})
