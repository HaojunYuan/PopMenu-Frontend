<template>
  <div :key="dish.id" v-for="dish in dishes">
    <Dish
      @edit-dish="editDish"
      @delete-dish="$emit('delete-dish', dish.id)"
      :dish="dish"
    />
  </div>
</template>

<script>
import Dish from "./Dish.vue";

export default {
  name: "Menu",
  props: {
    dishes: Array,
  },
  components: {
    Dish,
  },
  emits: ["delete-dish", "edit-dish"],
  methods: {
    editDish(editedDish) {
      this.$emit("edit-dish", editedDish);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>