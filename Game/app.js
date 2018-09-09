new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits for " + damage
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    specialAttack: function() {
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Player special hit for " + damage
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    heal: function() {
      this.playerHealth <= 90
        ? (this.playerHealth += 10)
        : (this.playerHealth = 100);
      this.turns.unshift({
        isPlayer: true,
        text: "Player heal for 10 points"
      });
      this.monsterAttack();
      this.checkWin();
    },
    monsterAttack: function() {
      var damage = this.calculateDamage(5, 15);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: "Monster hits for " + damage
      });
      this.checkWin();
    },
    calculateDamage: function(min, max) {
      var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      return damage;
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
