<template>
    <div>
      <TopNav/>
      <h1>Gallery</h1>
      <BigImage image="https://img.freepik.com/darmowe-zdjecie/zolty-zonkil-narcyz-kwitnacy-w-ogrodzie_127675-2729.jpg?w=1380&t=st=1679759779~exp=1679760379~hmac=af374f88beed12d2029adcb269ee2f9d891214b2f1ef65f5d1b41e6d198cbc19"/>
    </div>
  </template>
  
  <script>
  import BigImage from '~/components/Gallery/BigImage.vue';
  import TopNav from '~/components/TopNav/TopNav.vue';
  
  export default {
    name: "GalleryPage",
    components: { TopNav, BigImage }
  };
  </script>
  
  <style scoped>
  </style>
  