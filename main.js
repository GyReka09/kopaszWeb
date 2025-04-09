import Termekek from "./Termekek.js";
import { termekLista } from "./termekLista.js";
import { kosar } from "./kosarLista.js";

const pElem = document.querySelector("article");
const ipElem = document.querySelector("aside");

const TERMEKEK = new Termekek(pElem, ipElem, termekLista, kosar);
