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

  viewTodos() {
    this.pElem.innerHTML = "";

    for (let index = 0; index < this.#list.length; index++) {
      if (this.#list[index].exists === true) {
        const element = this.#list[index];
        const TODO = new Todo(element.name, this.pElem, index);
        if (this.#list[index].green === true) {
          TODO.textElem.classList.add("green");
        }
      }
    }
  }

  viewInput() {
    new TodoInput(this.ipElem);
  }

  removeEvent() {
    window.addEventListener("remove", (event) => {
      this.pElem.innerHTML = "";
      console.log(event.detail);
      this.#list[event.detail].exists = false;
      this.viewTodos();
    });
  }

  addEvent() {
    window.addEventListener("add", (event) => {
      console.log(event.detail);
      let y = this.#list.length + 1 + "." + event.detail;
      let x = { name: y, exists: true, green: false };
      this.#list.push(x);
      this.viewTodos();
    });
  }

  readyEvent() {
    window.addEventListener("ready", (event) => {
      this.pElem.innerHTML = "";
      console.log(event.detail);
      this.#list[event.detail].green = true;
      this.viewTodos();
    });
  }
}
