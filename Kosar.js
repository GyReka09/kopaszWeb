export default class Kosar {
  #index;
  constructor(ipElem, kosar, index) {
    this.kosar = kosar;
    this.#index = index;

    this.ipElem = ipElem;

    this.view();
    this.kosrElem = document.querySelector(".kosar:last-child");
    this.torElem = this.kosrElem.querySelector(".torol:last-child");
    this.torlunk();
    this.novel();
  }

  torlunk() {
    this.torElem.addEventListener("click", (event) => {
      console.log(this.#index);

      const e = new CustomEvent("torol", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }

  view() {
    let html = `<div class="kosar card mb-3" style="max-width: 540px;">

                    <div class="row g-0">
                    <div class="col-md-4">
                    <img src=${this.kosar.kep} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${this.kosar.nev}</h5>
                    <p class="card-text">${this.kosar.leiras}</p>
                    <p class="card-text"><small class="text-body-secondary">${this.kosar.ar}</small></p>
           
                    <button class="torol">Torol</button>
                    </div>
                    </div>
                    </div>
                    </div>`;
    this.ipElem.insertAdjacentHTML("beforeend", html);
  }

  novel() {
    this.db++;
  }
}
