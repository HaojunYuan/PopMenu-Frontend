<template>
  <div class="container">
    <Header title="Poppest Menu" />
    <Menu :dishes="dishes" />
  </div>
</template>


<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Header,
    Menu,
  },
  data() {
    return {
      title: "Dishes",
      showAddTask: false,
    };
  },
  created() {
    this.dishes = [
      {
        image: "food.jpeg",
        title: "Spaghetti",
        description: "Spaghetti with meatballs",
        price: "$ 12.00",
      },
      {
        image: "food.jpeg",
        title: "Pizza",
        description: "Pizza with cheese",
        price: "$ 15.00",
      },
      {
        image: "food.jpeg",
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
  background: #fff;
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

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
    display: flex;
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
