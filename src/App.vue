<template>
  <div class="container">
    <Header
      @toggle-add-dish="toggleAddDish"
      title="Poppest Menu"
      :showAddDish="showAddDish"
    />
    <div v-show="showAddDish">
      <AddDish @add-dish="addDish" />
    </div>
    <Menu @edit-dish="editDish" @delete-dish="deleteDish" :dishes="dishes" />
  </div>
</template>


<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import AddDish from "./components/AddDish.vue";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    AddDish,
  },
  data() {
    return {
      dishes: [],
      showAddDish: false,
    };
  },
  methods: {
    toggleAddDish() {
      this.showAddDish = !this.showAddDish;
    },
    addDish(newDish) {
      this.dishes.push(newDish);
      console.log(this.dishes);
    },
    editDish(editedDish) {
      const index = this.dishes.findIndex((dish) => dish.id === editedDish.id);
      this.dishes[index] = editedDish;
    },
    deleteDish(id) {
      if (confirm("Are you sure you want to delete this dish?")) {
        this.dishes = this.dishes.filter((dish) => dish.id !== id);
        console.log(this.dishes);
      }
    },
  },
  created() {
    this.dishes = [
      {
        id: 1,
        image:
          "https://static01.nyt.com/images/2022/04/06/dining/06rest-mena1/05rest-mena1-threeByTwoMediumAt2X.jpg",
        title: "Spaghetti",
        description: "Spaghetti with meatballs",
        price: "$ 12.00",
      },
      {
        id: 2,
        image:
          "https://static01.nyt.com/images/2022/04/06/dining/06rest-mena1/05rest-mena1-threeByTwoMediumAt2X.jpg",
        title: "Pizza",
        description: "Pizza with cheese",
        price: "$ 15.00",
      },
      {
        id: 3,
        image:
          "https://static01.nyt.com/images/2022/04/06/dining/06rest-mena1/05rest-mena1-threeByTwoMediumAt2X.jpg",
        title: "Hamburger",
        description: "Hamburger with cheese",
        price: "$ 10.00",
      },
    ];
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
