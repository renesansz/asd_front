<template>
<div id="principles">
  <em>We follow these principles:</em>
  <editable-list
    :items="principles"
    :editable="editable"
  />
</div>
</template>

<script>
import { ENTRY_TYPE } from '@/constants'

import Entry from '@/models/Entry'

import EditableList from './EditableList'

export default {
  components: { EditableList },
  props: {
    editable: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    principles: [],
  }),
  async mounted () {
    this.principles = await Entry.prototype.getList(ENTRY_TYPE.PRINCIPLE)
  },
 }
</script>
