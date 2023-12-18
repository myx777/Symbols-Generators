export default class Team {
  constructor() {
    this.members = new Set();
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
  }

  * [Symbol.iterator]() {
    for (const char of this.members) {
      yield char;
    }
  }
}
