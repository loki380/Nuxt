<template>
  <nav>
    <img class="logo" src="https://logoeps.com/wp-content/uploads/2013/11/polski-zwiazek-pilki-noznej-polska-vector-logo.png">
    <NuxtLink class="navItem" to="/">Strona główna</NuxtLink>
    <NuxtLink class="navItem" to="/players">Zawodnicy</NuxtLink>
    <NuxtLink class="navItem" to="/matches">Mecze</NuxtLink>
  </nav>
</template>

<script>
export default {
  name: "NavPage",

};
</script>

<style scoped>
nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color:white;
    color: red;
    gap: 2rem;
    font-size: 1.3rem;
    font-family: sans-serif;
    border: 1px solid red;
}

.navItem {
    text-decoration: none;
    color: red;
}

.logo {
    height: 100px;
}

</style>
