export const playerData = {
    "_id": "66dec7e0c23791be382fa672",
    "attributes": {
      "intelligence": 0,
      "dexterity": 0,
      "charisma": 16.2,
      "constitution": 9.239999999999998,
      "strength": 0,
      "insanity": 70,
      "resistence": 72.9
    },
    "equipment": {
      "weapon": {
        "modifiers": {
          "intelligence": 5,
          "dexterity": 0,
          "constitution": 0,
          "insanity": 8,
          "charisma": -6,
          "strength": 0
        },
        "_id": "668bca115319ea9afdff0725",
        "name": "Twirling Yo-yo",
        "description": "A seemingly playful toy with a hidden edge, the Twirling Yo-yo is a versatile weapon in the right hands. ",
        "type": "weapon",
        "image": "/images/equipment/weapons/weapon_init_3.png",
        "value": 10,
        "base_percentage": 15,
        "min_lvl": 1,
        "die_faces": 6,
        "die_modifier": 6,
        "die_num": 2
      },
      "armor": {
        "modifiers": {
          "intelligence": 4,
          "dexterity": 0,
          "constitution": 0,
          "insanity": 0,
          "charisma": 0,
          "strength": -6
        },
        "_id": "668bca105319ea9afdff06fa",
        "name": "Shabby Windbreaker",
        "description": "Ragged and torn.",
        "type": "armor",
        "image": "/images/equipment/armors/jacket_3.png",
        "value": 10,
        "defense": 25,
        "min_lvl": 1
      },
      "artifact": {
        "modifiers": {
          "intelligence": 10,
          "dexterity": 0,
          "constitution": 0,
          "insanity": 0,
          "charisma": -2,
          "strength": 0
        },
        "_id": "66a902e1b5831810990551d2",
        "name": "Crown of Eternal Wisdom",
        "description": "This golden crown enhances intellect and wisdom.",
        "type": "artifact",
        "image": "/images/equipment/artifacts/artifact_2.png",
        "value": 5,
        "min_lvl": 1
      },
      "antidote_potion": {
        "modifiers": {
          "hit_points": 0,
          "intelligence": 10,
          "dexterity": 0,
          "constitution": 0,
          "insanity": 0,
          "charisma": 0,
          "strength": 0
        },
        "_id": "668bca125319ea9afdff0761",
        "name": "Antidote of Ethereal Consumption",
        "description": "A mystical tonic made from binding agents and ethereal dust, anchoring the afflicted back to the material plane.",
        "type": "antidote",
        "image": "/images/equipment/potions/antidote/antidote_2.png",
        "value": 10,
        "recovery_effect": {
          "modifiers": {
            "hit_points": 0,
            "intelligence": -10,
            "dexterity": 0,
            "insanity": 6,
            "charisma": 0,
            "constitution": 0,
            "strength": 0
          },
          "_id": "6693fd5846527d0df5f0efeb",
          "name": "Ethereal Consumption",
          "description": "A spectral illness that causes the afflicted to slowly fade into the ethereal plane, losing touch with reality.",
          "type": "illness",
          "antidote_effects": [
            "restore_intelligence",
            "lesser_restore_insanity"
          ],
          "poison_effects": [
            "damage_intelligence",
            "lesser_damage_insanity"
          ]
        },
        "min_lvl": 1
      },
      "healing_potion": {
        "modifiers": {
          "hit_points": 40,
          "intelligence": -5,
          "dexterity": 0,
          "constitution": 0,
          "insanity": 0,
          "charisma": 0,
          "strength": 0
        },
        "_id": "668bca125319ea9afdff0754",
        "name": "Essence of Rejuvenation",
        "description": "This revitalizing potion restores energy and vitality to the drinker.",
        "type": "essence",
        "image": "/images/equipment/potions/healing/healing_2.png",
        "value": 10,
        "min_lvl": 1
      },
      "enhancer_potion": {
        "modifiers": {
          "intelligence": 0,
          "dexterity": 0,
          "constitution": 0,
          "insanity": 0,
          "charisma": 0,
          "strength": 20
        },
        "_id": "668bca125319ea9afdff0767",
        "name": "Elixir of Increase Strength",
        "description": "This robust elixir temporarily amplifies the drinker's physical power, significantly boosting muscle strength and stamina.\n\n\n",
        "type": "elixir",
        "image": "/images/equipment/potions/enhancer/enhancer_1.png",
        "value": 10,
        "duration": 2,
        "min_lvl": 1
      },
      "helmet": {
        "modifiers": {
          "intelligence": 0,
          "dexterity": 0,
          "constitution": 0,
          "insanity": 0,
          "charisma": 0,
          "strength": 0
        },
        "_id": "66d99aac7518eb4990035363",
        "name": "Eternal Guardian Helmet",
        "description": "A helmet blessed by the spirits.",
        "type": "helmet",
        "image": "/images/equipment/helmets/helmet_initial.png",
        "value": 5,
        "defense": 3,
        "min_lvl": 1
      },
      "shield": {
        "modifiers": {
          "intelligence": 0,
          "dexterity": 2,
          "constitution": 3,
          "insanity": 0,
          "charisma": 0,
          "strength": 5
        },
        "_id": "66f27c81c114335cadf45d70",
        "name": "Knight's Shield",
        "description": "A sturdy shield for knights.",
        "type": "shield",
        "image": "/images/equipment/shields/shield_initial.png",
        "value": 15,
        "defense": 10,
        "min_lvl": 1,
        "isUnique": false,
        "isActive": true
      },
      "boot": {
        "modifiers": {
          "intelligence": 0,
          "dexterity": 0,
          "constitution": 0,
          "insanity": 0,
          "charisma": 0,
          "strength": 0
        },
        "_id": "66d99a807518eb499003535f",
        "name": "Beggar's path",
        "description": "Cheap sinister leather shoes.",
        "type": "boot",
        "image": "/images/equipment/boots/boot_initial.png",
        "value": 5,
        "defense": 4,
        "min_lvl": 1
      },
      "ring": {
        "modifiers": {
          "intelligence": 2,
          "dexterity": 0,
          "constitution": 0,
          "insanity": 0,
          "charisma": 0,
          "strength": 2
        },
        "_id": "66a6d6c8dfbffe7e6503970f",
        "name": "Ring of Eternal Flame",
        "description": "A ring that burns with eternal fire.",
        "type": "ring",
        "image": "/images/equipment/rings/ring_1.png",
        "value": 10,
        "min_lvl": 1
      }
    },
    "inventory": {
      "helmets": [
        {
          "modifiers": {
            "intelligence": 2,
            "dexterity": 4,
            "constitution": 6,
            "insanity": 0,
            "charisma": 3,
            "strength": 6
          },
          "_id": "66f3b3ddc8cdd090db911d83",
          "name": "Helm of Valor",
          "description": "Infused with the courage of heroes.",
          "type": "helmet",
          "image": "/images/equipment/helmets/helmet_6.png",
          "value": 210,
          "defense": 29,
          "min_lvl": 12,
          "isUnique": false,
          "isActive": true
        }
      ],
      "weapons": [
        {
          "modifiers": {
            "intelligence": 12,
            "dexterity": 4,
            "constitution": 0,
            "insanity": 2,
            "charisma": 7,
            "strength": -19
          },
          "_id": "66f9caddd39859521ad20fe3",
          "name": "Blightbringer",
          "description": "A sword that spreads decay with each cut.",
          "type": "weapon",
          "image": "/images/equipment/weapons/sword_40.png",
          "value": 750,
          "base_percentage": 12,
          "min_lvl": 13,
          "die_faces": 12,
          "die_modifier": 1,
          "die_num": 9,
          "isUnique": false,
          "isActive": true
        },
        {
          "modifiers": {
            "intelligence": 3,
            "dexterity": 5,
            "constitution": 0,
            "insanity": 6,
            "charisma": 8,
            "strength": -18
          },
          "_id": "66f9caddd39859521ad20fec",
          "name": "Wraithblade",
          "description": "A spectral sword that cuts through the fabric of reality.",
          "type": "weapon",
          "image": "/images/equipment/weapons/sword_50.png",
          "value": 750,
          "base_percentage": 12,
          "min_lvl": 12,
          "die_faces": 12,
          "die_modifier": 5,
          "die_num": 7,
          "isUnique": false,
          "isActive": true
        }
      ],
      "armors": [
        {
          "modifiers": {
            "intelligence": 18,
            "dexterity": 12,
            "constitution": 0,
            "insanity": 0,
            "charisma": 8,
            "strength": -8
          },
          "_id": "66f297cae5be15925dc0abe6",
          "name": "Warden's Plate",
          "description": "Built for wardens who safeguard the gates.",
          "type": "armor",
          "image": "/images/equipment/armors/full_plate_3.png",
          "value": 650,
          "defense": 70,
          "min_lvl": 11,
          "isUnique": false,
          "isActive": true
        },
        {
          "modifiers": {
            "intelligence": 10,
            "dexterity": 15,
            "constitution": 0,
            "insanity": 0,
            "charisma": 5,
            "strength": -6
          },
          "_id": "66f297cae5be15925dc0abee",
          "name": "Dreadnought's Pride",
          "description": "Heavy armor that carries the weight of a ship.",
          "type": "armor",
          "image": "/images/equipment/armors/full_plate_12.png",
          "value": 500,
          "defense": 50,
          "min_lvl": 9,
          "isUnique": false,
          "isActive": true
        },
        {
          "modifiers": {
            "strength": -9,
            "constitution": 0,
            "dexterity": 30,
            "intelligence": 20,
            "insanity": 0,
            "charisma": 15
          },
          "_id": "66f3e0f7b32d7add9a08768d",
          "name": "Titanium Armor",
          "description": "An incredibly tough armor that withstands the strongest blows.",
          "type": "armor",
          "image": "/images/equipment/armors/heavy_armor_24.png",
          "value": 980,
          "defense": 82,
          "isUnique": false,
          "isActive": true,
          "min_lvl": 16
        }
      ],
      "shields": [],
      "artifacts": [
        {
          "modifiers": {
            "intelligence": 37,
            "dexterity": 35,
            "constitution": 49,
            "insanity": 14,
            "charisma": 23,
            "strength": 30
          },
          "_id": "66f66bb44a8f1157dab87b97",
          "name": "Mortimer's Hand",
          "description": "Shines with endless light.",
          "type": "artifact",
          "image": "/images/equipment/artifacts/artifact_64.png",
          "value": 12800,
          "min_lvl": 90,
          "isActive": false,
          "isUnique": true
        }
      ],
      "boots": [
        {
          "modifiers": {
            "intelligence": 2,
            "dexterity": 3,
            "constitution": 10,
            "insanity": 5,
            "charisma": 4,
            "strength": 6
          },
          "_id": "66f694d84a8f1157dab87bc3",
          "name": "Berserker's Fury Boots",
          "description": "Fuel your rage and strength.",
          "type": "boot",
          "image": "/images/equipment/boots/boot_11.png",
          "value": 400,
          "defense": 36,
          "min_lvl": 15,
          "isActive": true,
          "isUnique": false
        },
        {
          "modifiers": {
            "intelligence": 2,
            "dexterity": 8,
            "constitution": 6,
            "insanity": 3,
            "charisma": 2,
            "strength": 3
          },
          "_id": "66f694d84a8f1157dab87bcf",
          "name": "Venomous Boots",
          "description": "Step lightly, leave poison in your wake.",
          "type": "boot",
          "image": "/images/equipment/boots/boot_23.png",
          "value": 440,
          "defense": 39,
          "min_lvl": 16,
          "isActive": true,
          "isUnique": false
        },
        {
          "modifiers": {
            "intelligence": 7,
            "dexterity": 6,
            "constitution": 4,
            "insanity": 2,
            "charisma": 4,
            "strength": 2
          },
          "_id": "66f694d84a8f1157dab87bd2",
          "name": "Voidwalker Boots",
          "description": "Walk the line between worlds.",
          "type": "boot",
          "image": "/images/equipment/boots/boot_26.png",
          "value": 500,
          "defense": 45,
          "min_lvl": 19,
          "isActive": true,
          "isUnique": false
        }
      ],
      "rings": [
        {
          "modifiers": {
            "intelligence": 25,
            "dexterity": 15,
            "constitution": 30,
            "insanity": 10,
            "charisma": 20,
            "strength": 0
          },
          "_id": "66fa7a5185f0d4f8e349db27",
          "name": "Ring of the Timeless Echo",
          "description": "A ring that echoes with the sounds of the past.",
          "type": "ring",
          "image": "/images/equipment/rings/ring_52.png",
          "value": 3000,
          "min_lvl": 22,
          "isUnique": true,
          "isActive": false
        }
      ],
      "antidote_potions": [],
      "healing_potions": [],
      "enhancer_potions": [],
      "ingredients": [
        {
          "_id": "6702b44f76863c206a48cce1",
          "name": "Tranquility Flower",
          "description": "A tranquil flower that helps to alleviate insanity and calm the mind.",
          "value": 5,
          "effects": [
            "least_restore_insanity"
          ],
          "image": "/images/ingredients/restore/restore_12.webp",
          "type": "ingredient"
        },
        {
          "_id": "6702b4f876863c206a48cd22",
          "name": "Celestial Orchid",
          "description": "An orchid that grants enhanced charisma during rituals.",
          "value": 160,
          "effects": [
            "greater_boost_charisma"
          ],
          "image": "/images/ingredients/boost/boost_15.webp",
          "type": "ingredient"
        },
        {
          "_id": "6702b4f876863c206a48cd22",
          "name": "Celestial Orchid",
          "description": "An orchid that grants enhanced charisma during rituals.",
          "value": 160,
          "effects": [
            "greater_boost_charisma"
          ],
          "image": "/images/ingredients/boost/boost_15.webp",
          "type": "ingredient"
        },
        {
          "_id": "6702b46b76863c206a48ccff",
          "name": "Charm's Demise",
          "description": "An ingredient that diminishes charisma, making one less appealing.",
          "value": 40,
          "effects": [
            "lesser_damage_charisma"
          ],
          "image": "/images/ingredients/damage/damage_13.webp",
          "type": "ingredient"
        },
        {
          "_id": "6702b39d76863c206a48cccc",
          "name": "Ironbark Berry",
          "description": "A hard berry that enhances hit points by a small amount.",
          "value": 25,
          "effects": [
            "lesser_increase_hit_points"
          ],
          "image": "/images/ingredients/increase/increase_3.webp",
          "type": "ingredient"
        },
        {
          "_id": "6702b39d76863c206a48cccd",
          "name": "Moonleaf",
          "description": "A mystical leaf that offers a slight increase in hit points.",
          "value": 8,
          "effects": [
            "least_increase_hit_points"
          ],
          "image": "/images/ingredients/increase/increase_4.webp",
          "type": "ingredient"
        },
        {
          "_id": "6702b3b776863c206a48cccf",
          "name": "Witherleaf",
          "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
          "value": 260,
          "effects": [
            "greater_decrease_hit_points"
          ],
          "image": "/images/ingredients/decrease/decrease_1.webp",
          "type": "ingredient"
        },
        {
          "_id": "6702b3b776863c206a48cccf",
          "name": "Witherleaf",
          "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
          "value": 260,
          "effects": [
            "greater_decrease_hit_points"
          ],
          "image": "/images/ingredients/decrease/decrease_1.webp",
          "type": "ingredient"
        }
      ]
    },
    "name": "Mikel Lopez Diaz",
    "nickname": "Gastino Il Bitwise",
    "email": "mikel.lopez@ikasle.aeg.eus",
    "avatar": "https://lh3.googleusercontent.com/a/ACg8ocL1dzYBw_ARRY4QY0kQeVgo0FtuGYRvFFEgP2MM8u5ASK5GlpBo=s96-c",
    "classroom_Id": "102327629739306805490",
    "level": 18,
    "experience": 30200,
    "is_active": true,
    "profile": {
      "_id": "6687c31b7a5ce485a0eed478",
      "name": "Juggler",
      "description": "In the center of the square, where the crowd gathers, the Juggler displays his art. His hands move with hypnotic grace, controlling objects with a precision that seems to defy the laws of physics. He is not only a master of entertainment but also a shrewd strategist. Every move is calculated, every trick a distraction that hides his true intentions. The Juggler is a master of deception, capable of slipping into the shadows and disappearing in the blink of an eye, leaving behind a trail of mystery and awe.",
      "image": "/images/profiles/juggler.jpg",
      "attributes": [
        {
          "_id": "678582b991e7c11be1332b1e",
          "name": "Intelligence",
          "description": "The intelligence controls the chance of success when using a potion",
          "value": 5
        },
        {
          "_id": "678582b991e7c11be1332b1f",
          "name": "Dexterity",
          "description": "Manages the chance of success when using a melee weapon and the damage a missile weapon does",
          "value": 30
        },
        {
          "_id": "678582b991e7c11be1332b20",
          "name": "Insanity",
          "description": "Indicates the state of mental health of an adventurer. If the insanity is high, there will be more chance to make a fumble of a critical hit, and the resulting damage will be more critical. If the insanity is low, there will be less chance to make a fumble or a critical hit, and the resulting damage will be less critical",
          "value": 45
        },
        {
          "_id": "678582b991e7c11be1332b21",
          "name": "Charisma",
          "description": "Indicates the chance to attack first in the next round",
          "value": 17
        },
        {
          "_id": "678582b991e7c11be1332b22",
          "name": "Constitution",
          "description": "Indicates the number of Hit Points an adventurer starts with",
          "value": 13
        },
        {
          "_id": "678582b991e7c11be1332b23",
          "name": "Strength",
          "description": "Manages the chance of success when using a melee weapon, and the damage a melee weapon does",
          "value": 5
        }
      ]
    },
    "tasks": [
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "La Hambruna",
        "grade": 18,
        "selectedAssignment": "696068354158",
        "maxPoints": 22,
        "_id": "67090c242cb4a14cd6f7c27a"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "¿Qué sabes de desarrollo?",
        "grade": 0,
        "selectedAssignment": "696069128911",
        "maxPoints": 5,
        "_id": "67090c4e2cb4a14cd6f7c420"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "El Altar de la Experiencia - The Arrival",
        "grade": 7,
        "selectedAssignment": "685686685180",
        "maxPoints": 40,
        "_id": "67090cae2cb4a14cd6f7c738"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "Simon's Potions Implementation",
        "grade": 0,
        "selectedAssignment": "711980684441",
        "maxPoints": 25,
        "_id": "67090d3bd964b7483432c0d7"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU -  Authentication & Roles",
        "grade": 5,
        "selectedAssignment": "685768780197",
        "maxPoints": 5,
        "_id": "67090d8bd964b7483432c3ba"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU - Laboratory Access",
        "grade": 5,
        "selectedAssignment": "717971139101",
        "maxPoints": 5,
        "_id": "67090da3d964b7483432c654"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "La falsificación del Libro de las Caras",
        "grade": 0,
        "selectedAssignment": "696068583613",
        "maxPoints": 12,
        "_id": "67090dc8d964b7483432c92d"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "El Altar de la Experiencia -  Angelo's Laboratory",
        "grade": 17,
        "selectedAssignment": "709980072206",
        "maxPoints": 40,
        "_id": "67090df0d964b7483432ccb6"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU - Potions Creation",
        "grade": 5,
        "selectedAssignment": "696068830480",
        "maxPoints": 5,
        "_id": "671639d0c47d87a7d726b8d1"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU - Advanced Player Profile",
        "grade": 5,
        "selectedAssignment": "686027153267",
        "maxPoints": 5,
        "_id": "671639e0c47d87a7d726bac7"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU - Map screen",
        "grade": 5,
        "selectedAssignment": "721029623436",
        "maxPoints": 5,
        "_id": "671639eec47d87a7d726bd05"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "El destilador de pociones",
        "grade": 12,
        "selectedAssignment": "696069128873",
        "maxPoints": 12,
        "_id": "67163a18c47d87a7d726c0d5"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "El Altar de la Experiencia - The Potions Cauldron",
        "grade": 25,
        "selectedAssignment": "696068583674",
        "maxPoints": 40,
        "_id": "67163a36c47d87a7d726c6fa"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU -  SECURE TOWER ACCESS",
        "grade": 5,
        "selectedAssignment": "724238580333",
        "maxPoints": 5,
        "_id": "6731bccdf39e888968012273"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU - ARCANE PUSH NOTIFICATIONS",
        "grade": 5,
        "selectedAssignment": "724238452980",
        "maxPoints": 5,
        "_id": "6731bcdbf39e8889680126e8"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU - ACOLYTES IN THE TOWER",
        "grade": 5,
        "selectedAssignment": "724238257455",
        "maxPoints": 5,
        "_id": "6731bce9f39e888968012ba8"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU - EPIC MQTT BROKER & AWESOME SELF CERTIFICATES",
        "grade": 0,
        "selectedAssignment": "724237654224",
        "maxPoints": 5,
        "_id": "6731bcf9f39e8889680131d1"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "El Altar de la Experiencia - The Swamp Tower",
        "grade": 8,
        "selectedAssignment": "696068583703",
        "maxPoints": 50,
        "_id": "6731bd0ef39e8889680139cd"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "El manual de despliegue",
        "grade": 0,
        "selectedAssignment": "696069128945",
        "maxPoints": 10,
        "_id": "67331da3ed9c944b0984cee9"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "Todas las piezas encajan",
        "grade": 9,
        "selectedAssignment": "696068830469",
        "maxPoints": 15,
        "_id": "67331e15447c2302e9867e97"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "La Pócima de la Cordura",
        "grade": 5,
        "selectedAssignment": "696068354193",
        "maxPoints": 10,
        "_id": "67331e81447c2302e9868b4f"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "El Trago Infecto",
        "grade": 34,
        "selectedAssignment": "696068354203",
        "maxPoints": 40,
        "_id": "67331ec6447c2302e9869547"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "MORTIMER'S REVELATIONS I // HU - THE SEARCH OF ARCANE ARTIFACTS",
        "grade": 25,
        "selectedAssignment": "696068830536",
        "maxPoints": 25,
        "_id": "673d8cc000a15d40e84a1e2a"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU - THE SEARCH OF ARCANE ARTIFACTS",
        "grade": 15,
        "selectedAssignment": "696068830508",
        "maxPoints": 15,
        "_id": "674073179f0d9d166c718012"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU - MORTIMER VALIDATES THE SEARCH FOR THE ARTIFACTS",
        "grade": 15,
        "selectedAssignment": "696068830518",
        "maxPoints": 15,
        "_id": "6740732b9f0d9d166c71879c"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "MORTIMER'S REVELATIONS II // HU - MORTIMER VALIDATES THE SEARCH FOR THE ARTIFACTS",
        "grade": 25,
        "selectedAssignment": "696069128970",
        "maxPoints": 25,
        "_id": "674073739f0d9d166c7194fd"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "El Altar de la Experiencia - Los Artefactos Arcanos",
        "grade": 100,
        "selectedAssignment": "696068830489",
        "maxPoints": 100,
        "_id": "674073d99f0d9d166c71add2"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU - THE STORE OF AIVAN THE GREED",
        "grade": 45,
        "selectedAssignment": "727695354428",
        "maxPoints": 100,
        "_id": "6762aed8c75271cde0724527"
      },
      {
        "classroomId": "102327629739306805490",
        "courseWorkName": "HU - THE PESTILENTIAL  PARCHMENT",
        "grade": 5,
        "selectedAssignment": "724235843903",
        "maxPoints": 5,
        "_id": "6762b2da6482ab4586e58f8f"
      }
    ],
    "gold": 16804,
    "created_date": {
      "$date": "2024-09-09T10:03:12.124Z"
    },
    "socketId": "UkmrrgcWdioW_uMGAAAf",
    "isInsideLab": false,
    "isInsideTower": false,
    "isInsideHall": false,
    "obituaryDiscovered": true,
    "fcm_token": "e3FmiFzaRFm0RbVzq9Zp59:APA91bHAdbeS2ewZpspyh-ZR4A6zn3_WnFDfKw5WY8NnndtPtMtHe9ZM7yfowWZeIHFrvU5dufqwLlVLuQAl84luMq4U5f8WQ8fvbZCGfAJW78cn0vb3Rn0",
    "role": "ACOLYTE",
    "cardId": null,
    "__v": 110,
    "diseases": [
    ],
    "isBetrayer": false,
    "hasAngeloCaptured": false,
    "angeloInDungeon": true
  }