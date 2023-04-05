<template>
  <div>
    <TopNav/>
    <h1>Reprezentacja Polski w piłce nożnej mężczyzn</h1>
    <p>Drużyna piłkarska reprezentująca Rzeczpospolitą Polską w zawodach międzynarodowych. Za jej funkcjonowanie odpowiedzialny jest Polski Związek Piłki Nożnej, organ zarządzający piłką nożną w Polsce. W reprezentacji mogą występować wyłącznie zawodnicy posiadający obywatelstwo polskie.</p>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav/TopNav.vue';

export default {
    name: "IndexPage",
    components: { TopNav }
};
</script>
