export class Rezultat {

    constructor(public seznamBesed: any) {}

    allMatch(userSeznam: any): boolean {
        return (userSeznam.every((item: string[]) => item.every((beseda: string) => 
            this.besedaMatch(beseda, userSeznam.indexOf(item))))) ? true : false;
    }

    matchingClass(item: string, index: number): string {
        return this.besedaMatch(item, index) ? "user-beseda pravilna " + this.seznamBesed[index].clen : 
          "user-beseda";
      }
    
    besedaMatch(beseda: string, i: number) {
        return this.seznamBesed[i].besede.includes(beseda);
    }
}