import { URLQueryParams } from '@/utils/helpers'

describe('Helpers util library', () => {
  test('URLQueryParams should accept a url and query param object and returns a new url string with query params', () => {
    const url = 'http://localhost:8080'
    const queryParam = { test: true }

    expect(URLQueryParams(url, queryParam)).toBe('http://localhost:8080?test=true')

    queryParam.anotherParam = 1

    expect(URLQueryParams(url, queryParam)).toBe('http://localhost:8080?test=true&anotherParam=1')
  })
})
