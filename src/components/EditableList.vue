<template>
<ul class="editable-list">
  <li v-for="(item, idx) in items" :key="idx">
    <span v-if="!editable">{{ item.value }}</span>
    <div class="editable-form" v-else>
      <input name="value-field" v-model="item.value" />
      <button @click="onClickSave(idx)">Save</button>
      <button @click="onClickDelete(item.id)">Delete</button>
    </div>
  </li>
  <li class="new-form" v-if="editable">
    <input name="value-field" v-model="newValue" /><button @click="onClickAdd">Add</button>
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
  data: () => ({
    newValue: '',
  }),
  methods: {
    onClickSave (idx) {
      this.$emit('onClickSave', idx)
    },
    onClickAdd () {
      this.$emit('onClickAdd', this.newValue)
      this.newValue = ''
    },
    onClickDelete (itemID) {
      this.$emit('onClickDelete', itemID)
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
.new-form {
  margin-top: 24px;
}
</style>
