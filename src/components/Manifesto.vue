<template>
<div id="manifesto">
  <h1 class="title">The Agile Manifesto</h1>
  <button class="edit-btn" @click="editable = !editable">
    <span v-if="editable">Done</span>
    <span v-else>Edit</span>
  </button>
  <Values :editable="editable" />
  <hr />
  <Principles :editable="editable" />
</div>
</template>

<script>
import Principles from './Principles'
import Values from './Values'

export default {
  data: () => ({
    editable: false,
  }),
  components: {
    Principles,
    Values,
  },
}
</script>
