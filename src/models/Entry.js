import API from '@/utils/api'

const entryAPI = API('manifesto/entry/')

function Entry (props) {
  this.id = props?.id || 0
  this.value = props?.value || ''
  this.entry_type = props?.entry_type || 0
  this.created_at = props?.created_at || null
  this.updated_at = props?.updated_at || null
}

/**
 * Fetch a list of entry and returns each item as an instance of Entry model.
 * @param {Number} type
 * @returns Array<Entry>
 */
Entry.prototype.getList = async (type) => {
  const entries = await entryAPI.get({ type })
  return entries.map((entry) => new Entry(entry))
}

export default Entry
