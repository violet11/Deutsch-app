export class RandomSeznam {

  ustvariRandomSeznam(steviloRandom: number, skupni: string[]) {
    let item = "";
    let randomSeznam: string[] = [];
    let x = 0;
    if (skupni.length >= steviloRandom) {
      while (x < steviloRandom) {
          item = skupni[Math.floor(Math.random() * skupni.length)];
          (randomSeznam.splice(x, 0, item), skupni.splice(skupni.indexOf(item), 1), x++);
      }
    }
    return randomSeznam;
  }
}