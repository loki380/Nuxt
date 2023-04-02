<template>
  <div class="playerContainer">
    <p>{{ player.name }}</p>
    <img :src="player.image" @click="onClickImage" />
  </div>
</template>

<script>
import BigImage from "../Gallery/BigImage.vue";
import Modal from "../Modal/Modal.vue";

export default {
  name: "PlayerInfo",
  components: { BigImage, Modal },
  props: {
    player: {
      name: {
        type: String,
        default: () => "",
      },
      image: {
        type: String,
        default: () => "Pusty string",
      },
    },
  },
  methods: {
    onClickImage(event) {
      this.$emit("show", this.player);
    },
  },
};
</script>

<style scoped>
.playerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 150px;
  margin: 0.5rem;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
