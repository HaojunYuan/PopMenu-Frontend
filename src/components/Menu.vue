<template>
  <div :key="dish.id" v-for="dish in dishes">
    <Dish :dish="dish" />
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
};
</script>

<style lang="scss" scoped>
</style>