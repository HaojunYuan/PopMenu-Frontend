<template>
  <div class="container">
    <Header
      @toggle-add-dish="toggleAddDish"
      :title="title"
      :showAddDish="showAddDish"
    />
    <div v-show="showAddDish">
      <AddDish @add-dish="addDish" />
    </div>
    <Dishes @edit-dish="editDish" @delete-dish="deleteDish" :dishes="dishes" />
  </div>
</template>


<script>
import Header from "./Header.vue";
import Dishes from "./Dishes.vue";
import AddDish from "./AddDish.vue";

export default {
  name: "Menu",
  components: {
    Header,
    Dishes,
    AddDish,
  },
  props: {
    dishes: Array,
    title: String,
  },
  data() {
    return {
      showAddDish: false,
    };
  },
  emits: ["add-dish", "delete-dish", "edit-dish"],
  methods: {
    toggleAddDish() {
      this.showAddDish = !this.showAddDish;
    },
    addDish(newDish) {
      this.$emit("add-dish", newDish);
    },
    editDish(editedDish) {
      this.$emit("edit-dish", editedDish);
    },
    deleteDish(id) {
      this.$emit("delete-dish", id);
    },
  },
};
</script>



<style>
.container {
  max-width: 80%;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:hover {
  background: #00c897;
  color: #000;
}
.btn:active {
  transform: scale(0.95);
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    place-items: center;
    font-size: 150%;
  }

  header {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
