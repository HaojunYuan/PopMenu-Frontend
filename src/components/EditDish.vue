<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Dish Image</label>
      <input
        type="text"
        v-model="image"
        name="image"
        placeholder="Dish Image URL"
      />
      <label>Dish Title</label>
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="Dish Title "
      />
      <label>Dish Description</label>
      <input
        type="text"
        v-model="description"
        name="description"
        placeholder="Dish Description"
      />
      <label>Dish Price</label>
      <input
        type="text"
        v-model="price"
        name="price"
        placeholder="Dish Price"
      />
    </div>
    <input type="submit" value="Save Dish" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "EditDish",
  props: {
    dish: Object,
  },
  data() {
    return {
      image: "",
      title: "",
      description: "",
      price: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.image || !this.title || !this.description || !this.price) {
        alert("Please fill in all fields");
        return;
      }

      const editedDish = {
        id: this.dish.id,
        image: this.image,
        title: this.title,
        description: this.description,
        price: this.price,
      };
      this.$emit("edit-dish", editedDish);
      this.image = "";
      this.title = "";
      this.description = "";
      this.price = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.add-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: #f2f2f2;
}
.form-control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  border-radius: 10px;
  background-color: #f2f2f2;
}
.form-control label {
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
}
.form-control input {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-size: 15px;
  font-weight: bold;
}
.btn {
  margin-top: 1.5rem;
}
</style>