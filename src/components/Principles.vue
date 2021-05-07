<template>
<div id="principles">
  <em>We follow these principles:</em>
  <editable-list
    :items="items"
    :editable="editable"
    @onClickSave="onSaveHandler"
    @onClickAdd="onAddHandler"
    @onClickDelete="onDeleteHandler"
  />
</div>
</template>

<script>
import { ENTRY_TYPE } from '@/constants'

import editableList from '@/composables/editableList'

export default editableList(ENTRY_TYPE.PRINCIPLE)
</script>
