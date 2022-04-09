<template>
  <div class="dish">
    <div class="dish__image">
      <img :src="'src/assets/' + dish.image" alt="Dish Image" />
    </div>
    <div class="dish__content">
      <h3 class="dish__title">{{ dish.title }}</h3>
      <p class="dish__description">{{ dish.description }}</p>
      <p class="dish__price">{{ dish.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dish",
  props: {
    dish: Object,
  },
};
</script>

<style lang="scss" scoped>
.dish {
  text-align: center;
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.dish__image {
  width: 100%;
}
</style>