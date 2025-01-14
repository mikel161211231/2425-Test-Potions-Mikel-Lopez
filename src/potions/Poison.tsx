import { Poison_Values } from "./constants/constants_potions";
import { Disease } from "./interfaces/Disease";
import { Modifiers } from "./interfaces/Modifier";
import Potion from "./Potion";



export default class Poison extends Potion {

    type: string;
    value: number;
    image: string;
    min_lvl: number;
    description: string;

    // Constructor de la clase Poison que hereda de Potion
    constructor(name: string, modifier: Modifiers) {
        // Pasar los parametros a la clase padre
        super(name, modifier);
        this.type = "poison";
        this.value = 0;
        this.description = "This is a poison!!!";
        this.image = "/images/equipment/potions/antidote/antidote_"+ (Math.floor(Math.random()*3) + 1) +".png";
        this.min_lvl = 1;
    }


    static create(disease: Disease) {


        // Se crea el String completo del nombre de la pocion
        const name = "Poison of " + disease.name;

        // Se crea el objeto modifiers para la creacion de la pocion con el valor calculado anteriormente
        const modifiers: Modifiers = createModifierObjectWithTheCorrectValues(disease);
    

        return (new Poison(name, modifiers));
    }
}


// Funcion que añade el valor al atributo correcto
function createModifierObjectWithTheCorrectValues(disease: Disease) {
    const modifiers: Modifiers = {
        "hit_points": 0,
        "intelligence": 0,
        "dexterity": 0,
        "insanity": 0,
        "charisma": 0,
        "constitution": 0,
        "strength": 0,
    }


    // Los atributos que no tienen rango para crear un valor aleatorio
    modifiers.charisma = disease.modifiers.charisma;
    modifiers.dexterity = disease.modifiers.dexterity;
    modifiers.constitution = disease.modifiers.constitution;
    modifiers.strength = disease.modifiers.strength;
    modifiers.hit_points = disease.modifiers.hit_points;
    modifiers.insanity = disease.modifiers.insanity;
    modifiers.intelligence = disease.modifiers.intelligence;



    return modifiers;
}
