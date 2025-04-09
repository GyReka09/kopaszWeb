import Termek from "./Termek.js";
import TodoInput from "./TodoInput.js";

export default class Termekek {
  #list;
  constructor(pElem, ipElem, list) {
    this.#list = list;
    this.pElem = pElem;
    this.ipElem = ipElem;
    this.viewInput();
    this.viewTodos();
    this.addEvent();
    this.removeEvent();
    this.readyEvent();
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
