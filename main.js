import Termekek from "./Termekek.js";
import { termekLista } from "./termekLista.js";
import { kosar } from "./kosarLista.js";

const pElem = document.querySelector(".termekunk");
const ipElem = document.querySelector(".tied");

const TERMEKEK = new Termekek(pElem, ipElem, termekLista, kosar);
