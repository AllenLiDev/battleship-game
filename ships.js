class Ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.tiles = [];
  }

  resetTiles() {
    this.tiles.length = this.size;
    this.tiles.fill(0);
    console.log(this.tiles)
  }
}

const ship1 = new Ship('battlecruiser', 5);
ship1.resetTiles()
