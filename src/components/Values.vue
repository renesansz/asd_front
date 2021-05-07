<template>
<div id="values">
  <p>We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:</p>
  <editable-list
    :items="items"
    :editable="editable"
    @onClickSave="onSaveHandler"
    @onClickAdd="onAddHandler"
    @onClickDelete="onDeleteHandler"
  />
  <p>That is, while there is value in the items on the right, we value the items on the left more.</p>
</div>
</template>

<script>
import { ENTRY_TYPE } from '@/constants'

import editableList from '@/composables/editableList'

export default editableList(ENTRY_TYPE.VALUE)
</script>
