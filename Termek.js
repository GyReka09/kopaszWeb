export default class Termek {
  #index;
  constructor(pElem, termek, index) {
    this.termek = termek;
    this.#index = index;

    this.view();
    this.termElem = document.querySelector(".term:last-child");
    this.kosElem = this.termElem.querySelector(".kosarg: last-child");
    this.kosar();
  }

  view() {
    let html = `<p class="text">${this.kep}
                  <button class="ready">Ok</button>
                  <button class="delete">Del</button>
              </p>`;
    this.pElem.insertAdjacentHTML("beforeend", html);
  }

  kosar() {
    this.kosElem.addEventListener("click", (event) => {
      console.log(this.#index);

      const e = new CustomEvent("kosar", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
