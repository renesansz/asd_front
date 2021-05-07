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
      onSaveHandler (item) {
        if (item instanceof Entry) {
          item.save()
        }
      },
      onAddHandler (value) {
        const newEntry = new Entry({ value, entry_type: entryType })

        newEntry.save()

        this.items.push(newEntry)
      }
    }, newComponent?.components || {}),

    async mounted () {
      this.items = await Entry.prototype.getList(entryType)
    },
  }

  return Object.assign({}, newComponent, componentProps)
}