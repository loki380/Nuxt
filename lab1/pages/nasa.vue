<template>
  <div>
    <h1>Nasa - {{ currentCollection }}</h1>
    <input v-model="message" />
    <button @click="find()">Search</button>
    <div class="images">
      <template v-for="value in dataArr">
        <template v-for="(link, index) in value.links">
          <img
            alt=""
            v-if="index === 0"
            :key="link.href"
            :data-index="index"
            :src="link.href"
            @click="showStaticModal(link.href)"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import TopNav from "~/components/TopNav/TopNav.vue";
import axios from "axios";

export default {
  name: "NasaPage",
  components: { TopNav },
  created() {
    this.fetchData("sun");
  },
  data() {
    return {
      dataArr: [],
      message: "",
      currentCollection: "",
    };
  },
  methods: {
    async fetchData(value) {
      await axios
        .get("https://images-api.nasa.gov/search?q=" + value)
        .then((res) => {
          this.dataArr = res.data.collection.items;
          this.currentCollection = value;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    find() {
      this.fetchData(this.message);
    },

    showStaticModal(imageUrl) {
      console.log(imageUrl);
      this.$nuxt.$emit('showBigImageModal', imageUrl);
    },
  },
};
</script>

<style scoped>
.images {
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

img {
  width: 100px;
  height: 100px;
}

img:hover {
  border: 2px solid blue;
  cursor: pointer;
}
</style>
