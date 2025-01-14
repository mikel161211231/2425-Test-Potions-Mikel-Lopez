
import Cauldron from "../cauldron";
import Ingredient from "../ingredient.mjs";
import PotionIngredients from "../ingredients.mjs";


// ########################################################################################
// ########################################################################################
// ########################################################################################
// ANTIDOTE
// ########################################################################################
// ########################################################################################
// ########################################################################################

const diseases = require('../data/diseases')
const playerData = require('../data/playerData')


describe('Cuando todos los ingredientes llevan el efecto "Restore".', () => {

    describe('Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta, se creara el antidoto asociado a la enfermedad', () => {
        it('El nombre debera ser el correspondiente. Antidote of + "nombre de enfermedad"', () => {
            const ingredients = [];
            const ing1 = new Ingredient("Guardian's Essence", ["lesser_restore_hit_points"], 30, "/images/ingredients/restore/restore_16.webp")
            ingredients.push(ing1);
            ingredients.push(new Ingredient("Enduring Root", ["lesser_restore_constitution"], 20, "/images/ingredients/restore/restore_16.webp"));

            // const ingredientss = PotionIngredients.load(ingredients);


            const cauldron = new Cauldron(ingredients, diseases, playerData)
            const createdPotion = cauldron.createPotion(ingredients)
            expect(createdPotion.name).toBe(/Antidote of Gravechill/)

        });

        it('Los atributos tendran el valor que aparece en la enfermedad pero cambiado de signo, en su defecto, el rango de valores que se muestra en la tabla de creacion de pociones (si se ha empleado)"', () => {
            const ingredients = [];
            ingredients.push(new Ingredient("Guardian's Essence", ["lesser_restore_hit_points"], 30, "/images/ingredients/restore/restore_16.webp"));
            ingredients.push(new Ingredient("Enduring Root", ["lesser_restore_constitution"], 20, "/images/ingredients/restore/restore_16.webp"));



            const cauldron = new Cauldron(ingredients, diseases)
            const createdPotion = cauldron.createPotion(ingredients);

            expect(createdPotion.modifier.intelligence).toBe(0);
            expect(createdPotion.modifier.dexterity).toBe(0);
            expect(createdPotion.modifier.constitution).toBe(9);
            expect(createdPotion.modifier.insanity).toBe(0);
            expect(createdPotion.modifier.charisma).toBe(0);
            expect(createdPotion.modifier.strength).toBe(0);
            expect(createdPotion.modifier.hit_points).toBe(45);
        })
    });
});

describe('Cuando no todos los ingredientes llevan el efecto "Restore".', () => {
    it('No podremos crear un antidoto. El nombre de la pocion creada no llevara la palabra "Antidote"', () => {
        const ingredients = [];
        ingredients.push(new Ingredient("Guardian's Essence", ["lesser_restore_hit_points"], 30, "/images/ingredients/restore/restore_16.webp"));
        ingredients.push(new Ingredient("Enduring Root", ["lesser_damage_hit_points"], 20, "/images/ingredients/restore/restore_16.webp"));

        const cauldron = new Cauldron(ingredients, diseases)
        const createdPotion = cauldron.createPotion(ingredients)
        expect(createdPotion.name).not.toMatch(/Antidote/);
    });
});

