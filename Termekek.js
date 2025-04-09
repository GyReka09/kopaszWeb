import Termek from "./Termek.js";
import Kosar from "./Kosar.js";

export default class Termekek {
  #listt;
  #listk;
  constructor(pElem, ipElem, listt, listk) {
    this.#listt = listt;
    this.#listk = listk;
    this.pElem = pElem;
    this.ipElem = ipElem;
    this.viewKosar();
    this.viewTermek();
    this.kosarbaEvent();
    this.torolEvent();
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
      const Kosarak = new Kosar(this.ipElem, kelement, index);
    }
  }
  kosarbaEvent() {
    window.addEventListener("kosar", (event) => {
      console.log(event.detail);
      this.ipElem.innerHTML = "";
      this.#listk.push(this.#listt[event.detail]);
      this.viewKosar();
    });
  }

  torolEvent() {
    window.addEventListener("remove", (event) => {
      this.ipElem.innerHTML = "";
      console.log(event.detail);
      this.#listk.delete[this.#listk[event.detail]];
      this.viewKosar();
    });
  }
}
