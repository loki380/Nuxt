<template>
  <div>
    <TopNav/>
    <h1>About</h1>
    <button @click="showInfo">Kliknij mnie</button>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav/TopNav.vue';

export default {
  name: "AboutPage",
  components: { TopNav },
  methods: {
    showInfo: () => alert('Witaj')
  }
};
</script>

<style scoped>
</style>
