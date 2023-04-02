<template>
  <div>
    <TopNav />
    <h1>Reprezentacja Polski w piłce nożnej mężczyzn</h1>
    <div class="players">
      <PlayerInfo
        v-for="player in players"
        :player="player"
        @show="showModal"
      />
    </div>
    <Modal
      @nextPlayer="nextPlayer"
      @previousPlayer="previousPlayer"
      :name="currentPlayer.name"
      :image="currentPlayer.image"
      :show="dialog"
      @close="closeModal"
    />
  </div>
</template>

<script>
import Modal from "~/components/Modal/Modal.vue";
import PlayerInfo from "~/components/PlayerInfo/PlayerInfo.vue";
import TopNav from "~/components/TopNav/TopNav.vue";
import Player from "~/models/player";

export default {
  name: "PlayersPage",
  components: { TopNav, PlayerInfo, Modal },
  methods: {
    showInfo: () => alert("Witaj"),
    showModal(player) {
      this.currentPlayer = player;
      this.dialog = true;
    },
    closeModal() {
      this.dialog = false;
    },
    nextPlayer() {
      let number = this.players.indexOf(this.currentPlayer);
      if (number < this.players.length - 1) {
        this.currentPlayer = this.players.at(number + 1);
      }
    },
    previousPlayer() {
      let number = this.players.indexOf(this.currentPlayer);
      if (number > 0) {
        this.currentPlayer = this.players.at(number - 1);
      }
    },
  },
  data() {
    return {
      dialog: false,
      currentPlayer: {
        name: "Wojciech Szczęsny",
        image:
          "https://pzpn.pl/public/system/images/reprezentacja_players/191/191-zoom.jpg",
      },
      players: [
        new Player(
          "Wojciech Szczęsny",
          "https://pzpn.pl/public/system/images/reprezentacja_players/191/191-zoom.jpg"
        ),
        new Player(
          "Robert Lewandowski",
          "https://pzpn.pl/public/system/images/reprezentacja_players/211/211-zoom.jpg"
        ),
        new Player(
          "Jan Bednarek",
          "https://pzpn.pl/public/system/images/reprezentacja_players/192/192-zoom.jpg"
        ),
        new Player(
          "Krzysztof Piątek",
          "https://pzpn.pl/public/system/images/reprezentacja_players/213/213-zoom.jpg"
        ),
        new Player(
          "Matty Cash",
          "https://pzpn.pl/public/system/images/reprezentacja_players/216/216-zoom.jpg"
        ),
        new Player(
          "Piotr Zieliński",
          "https://pzpn.pl/public/system/images/reprezentacja_players/209/209-zoom.jpg"
        ),
      ],
    };
  },
};
</script>

<style scoped>
.players {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
/* .modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
} */
</style>
