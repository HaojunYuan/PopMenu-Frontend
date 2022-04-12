<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @toggle-add-dish="$emit('toggle-add-dish')"
      :text="showAddDish ? 'Close' : 'Add Dish'"
      :color="showAddDish ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Header",
  props: {
    title: String,
    showAddDish: Boolean,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>