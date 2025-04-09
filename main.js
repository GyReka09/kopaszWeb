import Termekek from "./Termekek.js";
import { termekLista } from "./TermekLista.js";
import { kosarLista } from "./kosarLista.js";

const pElem = document.querySelector("article");
const ipElem = document.querySelector("aside");

const TERMEKEK = new Termekek(pElem, ipElem, termekLista, kosarLista);
