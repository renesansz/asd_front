import API from '@/utils/api'

import { ENTRY_TYPE } from '@/constants'

const entryAPI = API('manifesto/entry/')

function Entry (props) {
  this.id = props?.id || 0
  this.value = props?.value || ''
  this.entry_type = props?.entry_type || ENTRY_TYPE.VALUE
  this.created_at = props?.created_at || null
  this.updated_at = props?.updated_at || null
}

/**
 * Fetch a list of entry and returns each item as an instance of Entry model.
 * @param {Number} type
 * @returns Array<Entry>
 */
Entry.prototype.getList = async function (type) {
  const entries = await entryAPI.get({ type })
  return entries.map((entry) => new Entry(entry))
}

/**
 * Save Entry object save to DB.
*/
Entry.prototype.save = async function () {
  try {
    if (this.id === 0) {
      const response = await entryAPI.post({
        value: this.value,
        entry_type: this.entry_type,
      })

      this.id = response.id
      this.created_at = response.created_at
      this.updated_at = response.updated_at
    } else {
      const response = await entryAPI.update(this.id, {
        value: this.value,
        entry_type: this.entry_type,
      })
      this.updated_at = response.updated_at
    }
  } catch (error) {
    console.error(error)
  }
}

/**
 * Delete Entry data in DB.
*/
Entry.prototype.delete = async function () {
  try {
    const response = await entryAPI.delete(this.id)
    return response
  } catch (error) {
    //
  }
}

export default Entry
