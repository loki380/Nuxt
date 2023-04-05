<template>
  <div>
    <transition name="modal">
      <div v-if="show">
        <div class="overlay" @click.self="$emit('close')">
          <div class="modal">
            <h2 class="modal-header">{{ this.header }}</h2>
            <div class="modal-content">
              <div class="thumbs">
                <img
                  v-for="player in getPlayersWithoutCurrent()"
                  :src="player.image"
                  :key="player.name"
                  @click="onClickThumb(player)"
                />
              </div>
              <button class="iconButton" v-on:click="previousPlayer()">
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <transition name="fade">
                <div class="player">
                  <h3>{{ this.localCurrentPlayer.name }}</h3>
                  <img :src="this.localCurrentPlayer.image" />
                </div>
              </transition>
              <button class="iconButton" v-on:click="nextPlayer()">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Player from "~/models/player";

export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: () => false,
    },
    header: {
      type: String,
      default: () => "",
    },
    players: {
      type: [],
      default: () => [],
    },
    currentPlayer: {
      type: Player,
      default: () => {},
    },
  },
  computed: {
    localCurrentPlayer: {
      get: function () {
        return this.currentPlayer;
      },
      set: function (value) {
        this.$emit("update-current-player", value);
      },
    },
  },
  methods: {
    nextPlayer() {
      let number = this.players.indexOf(this.localCurrentPlayer);
      if (number < this.players.length - 1) {
        this.localCurrentPlayer = this.players.at(number + 1);
      } else {
        this.localCurrentPlayer = this.players.at(0);
      }
    },
    previousPlayer() {
      let number = this.players.indexOf(this.localCurrentPlayer);
      if (number > 0) {
        this.localCurrentPlayer = this.players.at(number - 1);
      } else {
        this.localCurrentPlayer = this.players.at(this.players.length - 1);
      }
    },
    onClickThumb(player) {
      this.localCurrentPlayer = player;
    },
    getPlayersWithoutCurrent() {
      return this.players.filter((p) => p !== this.localCurrentPlayer);
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-content {
  display: flex;
  flex-direction: row;
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

.thumbs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  gap: 5px 5px;
  margin-right: 0.5rem;
}

.thumbs img {
  width: 60px;
  height: 60px;
}
.thumbs img:hover {
  border: 1px solid black;
}

.player img {
  max-width: 80%;
}

.player {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  height: 350px;
}

.iconButton {
  background: none;
  font-size: 2rem;
  border: none;
}
</style>
