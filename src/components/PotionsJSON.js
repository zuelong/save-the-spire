let potions = `{
    "Ancient Potion": {
        "NAME": "Ancient Potion",
        "DESCRIPTION": "Gain #b1 #yArtifact."
    },
    "Block Potion": {
        "NAME": "Block Potion",
        "DESCRIPTION": "Gain #b12 #yBlock."
    },
    "Dexterity Potion": {
        "NAME": "Dexterity Potion",
        "DESCRIPTION": "Gain #b2 #yDexterity."
    },
    "Elixir": {
        "NAME": "Elixir",
        "DESCRIPTION": "#yExhaust all #yStatus and #yCurse cards from your hand."
    },
    "Energy Potion": {
        "NAME": "Energy Potion",
        "DESCRIPTION": "Gain #b2 Energy."
    },
    "Explosive Potion": {
        "NAME": "Explosive Potion",
        "DESCRIPTION": "Deal #b10 damage to ALL enemies."
    },
    "Fire Potion": {
        "NAME": "Fire Potion",
        "DESCRIPTION": "Deal #b20 damage."
    },
    "Health Potion": {
        "NAME": "Health Potion",
        "DESCRIPTION": "Heal #b9 HP."
    },
    "Poison Potion": {
        "NAME": "Poison Potion",
        "DESCRIPTION": "Apply #b6 #yPoison."
    },
    "Potion Slot": {
        "NAME": "Potion Slot",
        "DESCRIPTION": "Use potions during combat to gain #gbonuses or #rhinder enemies."
    },
    "Regen Potion": {
        "NAME": "Regen Potion",
        "DESCRIPTION": "Heal #b3 #yHP at the end of each turn for #b5 turns."
    },
    "Strength Potion": {
        "NAME": "Strength Potion",
        "DESCRIPTION": "Gain #b2 #yStrength."
    },
    "Swift Potion": {
        "NAME": "Swift Potion",
        "DESCRIPTION": "Draw #b3 cards."
    },
    "Weak Potion": {
        "NAME": "Weak Potion",
        "DESCRIPTION": "Apply #b3 #yWeak."
    }
}
`;

potions = JSON.parse(potions);

export default potions;
