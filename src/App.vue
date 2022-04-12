<template>
  <el-tabs type="border-card" stretch="true">
    <el-tab-pane label="Italian">
      <Menu
        @add-dish="addItalianDish"
        @edit-dish="editItalianDish"
        @delete-dish="deleteItalianDish"
        :dishes="italian"
        title="Italian Food"
      />
    </el-tab-pane>
    <el-tab-pane label="Mexican">
      <Menu
        @add-dish="addMexicanDish"
        @edit-dish="editMexicanDish"
        @delete-dish="deleteMexicanDish"
        :dishes="mexican"
        title="Mexican Food"
      />
    </el-tab-pane>
    <el-tab-pane label="Chinese">
      <Menu
        @add-dish="addChineseDish"
        @edit-dish="editChineseDish"
        @delete-dish="deleteChineseDish"
        :dishes="chinese"
        title="Chinese Food"
      />
    </el-tab-pane>
  </el-tabs>
</template>


<script>
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {
      italian: [],
      mexican: [],
      chinese: [],
    };
  },
  methods: {
    //Methods for italian dishes
    addItalianDish(newDish) {
      this.italian.push(newDish);
    },

    editItalianDish(editedDish) {
      const index = this.italian.findIndex((dish) => dish.id === editedDish.id);
      this.italian[index] = editedDish;
    },

    deleteItalianDish(id) {
      if (confirm("Are you sure you want to delete this dish?")) {
        this.italian = this.italian.filter((dish) => dish.id !== id);
      }
    },
    //Methods for mexican dishes
    addMexicanDish(newDish) {
      this.mexican.push(newDish);
    },
    editMexicanDish(editedDish) {
      const index = this.mexican.findIndex((dish) => dish.id === editedDish.id);
      this.mexican[index] = editedDish;
    },
    deleteMexicanDish(id) {
      if (confirm("Are you sure you want to delete this dish?")) {
        this.mexican = this.mexican.filter((dish) => dish.id !== id);
      }
    },

    //Methods for chinese dishes
    addChineseDish(newDish) {
      this.chinese.push(newDish);
    },
    editChineseDish(editedDish) {
      const index = this.chinese.findIndex((dish) => dish.id === editedDish.id);
      this.chinese[index] = editedDish;
    },
    deleteChineseDish(id) {
      if (confirm("Are you sure you want to delete this dish?")) {
        this.chinese = this.chinese.filter((dish) => dish.id !== id);
      }
    },
  },

  created() {
    this.italian = [
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
    this.mexican = [
      {
        id: 1,
        image:
          "https://www.ajc.com/resizer/ItGrzbOTwKS2-PFKi74Bqj7IYkM=/814x458/cloudfront-us-east-1.images.arcpublishing.com/ajc/KQISFSSYQVHAFPG4FDUWKD2NAA.jpg",
        title: "Tacos",
        description: "Tacos with cheese",
        price: "$ 12.00",
      },
      {
        id: 2,
        image:
          "https://www.ajc.com/resizer/ItGrzbOTwKS2-PFKi74Bqj7IYkM=/814x458/cloudfront-us-east-1.images.arcpublishing.com/ajc/KQISFSSYQVHAFPG4FDUWKD2NAA.jpg",
        title: "Burrito",
        description: "Burrito with cheese",
        price: "$ 15.00",
      },
      {
        id: 3,
        image:
          "https://www.ajc.com/resizer/ItGrzbOTwKS2-PFKi74Bqj7IYkM=/814x458/cloudfront-us-east-1.images.arcpublishing.com/ajc/KQISFSSYQVHAFPG4FDUWKD2NAA.jpg",
        title: "Quesadilla",
        description: "Quesadilla with cheese",
        price: "$ 10.00",
      },
    ];
    this.chinese = [
      {
        id: 1,
        image:
          "https://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/260/d51/e1e/a4f2f5658622fb03654fb2f.jpg_1280_1280_3_bb7b.jpg",
        title: "Spring Rolls",
        description: "Spring Rolls with cheese",
        price: "$ 12.00",
      },
      {
        id: 2,
        image:
          "https://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/260/d51/e1e/a4f2f5658622fb03654fb2f.jpg_1280_1280_3_bb7b.jpg",
        title: "Peking Duck",
        description: "Peking Duck with cheese",
        price: "$ 15.00",
      },
      {
        id: 3,
        image:
          "https://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/260/d51/e1e/a4f2f5658622fb03654fb2f.jpg_1280_1280_3_bb7b.jpg",
        title: "Shrimp Dumplings",
        description: "Shrimp Dumplings with cheese",
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
