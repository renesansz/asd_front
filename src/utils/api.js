import { URLQueryParams } from './helpers'

/**
 * Helper function for fetch() method on handling initial response and emits an error or returns an actual data to JSON format.
 *
 * @param {Object} response
 * @returns {JSON}
 */
function handleFetchResponse(response) {
  if (!response.ok) {
    throw new Error('An API error has occured.');
  }
  return response.json()
}

/**
 * API class for executing fetch methods.
 *
 * @returns {Object}
*/
function API (path = '') {
  const url = `${ process.env.VUE_APP_API_URL }/${ path }`
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${ process.env.VUE_APP_API_TOKEN }`
  }

  return {
    get(query = {}) {
      return new Promise((resolve, reject) => {
        fetch(URLQueryParams(url, query), { headers })
          .then(handleFetchResponse)
          .then((response) => { resolve(response) })
          .catch((error) => { reject(error) })
      })
    },
    post(payload = {}) {
      return new Promise((resolve, reject) => {
        const opt = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(payload)
        }

        fetch(url, opt)
          .then(handleFetchResponse)
          .then((response) => { resolve(response) })
          .catch((error) => { reject(error) })
      })
    },
  }
}

export default API
