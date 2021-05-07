/**
 * Concatenates a URL string and query param object and returns the value into url format.
 *
 * @param {String} url
 * @param {Object} queryParams
 * @returns {String}
 */
export function URLQueryParams(url, queryParams = {}) {
  const queries = Object.entries(queryParams).reduce((acc, [key, val]) => {
    acc.push(`${key}=${val}`)
    return acc
  }, []).join('&')

  return queries.length > 0 ? `${ url }?${ queries }` : url
}
