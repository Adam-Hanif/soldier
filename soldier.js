const soldier = {
  name: "Djon",
  health: 10,
  weapon: {
    nameWeapon: "АК-47",
    quantityСartridges: 30,
  },
  supplies: 3,
  shoots: function () {
    if (this.weapon.quantityСartridges > 0) {
      this.weapon.quantityСartridges--;
      return console.log("бах бах");
    } else {
      return console.log("обойма пуста. Перезаредитесь.");
    }
  },
  reloads: function () {
    this.weapon.quantityСartridges = 30;
    this.supplie--;
  },
  injured: function () {
    if (this.health > 0) {
      this.health--;
      return console.log(this.health);
    } else {
      return console.log("Ты проиграл.");
    }
  },
};

// console.log(soldier.health);
