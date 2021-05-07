<template>
<ul class="editable-list">
  <li v-for="(item, idx) in items" :key="idx">
    <span v-if="!editable">{{ item.value }}</span>
    <div class="editable-form" v-else>
      <input name="value-field" :value="item.value" />
      <button>Save</button>
      <button>Delete</button>
    </div>
  </li>
  <li class="new-form" v-if="editable">
    <input name="value-field" /> <button>Add</button>
  </li>
</ul>
</template>

<script>
export default {
  props: {
    editable: {
      type: Boolean,
      default: false,
    },
    items: {
      required: true,
    },
  },
}
</script>

<style scoped>
.editable-list {
  text-align: left;
}
.editable-form,
.new-form {
  display: flex;
}
.editable-form input,
.new-form input {
  flex: 1;
}
.editable-form input {
  border: none;
}
.editable-form input:focus {
  outline: none;
}
</style>
