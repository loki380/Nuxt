<template>
  <div>
    <h1>Nasa</h1>
    <input v-model="message"/>
    <button @click="find()">Search</button>
    <div class="images">
      <img v-for="(value, index) in dataArr" :key="index" :src="value.links[0].href"/>
    </div>
  </div>
</template>

<script>
import TopNav from "~/components/TopNav/TopNav.vue";
import axios from "axios";

export default {
  name: "MatchesPage",
  components: { TopNav },
  data() {
    return {
        dataArr: [],
        message: ""
    }
  },
  methods: {
    async fetchData() {
        console.log(this.message);
      await axios
        .get('https://images-api.nasa.gov/search?q='+this.message)
        .then(res => {
            this.dataArr = res.data.collection.items;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    find(){
        this.fetchData();
    }
  },
};
</script>

<style scoped>
.images{
    margin: 5px;
    display: flex;   
    flex-wrap: wrap;
    gap: 10px;
}

img{
    width: 100px;
    height: 100px;
}
</style>
