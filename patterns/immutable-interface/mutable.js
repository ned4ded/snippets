class Point2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  setX(x) {
    this.x = x;
    return this.getX();
  }

  setY(y) {
    this.y = y;
    return this.getY();
  }
}
