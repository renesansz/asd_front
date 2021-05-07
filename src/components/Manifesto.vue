<template>
<div id="manifesto">
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
