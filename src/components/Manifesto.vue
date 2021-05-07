<template>
<div id="manifesto">
  <h1 class="title">The Agile Manifesto</h1>
  <Values />
  <hr />
  <Principles />
</div>
</template>

<script>
import Principles from './Principles'
import Values from './Values'

export default {
  components: {
    Principles,
    Values,
  },
}
</script>
