import EditableList from '@/components/EditableList'

import { ENTRY_TYPE } from '@/constants'

import Entry from '@/models/Entry'

export default function editableList(entryType = ENTRY_TYPE.VALUE, newComponent = {}) {
  const newComponentData = newComponent.data ? newComponent.data() : {}
  const componentProps = {
    components: Object.assign({}, { EditableList }, newComponent?.components || {}),

    props: Object.assign({}, {
      editable: {
        type: Boolean,
        default: false,
      }
    }, newComponent?.props || {}),

    data: () => ({
      ...newComponentData,
      items: [],
    }),

    methods: Object.assign({}, {
      onSaveHandler (itemIdx) {
        if (this.items[itemIdx] instanceof Entry) {
          this.items[itemIdx].save()
        }
      },
      onAddHandler (value) {
        const newEntry = new Entry({ value, entry_type: entryType })

        newEntry.save()

        this.items.push(newEntry)
      },
      onDeleteHandler (id) {
        const idx = this.items.findIndex(i => i.id === id)
        if (idx && this.items[idx] instanceof Entry) {
          this.items[idx].delete()
          this.items.splice(idx, 1)
        }
      }
    }, newComponent?.components || {}),

    async mounted () {
      this.items = await Entry.prototype.getList(entryType)
    },
  }

  return Object.assign({}, newComponent, componentProps)
}
