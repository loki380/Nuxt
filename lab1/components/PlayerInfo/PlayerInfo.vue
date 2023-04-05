<template>
  <div class="playerContainer">
    <p>{{ player.name }}</p>
    <img :src="player.image" @click="onClickImage" />
  </div>
</template>

<script>
import Modal from "../Modal/Modal.vue";

export default {
  name: "PlayerInfo",
  components: { Modal },
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
  margin: 0.5rem;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>
