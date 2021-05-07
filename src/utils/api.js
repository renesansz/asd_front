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
 * Helper function for simplifying fetch API calls.
 *
 * @param {String} url
 * @param {Object} httpOpt
 *
 * @returns {Promise}
*/
function handleFetchPromise(url, httpOpt) {
  return new Promise((resolve, reject) => {
    fetch(url, httpOpt)
      .then(handleFetchResponse)
      .then((response) => { resolve(response) })
      .catch((error) => { reject(error) })
  })
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
      return handleFetchPromise(URLQueryParams(url, query), { headers })
    },
    post(payload = {}) {
      const opt = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      }
      return handleFetchPromise(url, opt)
    },
    update(id, payload = {}) {
      const opt = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(payload)
      }
      return handleFetchPromise(`${url}${id}/`, opt)
    },
  }
}

export default API
