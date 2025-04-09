export default class Kosar {
  #index;
  constructor(pElem, kosar, index) {
    this.kosar = kosar;
    this.#index = index;

    this.view();
    this.termElem = document.querySelector(".term:last-child");
    this.kosElem = this.termElem.querySelector(".kosarg: last-child");
    this.kosar();
    this.remove();
  }

  view() {
    let html = `<div class="term" style="width: 18rem;">
                  <img src=${this.termek.kep} class="card-img-top" alt="...">
                  <div class="card-body">
                  <h5 class="card-title">${this.termek.nev}</h5>
                  <p class="card-text">${this.termek.text}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item">${this.termek.ar}</li>
                  </ul>
                  <div class="card-body">
                  <button class="kosarg">Kosarba</button>
                  </div>
                  </div>`;
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
