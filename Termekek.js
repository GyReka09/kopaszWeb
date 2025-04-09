import Termek from "./Termek.js";
import Kosar from "./Kosar.js";
import Keres from "./Keres.js";

export default class Termekek {
  #listt;
  #listk;
  constructor(pElem, ipElem, listt, listk) {
    this.#listt = listt;
    this.#listk = listk;
    this.pElem = pElem;
    this.ipElem = ipElem;
    this.viewKeres();
    this.viewTermek();
    this.viewKosar();

    this.kosarbaEvent();
    this.torolEvent();
    this.keresEvent();
  }

  viewKeres(){
    new Keres(this.pElem)
  }

  viewTermek() {
    this.pElem.innerHTML = "";

    for (let index = 0; index < this.#listt.length; index++) {
      const element = this.#listt[index];
      const Termekek = new Termek(this.pElem, element, index);
    }
  }
  viewKosar() {
    this.ipElem.innerHTML = "";
    for (let index = 0; index < this.#listk.length; index++) {
      const kelement = this.#listk[index];
      const Kosarak = new Kosar(this.ipElem, kelement, index, this.#listk);
    }
  }


    kosarbaEvent() {
      window.addEventListener("kosar", (event) => {
        console.log(event.detail);
        this.ipElem.innerHTML = "";
        let van = false;
        if (this.#listk.length === 0) {
          this.#listt[event.detail].db = 0;
          this.#listk.push(this.#listt[event.detail]);
        }
        for (let index = 0; index < this.#listk.length; index++) {
          if (this.#listk[index].nev === this.#listt[event.detail].nev) {
            this.#listk[index].db++;
            van = true;
            break;
          }
        }
   
        if (van === false) {
          this.#listk.push(this.#listt[event.detail]);
        }
        this.viewKosar();
      });
    }

  torolEvent() {
    window.addEventListener("torol", (event) => {
      console.log("Remove event triggered");
      console.log("Item index to be removed:", event.detail);
      console.log("Before splice:", this.#listk);

      // Remove the item from the listk array
      this.#listk.splice(event.detail, 1);
      console.log("After splice:", this.#listk);

      // Re-render the cart view
      this.viewKosar();
    });
  }

  keresEvent(){
    window.addEventListener("keres",(event)=>{
      console.log(event.detail)
      let x = event.detail;
      for (let index = 0; index < this.#listt.length; index++) {
        if (x === this.#listt[index].nev) {

          
        }
        
      }
    })
  }
}
