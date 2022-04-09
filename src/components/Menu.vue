<template>
  <div :key="dish.id" v-for="dish in dishes">
    <Dish @delete-dish="$emit('delete-dish', dish.id)" :dish="dish" />
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
  emits: ["delete-dish"],
};
</script>

<style lang="scss" scoped>
</style>