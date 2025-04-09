export default class Keres{
    constructor(pElem){
        this.pElem = pElem;
        this.view();
        this.inputElem = document.querySelector("#text")
        this.buttonElem = document.getElementById("button")
        this.add();
        
    }
    view(){
        let html = `<div class="input">
                    <input type="text" id="text">
                    <button id="button">add</button>
                    </div>`;
        this.iPElem.insertAdjacentHTML("beforeend",html)
    }

    add(){
        this.buttonElem.addEventListener("click",(event)=>{
            console.log(this.inputElem.value)          

            const e = new CustomEvent("keres", {detail:this.inputElem.value})
            window.dispatchEvent(e);
        })
    }
}