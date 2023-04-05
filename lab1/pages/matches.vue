<template>
    <div>
      <TopNav/>
      <h1>Mecze</h1>
      <p>Już wkrótce...</p>
    </div>
  </template>
  
  <script>
  import TopNav from '~/components/TopNav/TopNav.vue';
  
  export default {
    name: "MatchesPage",
    components: { TopNav },
    methods: {
      showInfo: () => alert('Witaj')
    }
  };
  </script>
  
  <style scoped>
  </style>
  