/**
 * Concatenates a URL string and query param object and returns the value into url format.
 *
 * @param {String} url
 * @param {Object} queryParams
 * @returns {String}
 */
export function URLQueryParams(url, queryParams = {}) {
  const searchParams = new URLSearchParams()
  const queries = Object.entries(queryParams)

  queries.forEach(([key, val]) => {
    searchParams.append(key, val)
  })

  return queries.length > 0 ? `${ url }?${ searchParams.toString() }` : url
}
