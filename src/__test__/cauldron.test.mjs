
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

// // 
// // POISON
// // 


describe('Cuando todos los ingredientes llevan el efecto "Damage".', () => {
    describe('Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta, se creara el poison asociado a la enfermedad', () => {
        it('El nombre debera ser el correspondiente. Poison of + "nombre de enfermedad"', () => {
            it('El nombre debera ser el correspondiente. Antidote of + "nombre de enfermedad"', () => {
                const ingredients = [];
                ingredients.push(new Ingredient("Guardian's Essence", ["lesser_damage_hit_points"], 30, "/images/ingredients/restore/restore_16.webp"));
                ingredients.push(new Ingredient("Enduring Root", ["lesser_damage_constitution"], 20, "/images/ingredients/restore/restore_16.webp"));

                const cauldron = new Cauldron(ingredients, diseases)
                const createdPotion = cauldron.createPotion(ingredients)
                expect(createdPotion.name).toBe('Poison of GraveChill');

            });
        });

        it('Los atributos tendran el valor que aparece en la enfermedad, en su defecto, el rango de valores que se muestra en la tabla de creacion de pociones (si se ha empleado)"', () => {
            const ingredients = [];
            ingredients.push(new Ingredient("Guardian's Essence", ["lesser_damage_hit_points"], 30, "/images/ingredients/restore/restore_16.webp"));
            ingredients.push(new Ingredient("Enduring Root", ["lesser_damage_constitution"], 20, "/images/ingredients/restore/restore_16.webp"));

            const cauldron = new Cauldron(ingredients, diseases)
            const createdPotion = cauldron.createPotion(ingredients);

            expect(createdPotion.modifier.intelligence).toBe(0);
            expect(createdPotion.modifier.dexterity).toBe(0);
            expect(createdPotion.modifier.constitution).toBe(-9);
            expect(createdPotion.modifier.insanity).toBe(0);
            expect(createdPotion.modifier.charisma).toBe(0);
            expect(createdPotion.modifier.strength).toBe(0);
            expect(createdPotion.modifier.hit_points).toBe(-45);
        })
    });
});

describe('Cuando todos los ingredientes llevan el efecto "Damage".', () => {
    it('No podremos crear un antidoto. El nombre de la pocion creada no llevara la palabra "Poison"', () => {
        const ingredients = [];
        ingredients.push(new Ingredient("Guardian's Essence", ["lesser_restore_hit_points"], 30, "/images/ingredients/restore/restore_16.webp"));
        ingredients.push(new Ingredient("Enduring Root", ["lesser_restore_constitution"], 20, "/images/ingredients/restore/restore_16.webp"));

        const cauldron = new Cauldron(ingredients, diseases)
        const createdPotion = cauldron.createPotion(ingredients)
        expect(createdPotion.name).not.toMatch(/Poison/);
    });
});



// ########################################################################################
// ########################################################################################
// ########################################################################################
// ELIXIR
// ########################################################################################
// ########################################################################################
// ########################################################################################


describe('Cuando el numero de ingredientes es 2-4', () => {
    describe('Cuando los efectos de ingredientes asociados llevarán los nombres "Boost"', () => {
        describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX...)', () => {
            describe('Cuando todos los efectos son de tipo least', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Radiant Petal", ["least_boost_charisma"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Radiant Petal", ["least_boost_charisma"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.charisma).toBe(5);

                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Radiant Petal", ["least_boost_charisma"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Radiant Petal", ["least_boost_charisma"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(1);
                })
            });
            describe('Cuando todos los efectos son de tipo lesser', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];

                    ingredients.push(new Ingredient("Frostmoss", ["lesser_boost_dexterity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Frostmoss", ["lesser_boost_dexterity"], 20, "/images/ingredients/restore/restore_16.webp"));


                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.dexterity).toBe(10);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Frostmoss", ["lesser_boost_dexterity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Frostmoss", ["lesser_boost_dexterity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(1);
                })
            });
            describe('Cuando todos los efectos son de tipo normal', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Thunderleaf", ["boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.strength).toBe(15);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Thunderleaf", ["boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));


                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(2);
                })
            });
            describe('Cuando todos los efectos son de tipo greater', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];

                    ingredients.push(new Ingredient("Silverthorn", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Silverthorn", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.strength).toBe(20);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Silverthorn", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Silverthorn", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(3);
                })
            });
            describe('Cuando todos los efectos son de tipo diferente', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];

                    ingredients.push(new Ingredient("Silverthorn", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.strength).toBe(15);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Silverthorn", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(2);
                })
            });

            it('El nombre de la pocion será: Modifier + Attribute + Elixir (El modificador será el que corresponda con el value correspondiente según la tabla)', () => {
                const ingredients = [];

                ingredients.push(new Ingredient("Silverthorn", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                ingredients.push(new Ingredient("Silverthorn", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));

                const cauldron = new Cauldron(ingredients, diseases)
                const createdPotion = cauldron.createPotion(ingredients)
                expect(createdPotion.modifier.strength).toBe(/Greater Strength Elixir/);
            })
        });
        describe('Cuando no todos los ingredientes tienen el mismo atributo (INT, DEX...)', () => {
            it('No podremos crear el elixir. el nombre de la pocion creada no llevara la palabra "Elixir"', () => {
                const ingredients = [];
                ingredients.push(new Ingredient("Silverthorn", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                ingredients.push(new Ingredient("Silverthorn", ["greater_boost_intelligence"], 20, "/images/ingredients/restore/restore_16.webp"));

                const cauldron = new Cauldron(ingredients, diseases)
                const createdPotion = cauldron.createPotion(ingredients)
                expect(createdPotion.name).toMatch(/Elixir/);
            })
        })
    });
    describe('Cuando los efectos de ingredientes asociados llevarán los nombres "Calm"', () => {
        describe('Cuando todos los ingredientes tienen el mismo atributo (INS)', () => {
            describe('Cuando todos los efectos son de tipo least', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Radiant Petal", ["least_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Radiant Petal", ["least_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.charisma).toBe(-5);

                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Radiant Petal", ["least_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Radiant Petal", ["least_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(1);
                })
            });
            describe('Cuando todos los efectos son de tipo lesser', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];

                    ingredients.push(new Ingredient("Frostmoss", ["lesser_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Frostmoss", ["lesser_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));


                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.dexterity).toBe(-10);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Frostmoss", ["lesser_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Frostmoss", ["lesser_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(1);
                })
            });
            describe('Cuando todos los efectos son de tipo normal', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Thunderleaf", ["calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.strength).toBe(-15);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Thunderleaf", ["calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));


                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(2);
                })
            });
            describe('Cuando todos los efectos son de tipo greater', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];

                    ingredients.push(new Ingredient("Silverthorn", ["greater_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Silverthorn", ["greater_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.strength).toBe(-20);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Silverthorn", ["greater_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Silverthorn", ["greater_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(3);
                })
            });
            describe('Cuando todos los efectos son de tipo diferente', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];

                    ingredients.push(new Ingredient("Silverthorn", ["calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["greater_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.strength).toBe(-15);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Silverthorn", ["calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["greater_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(2);
                })
            });

            it('El nombre de la pocion será: Modifier + Attribute + Elixir (El modificador será el que corresponda con el value correspondiente según la tabla)', () => {
                const ingredients = [];

                ingredients.push(new Ingredient("Silverthorn", ["greater_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                ingredients.push(new Ingredient("Silverthorn", ["greater_calm_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                const cauldron = new Cauldron(ingredients, diseases)
                const createdPotion = cauldron.createPotion(ingredients)
                expect(createdPotion.modifier.strength).toBe(/Greater Strength Elixir/);
            })
        });
        describe('Cuando no todos los ingredientes tienen el mismo atributo (INT, DEX...)', () => {
            it('No podremos crear el elixir. el nombre de la pocion creada no llevara la palabra "Elixir"', () => {
                const ingredients = [];
                ingredients.push(new Ingredient("Silverthorn", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                ingredients.push(new Ingredient("Silverthorn", ["greater_boost_intelligence"], 20, "/images/ingredients/restore/restore_16.webp"));

                const cauldron = new Cauldron(ingredients, diseases)
                const createdPotion = cauldron.createPotion(ingredients)
                expect(createdPotion.name).toMatch(/Elixir/);
            })
        })
    });
});


// ########################################################################################
// ########################################################################################
// ########################################################################################
// VENOM
// ########################################################################################
// ########################################################################################
// ########################################################################################

describe('Cuando el numero de ingredientes es 2-4', () => {
    describe('Cuando los efectos de ingredientes asociados llevarán los nombres "SetBack"', () => {
        describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX...)', () => {
            describe('Cuando todos los efectos son de tipo least', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Radiant Petal", ["least_setback_charisma"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Radiant Petal", ["least_setback_charisma"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.charisma).toBe(-5);

                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Radiant Petal", ["least_setback_charisma"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Radiant Petal", ["least_setback_charisma"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(1);
                })
            });
            describe('Cuando todos los efectos son de tipo lesser', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];

                    ingredients.push(new Ingredient("Frostmoss", ["lesser_setback_dexterity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Frostmoss", ["lesser_setback_dexterity"], 20, "/images/ingredients/restore/restore_16.webp"));


                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.dexterity).toBe(-10);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Frostmoss", ["lesser_setback_dexterity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Frostmoss", ["lesser_setback_dexterity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(1);
                })
            });
            describe('Cuando todos los efectos son de tipo normal', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Thunderleaf", ["setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.strength).toBe(-15);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Thunderleaf", ["setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));


                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(2);
                })
            });
            describe('Cuando todos los efectos son de tipo greater', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];

                    ingredients.push(new Ingredient("Silverthorn", ["greater_setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Silverthorn", ["greater_setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.strength).toBe(-20);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Silverthorn", ["greater_setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Silverthorn", ["greater_setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(3);
                })
            });
            describe('Cuando todos los efectos son de tipo diferente', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];

                    ingredients.push(new Ingredient("Silverthorn", ["greater_setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["greater_setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.strength).toBe(-15);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Silverthorn", ["greater_setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["greater_setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(2);
                })
            });

            it('El nombre de la pocion será: Modifier + Attribute + Venom (El modificador será el que corresponda con el value correspondiente según la tabla)', () => {
                const ingredients = [];

                ingredients.push(new Ingredient("Silverthorn", ["greater_setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                ingredients.push(new Ingredient("Silverthorn", ["greater_setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));

                const cauldron = new Cauldron(ingredients, diseases)
                const createdPotion = cauldron.createPotion(ingredients)
                expect(createdPotion.modifier.strength).toBe(/Greater Strength Venom/);
            })
        });
        describe('Cuando no todos los ingredientes tienen el mismo atributo (INT, DEX...)', () => {
            it('No podremos crear el elixir. el nombre de la pocion creada no llevara la palabra "Elixir"', () => {
                const ingredients = [];
                ingredients.push(new Ingredient("Silverthorn", ["greater_setback_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                ingredients.push(new Ingredient("Silverthorn", ["greater_setback_intelligence"], 20, "/images/ingredients/restore/restore_16.webp"));

                const cauldron = new Cauldron(ingredients, diseases)
                const createdPotion = cauldron.createPotion(ingredients)
                expect(createdPotion.name).toMatch(/Venom/);
            })
        })
    });
    describe('Cuando los efectos de ingredientes asociados llevarán los nombres "Frenzy"', () => {
        describe('Cuando todos los ingredientes tienen el mismo atributo (INS)', () => {
            describe('Cuando todos los efectos son de tipo least', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Radiant Petal", ["least_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Radiant Petal", ["least_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.charisma).toBe(5);

                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Radiant Petal", ["least_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Radiant Petal", ["least_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(1);
                })
            });
            describe('Cuando todos los efectos son de tipo lesser', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];

                    ingredients.push(new Ingredient("Frostmoss", ["lesser_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Frostmoss", ["lesser_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));


                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.dexterity).toBe(10);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Frostmoss", ["lesser_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Frostmoss", ["lesser_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(1);
                })
            });
            describe('Cuando todos los efectos son de tipo normal', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Thunderleaf", ["frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.strength).toBe(15);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Thunderleaf", ["frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));


                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(2);
                })
            });
            describe('Cuando todos los efectos son de tipo greater', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];

                    ingredients.push(new Ingredient("Silverthorn", ["greater_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Silverthorn", ["greater_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.strength).toBe(20);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Silverthorn", ["greater_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Silverthorn", ["greater_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(3);
                })
            });
            describe('Cuando todos los efectos son de tipo diferente', () => {
                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al multiplo de 5 inferior.', () => {
                    const ingredients = [];

                    ingredients.push(new Ingredient("Silverthorn", ["frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["greater_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.modifier.strength).toBe(-15);
                })
                it('La duración será la media de duraciones de los efectos de cada ingrediente, redondeada para abajo', () => {
                    const ingredients = [];
                    ingredients.push(new Ingredient("Silverthorn", ["frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                    ingredients.push(new Ingredient("Thunderleaf", ["greater_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                    const cauldron = new Cauldron(ingredients, diseases)
                    const createdPotion = cauldron.createPotion(ingredients)
                    expect(createdPotion.duration).toBe(2);
                })
            });

            it('El nombre de la pocion será: Modifier + Attribute + VENOM (El modificador será el que corresponda con el value correspondiente según la tabla)', () => {
                const ingredients = [];

                ingredients.push(new Ingredient("Silverthorn", ["greater_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));
                ingredients.push(new Ingredient("Silverthorn", ["greater_frenzy_insanity"], 20, "/images/ingredients/restore/restore_16.webp"));

                const cauldron = new Cauldron(ingredients, diseases)
                const createdPotion = cauldron.createPotion(ingredients)
                expect(createdPotion.modifier.strength).toBe(/Greater Strength Venom/);
            })
        });
        describe('Cuando no todos los ingredientes tienen el mismo atributo (INT, DEX...)', () => {
            it('No podremos crear el Venom. el nombre de la pocion creada no llevara la palabra "Venom"', () => {
                const ingredients = [];
                ingredients.push(new Ingredient("Silverthorn", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                ingredients.push(new Ingredient("Silverthorn", ["greater_boost_intelligence"], 20, "/images/ingredients/restore/restore_16.webp"));

                const cauldron = new Cauldron(ingredients, diseases)
                const createdPotion = cauldron.createPotion(ingredients)
                expect(createdPotion.name).not.toMatch(/Venom/);
            })
        })
    });
});

// ########################################################################################
// ########################################################################################
// ########################################################################################
// Failed Potion
// ########################################################################################
// ########################################################################################
// ########################################################################################

describe('Cuando los efectos de ingredientes asociados llevaran los nombres "Cleanse Parchment"', () => {
    it('Se creara la pocion de limpieza', () => {
        const ingredients = [];
                ingredients.push(new Ingredient("Dragon's Blood Resin", ["cleanse_parchment"], 20, "/images/ingredients/restore/restore_16.webp"));
                ingredients.push(new Ingredient("Gloomshade Moss", ["cleanse_parchment"], 20, "/images/ingredients/restore/restore_16.webp"));

                const cauldron = new Cauldron(ingredients, diseases)
                const createdPotion = cauldron.createPotion(ingredients)
                expect(createdPotion.name).toMatch(/cleanse_parchment/);
    })
})


// ########################################################################################
// ########################################################################################
// ########################################################################################
// Failed Potion
// ########################################################################################
// ########################################################################################
// ########################################################################################

describe('Cuando no se cumplen los requisitos para crear una pocion', () => {
    it('Si no se cumple cualquiera de las condiciones de creacion anteriores crearemos el Tonic of donwfall', () => {
        const ingredients = [];
                ingredients.push(new Ingredient("Silverthorn", ["greater_boost_strength"], 20, "/images/ingredients/restore/restore_16.webp"));
                ingredients.push(new Ingredient("Silverthorn", ["least_increase_intelligence"], 20, "/images/ingredients/restore/restore_16.webp"));

                const cauldron = new Cauldron(ingredients, diseases)
                const createdPotion = cauldron.createPotion(ingredients)
                expect(createdPotion.name).toMatch(/Tonic of Downfall/);
    })
})