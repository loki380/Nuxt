<template>
  <div>
    <transition name="modal">
      <div v-if="show">
        <div class="overlay" @click.self="$emit('close')">
          <div class="modal">
            <button class="iconButton" v-on:click="$emit('previousPlayer')">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <transition name="fade">
              <div class="player">
                <h1>{{ this.name }}</h1>
                <img :src="image" />
              </div>
            </transition>
            <button class="iconButton" v-on:click="$emit('nextPlayer')">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: () => false,
    },
    name: {
      type: String,
      default: () => "",
    },
    image: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}

img {
  width: 70%;
}

.player {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.iconButton {
  background: none;
  font-size: 2rem;
  border: none;
}
</style>
