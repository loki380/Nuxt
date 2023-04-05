<template>
  <div>
    <TopNav />
    <div class="players-content">
      <div>
        <h1>Bramkarze</h1>
        <div class="players">
          <PlayerInfo
            v-for="player in getPlayersByPosition('Bramkarz')"
            :key="player.name"
            :player="player"
            @show="showModal"
          />
        </div>
      </div>
      <div>
        <h1>Obrońcy</h1>
        <div class="players">
          <PlayerInfo
            v-for="player in getPlayersByPosition('Obrońca')"
            :key="player.name"
            :player="player"
            @show="showModal"
          />
        </div>
      </div>
      <div>
        <h1>Pomocnicy</h1>
        <div class="players">
          <PlayerInfo
            v-for="player in getPlayersByPosition('Pomocnik')"
            :key="player.name"
            :player="player"
            @show="showModal"
          />
        </div>
      </div>
      <div>
        <h1>Napastnicy</h1>
        <div class="players">
          <PlayerInfo
            v-for="player in getPlayersByPosition('Napastnik')"
            :key="player.name"
            :player="player"
            @show="showModal"
          />
        </div>
      </div>
    </div>
    <Modal
      :header="getHeaderForModal()"
      :players="this.playersForModal"
      :currentPlayer="this.currentPlayer"
      :show="dialog"
      @update-current-player="(p) => this.currentPlayer=p"
      @close="closeModal"
    />
  </div>
</template>

<script>
import Modal from "~/components/Modal/Modal.vue";
import PlayerInfo from "~/components/PlayerInfo/PlayerInfo.vue";
import TopNav from "~/components/TopNav/TopNav.vue";
import Player, { Position } from "~/models/player";

export default {
  name: "PlayersPage",
  components: { TopNav, PlayerInfo, Modal },
  methods: {
    showInfo: () => alert("Witaj"),
    showModal(player) {
      this.currentPlayer = player;
      this.playersForModal = this.getPlayersByPosition(player.position);
      this.dialog = true;
    },
    closeModal() {
      this.dialog = false;
    },
    getPlayersByPosition(position) {
      return this.players.filter((player) => player.position === position);
    },
    getHeaderForModal() {
      if(this.currentPlayer) {
        switch (this.currentPlayer.position){
          case Position.Forward: return 'Napastnicy';
          case Position.Keeper: return 'Bramkarze';
          case Position.Midfield: return 'Pomocnicy';
          case Position.Defender: return 'Obrońcy';
        }
      } else {
        return '';
      }
    },
  },
  data() {
    return {
      dialog: false,
      currentPlayer: null,
      players: [
        new Player(
          "Wojciech Szczęsny",
          "https://pzpn.pl/public/system/images/reprezentacja_players/191/191-zoom.jpg",
          Position.Keeper
        ),
        new Player(
          "Łukasz Skorupski",
          "https://pzpn.pl/public/system/images/reprezentacja_players/190/190-zoom.jpg",
          Position.Keeper
        ),
        new Player(
          "Bartłomiej Drągowski",
          "https://pzpn.pl/public/system/images/reprezentacja_players/189/189-zoom.jpg",
          Position.Keeper
        ),
        new Player(
          "Robert Lewandowski",
          "https://pzpn.pl/public/system/images/reprezentacja_players/211/211-zoom.jpg",
          Position.Forward
        ),
        new Player(
          "Krzysztof Piątek",
          "https://pzpn.pl/public/system/images/reprezentacja_players/213/213-zoom.jpg",
          Position.Forward
        ),
        new Player(
          "Karol Świderski",
          "https://pzpn.pl/public/system/images/reprezentacja_players/214/214-zoom.jpg",
          Position.Forward
        ),
        new Player(
          "Jan Bednarek",
          "https://pzpn.pl/public/system/images/reprezentacja_players/192/192-zoom.jpg",
          Position.Defender
        ),
        new Player(
          "Matty Cash",
          "https://pzpn.pl/public/system/images/reprezentacja_players/216/216-zoom.jpg",
          Position.Defender
        ),
        new Player(
          "Bartosz Bereszyński",
          "https://pzpn.pl/public/system/images/reprezentacja_players/193/193-zoom.jpg",
          Position.Defender
        ),
        new Player(
          "Bartosz Salamon",
          "https://pzpn.pl/public/system/images/reprezentacja_players/252/252-zoom.jpg",
          Position.Defender
        ),
        new Player(
          "Jakub Kiwior",
          "https://pzpn.pl/public/system/images/reprezentacja_players/198/198-zoom.jpg",
          Position.Defender
        ),
        new Player(
          "Piotr Zieliński",
          "https://pzpn.pl/public/system/images/reprezentacja_players/209/209-zoom.jpg",
          Position.Midfield
        ),
        new Player(
          "Jakub Kamiński",
          "https://pzpn.pl/public/system/images/reprezentacja_players/203/203-zoom.jpg",
          Position.Midfield
        ),
        new Player(
          "Krystian Bielik",
          "https://pzpn.pl/public/system/images/reprezentacja_players/218/218-zoom.jpg",
          Position.Midfield
        ),
        new Player(
          "Przemysław Frankowski",
          "https://pzpn.pl/public/system/images/reprezentacja_players/201/201-zoom.jpg",
          Position.Midfield
        ),
      ],
      playersForModal: []
    };
  },
};
</script>

<style scoped>

.players-content{
  display: flex;
  flex-direction: column;
  margin: 1rem;
}

.players {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
