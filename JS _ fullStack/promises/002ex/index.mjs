import SpaceShip from "./SpaceShip.js";
import Space_enginer from "./Space_enginer.js";

const sophia = new SpaceShip("sophia", 10, 5);
const amstrdea = new SpaceShip("amsterdã", 14, 10);
const dwarfStart = new SpaceShip("estrela-anã", 20, 4);

const sophiaEgine = new Space_enginer(sophia);
const amstrdeaEgine = new Space_enginer(amstrdea);
const dwarfStartEgine = new Space_enginer(dwarfStart);

var n1 = sophiaEgine.turOn();
var n2 = amstrdeaEgine.turOn();
var n3 = dwarfStartEgine.turOn();

console.log(n1, n2, n3);
