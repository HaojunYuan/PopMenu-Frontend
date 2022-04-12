<template>
  <div class="dish">
    <div class="dish__image">
      <img :src="dish.image" alt="Dish Image" />
    </div>
    <div class="dish__content">
      <h3 class="dish__title">{{ dish.title }}</h3>
      <p class="dish__description">{{ dish.description }}</p>
      <p class="dish__price">{{ dish.price }}</p>
      <button @click="toggleEditDish()" class="btn">Edit</button>
      <button @click="$emit('delete-dish', dish.id)" class="btn">Delete</button>
    </div>
    <div v-show="showEditDish">
      <EditDish @edit-dish="editDish" :dish="dish" />
    </div>
  </div>
</template>

<script>
import EditDish from "./EditDish.vue";

export default {
  name: "Dish",
  props: {
    dish: Object,
  },
  data() {
    return {
      showEditDish: false,
    };
  },
  components: {
    EditDish,
  },
  methods: {
    toggleEditDish() {
      this.showEditDish = !this.showEditDish;
    },
    editDish(editedDish) {
      this.$emit("edit-dish", editedDish);
      this.showEditDish = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.dish {
  text-align: center;
  overflow-wrap: break-word;
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

img {
  max-width: 100%;
}
</style>