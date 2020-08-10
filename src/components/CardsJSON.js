let cards = `{
    "Anger": {
        "name": "Anger",
        "cost": 0,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL Place a copy of this card into your discard pile."]
    },
    "Armaments": {
        "name": "Armaments",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Gain !B! Block. NL Upgrade a card in your hand for the rest of combat.", "Gain !B! Block. NL Upgrade ALL cards in your hand for the rest of combat."]
    },
    "Barricade": {
        "name": "Barricade",
        "cost": 3,
        "type": "POWER",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["Block no longer expires at the start of your turn."]
    },
    "Bash": {
        "name": "Bash",
        "cost": 2,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "BASIC",
        "descriptions": ["Deal !D! damage. NL Apply !M! Vulnerable."]
    },
    "Battle Trance": {
        "name": "Battle Trance",
        "cost": 0,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Draw !M! cards. NL You cannot draw any additional cards this turn."]
    },
    "Berserk": {
        "name": "Berserk",
        "cost": 1,
        "type": "POWER",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["If your HP is at or below 50%, gain [R] at the start of each turn."]
    },
    "Blood for Blood": {
        "name": "Blood for Blood",
        "cost": 4,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Costs 1 less [R] NL for each time you lose HP in combat. NL Deal !D! damage."]
    },
    "Bloodletting": {
        "name": "Bloodletting",
        "cost": 0,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Gain [R]. NL Lose 3 HP.", "Gain [R] [R]. NL Lose 3 HP."]
    },
    "Bludgeon": {
        "name": "Bludgeon",
        "cost": 3,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["Deal !D! damage."]
    },
    "Body Slam": {
        "name": "Body Slam",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Deal damage equal to your current Block.", " NL (Deals !D! damage.)"]
    },
    "Brutality": {
        "name": "Brutality",
        "cost": 0,
        "type": "POWER",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["At the start of your turn, lose 1 HP and draw 1 card.", "Innate. NL At the start of your turn, lose 1 HP and draw 1 card."]
    },
    "Burning Pact": {
        "name": "Burning Pact",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Exhaust 1 card. NL Draw !M! cards."]
    },
    "Carnage": {
        "name": "Carnage",
        "cost": 2,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Ethereal. NL Deal !D! damage."]
    },
    "Clash": {
        "name": "Clash",
        "cost": 0,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Can only be played if every card in your hand is an Attack. NL Deal !D! damage."]
    },
    "Cleave": {
        "name": "Cleave",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage to ALL enemies."]
    },
    "Clothesline": {
        "name": "Clothesline",
        "cost": 2,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL Apply !M! Weak."]
    },
    "Combust": {
        "name": "Combust",
        "cost": 1,
        "type": "POWER",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["At the end of your turn, lose 1 HP and deal !M! damage to ALL enemies."]
    },
    "Corruption": {
        "name": "Corruption",
        "cost": 3,
        "type": "POWER",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Skills cost 0. NL Whenever you play a Skill, Exhaust it."]
    },
    "Dark Embrace": {
        "name": "Dark Embrace",
        "cost": 2,
        "type": "POWER",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["Whenever a card is exhausted, NL draw 1 card."]
    },
    "Defend_R": {
        "name": "Defend_R",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "BASIC",
        "descriptions": ["Gain !B! Block."]
    },
    "Demon Form": {
        "name": "Demon Form",
        "cost": 3,
        "type": "POWER",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["At the start of each turn, gain !M! Strength."]
    },
    "Disarm": {
        "name": "Disarm",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Enemy loses !M! Strength. NL Exhaust."]
    },
    "Double Tap": {
        "name": "Double Tap",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["This turn, your next Attack is played twice.", "This turn, your next !M! Attacks are played twice."]
    },
    "Dropkick": {
        "name": "Dropkick",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage. NL If the enemy is Vulnerable, NL Gain [R] and NL draw 1 card."]
    },
    "Dual Wield": {
        "name": "Dual Wield",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Create a copy of an Attack or Power card in your hand.", "Create 2 copies of an Attack or Power card in your hand."]
    },
    "Entrench": {
        "name": "Entrench",
        "cost": 2,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Double your current Block.", "Double your current Block."]
    },
    "Evolve": {
        "name": "Evolve",
        "cost": 1,
        "type": "POWER",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Shuffle 2 Wounds into your draw pile. NL Whenever you draw a Wound, draw !M! card.", "Shuffle 2 Wounds into your draw pile. NL Whenever you draw a Wound, draw !M! cards."]
    },
    "Exhume": {
        "name": "Exhume",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["Choose an exhausted card and put it in your hand. NL Exhaust."]
    },
    "Feed": {
        "name": "Feed",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["Deal !D! damage. NL If this kills a non-minion enemy, gain !M! permanent Max HP. Exhaust."]
    },
    "Feel No Pain": {
        "name": "Feel No Pain",
        "cost": 1,
        "type": "POWER",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Whenever a card is exhausted, NL gain !M! Block."]
    },
    "Fiend Fire": {
        "name": "Fiend Fire",
        "cost": 2,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["Exhaust your hand. NL Deal !D! damage for each exhausted card. NL Exhaust."]
    },
    "Fire Breathing": {
        "name": "Fire Breathing",
        "cost": 1,
        "type": "POWER",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["At the end of your turn, for each Attack played this turn deal 1 damage to ALL enemies."]
    },
    "Flame Barrier": {
        "name": "Flame Barrier",
        "cost": 2,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Gain !B! Block. NL Whenever you are attacked this turn, deal !M! damage to the attacker. "]
    },
    "Flex": {
        "name": "Flex",
        "cost": 0,
        "type": "SKILL",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Gain !M! Strength. NL At the end of your turn, lose !M! Strength."]
    },
    "Ghostly Armor": {
        "name": "Ghostly Armor",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Ethereal. NL Gain !B! Block."]
    },
    "Havoc": {
        "name": "Havoc",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Play the top card of your draw pile and exhaust it."]
    },
    "Headbutt": {
        "name": "Headbutt",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL Place a card from your discard pile on top of your draw pile."]
    },
    "Heavy Blade": {
        "name": "Heavy Blade",
        "cost": 2,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL Strength affects Heavy Blade !M! times."]
    },
    "Hemokinesis": {
        "name": "Hemokinesis",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Lose !M! HP. NL Deal !D! damage."]
    },
    "Immolate": {
        "name": "Immolate",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["Exhaust 1 card. If the chosen card was a Status or Curse, deal !D! damage to ALL enemies."]
    },
    "Impervious": {
        "name": "Impervious",
        "cost": 2,
        "type": "SKILL",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["Gain !B! Block. NL Exhaust."]
    },
    "Infernal Blade": {
        "name": "Infernal Blade",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Add a random Attack to your hand. NL It costs 0 this turn. NL Exhaust."]
    },
    "Inflame": {
        "name": "Inflame",
        "cost": 1,
        "type": "POWER",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Gain !M! Strength."]
    },
    "Intimidate": {
        "name": "Intimidate",
        "cost": 0,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Apply !M! Weak to ALL enemies. NL Exhaust."]
    },
    "Iron Wave": {
        "name": "Iron Wave",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Gain !B! Block. NL Deal !D! damage."]
    },
    "Juggernaut": {
        "name": "Juggernaut",
        "cost": 2,
        "type": "POWER",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["Whenever you gain Block, deal !M! damage to a random enemy."]
    },
    "Limit Break": {
        "name": "Limit Break",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["Double your Strength. NL Exhaust.", "Double your Strength."]
    },
    "Metallicize": {
        "name": "Metallicize",
        "cost": 1,
        "type": "POWER",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["At the end of your turn, gain !M! Block."]
    },
    "Offering": {
        "name": "Offering",
        "cost": 0,
        "type": "SKILL",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["Lose 4 HP. NL Gain [R] [R]. NL Draw !M! cards. NL Exhaust."]
    },
    "Perfected Strike": {
        "name": "Perfected Strike",
        "cost": 2,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL Deals an additional +2 damage for ALL of your cards containing \\"Strike\\".", "Deal !D! damage. NL Deals an additional +3 damage for ALL of your cards containing \\"Strike\\"."]
    },
    "Pommel Strike": {
        "name": "Pommel Strike",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL Draw !M! card.", "Deal !D! damage. NL Draw !M! cards."]
    },
    "Power Through": {
        "name": "Power Through",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Add 2 Wounds to your hand. NL Gain !B! Block."]
    },
    "Pummel": {
        "name": "Pummel",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage !M! times. NL Exhaust."]
    },
    "Rage": {
        "name": "Rage",
        "cost": 0,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Whenever you play an Attack this turn, gain !M! Block."]
    },
    "Rampage": {
        "name": "Rampage",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage. NL Every time this card is played, increase its damage by !M! for this combat."]
    },
    "Reaper": {
        "name": "Reaper",
        "cost": 2,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "RARE",
        "descriptions": ["Deal !D! damage to ALL enemies. Heal for unblocked damage dealt. NL Exhaust."]
    },
    "Reckless Charge": {
        "name": "Reckless Charge",
        "cost": 0,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Gain 1 Vulnerable. NL Deal !D! damage."]
    },
    "Rupture": {
        "name": "Rupture",
        "cost": 1,
        "type": "POWER",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Whenever you lose HP from a card, NL gain 1 Strength."]
    },
    "Searing Blow": {
        "name": "Searing Blow",
        "cost": 2,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage. NL Can be upgraded any number of times."]
    },
    "Second Wind": {
        "name": "Second Wind",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Exhaust all non-Attack cards in your hand and gain !B! Block for each."]
    },
    "Seeing Red": {
        "name": "Seeing Red",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Gain [R] [R]. NL Exhaust."]
    },
    "Sentinel": {
        "name": "Sentinel",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Gain !B! Block. NL If this card is exhausted, NL gain [R] [R].", "Gain !B! Block. NL If this card is exhausted, NL gain [R] [R] [R]."]
    },
    "Sever Soul": {
        "name": "Sever Soul",
        "cost": 2,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Exhaust all non-Attack cards in your hand. NL Deal !D! damage."]
    },
    "Shockwave": {
        "name": "Shockwave",
        "cost": 2,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Apply !M! Weak and Vulnerable to ALL enemies. NL Exhaust."]
    },
    "Shrug It Off": {
        "name": "Shrug It Off",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Gain !B! Block. NL Draw 1 card."]
    },
    "Spot Weakness": {
        "name": "Spot Weakness",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["If an enemy intends to attack, gain !M! Strength."]
    },
    "Strike_R": {
        "name": "Strike_R",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "BASIC",
        "descriptions": ["Deal !D! damage."]
    },
    "Sword Boomerang": {
        "name": "Sword Boomerang",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage to a random enemy !M! times."]
    },
    "Thunderclap": {
        "name": "Thunderclap",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage and apply 1 Vulnerable to ALL enemies."]
    },
    "True Grit": {
        "name": "True Grit",
        "cost": 1,
        "type": "SKILL",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Gain !B! Block. NL Exhaust a random card in your hand.", "Gain !B! Block. NL Exhaust a card in your hand."]
    },
    "Twin Strike": {
        "name": "Twin Strike",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage twice."]
    },
    "Uppercut": {
        "name": "Uppercut",
        "cost": 2,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage. NL Apply !M! Weak. NL Apply !M! Vulnerable."]
    },
    "Warcry": {
        "name": "Warcry",
        "cost": 0,
        "type": "SKILL",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Draw !M! card. NL Place a card from your hand on top of your draw pile. NL Exhaust.", "Draw !M! cards. NL Place a card from your hand on top of your draw pile. NL Exhaust."]
    },
    "Whirlwind": {
        "name": "Whirlwind",
        "cost": -1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage to ALL enemies X times."]
    },
    "Wild Strike": {
        "name": "Wild Strike",
        "cost": 1,
        "type": "ATTACK",
        "color": "RED",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL Shuffle a Wound into your draw pile."]
    },
    "Accuracy": {
        "name": "Accuracy",
        "cost": 1,
        "type": "POWER",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Shivs deal !M! additional damage."]
    },
    "Acrobatics": {
        "name": "Acrobatics",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Draw !M! cards. NL Discard 1 card."]
    },
    "Adrenaline": {
        "name": "Adrenaline",
        "cost": 0,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Gain [G]. NL Draw 2 cards. NL Exhaust.", "Gain [G] [G]. NL Draw 2 cards. NL Exhaust."]
    },
    "After Image": {
        "name": "After Image",
        "cost": 1,
        "type": "POWER",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Whenever you play a card, gain 1 Block.", "Innate. NL Whenever you play a card, gain 1 Block."]
    },
    "Venomology": {
        "name": "Venomology",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Obtain a random potion. NL Exhaust."]
    },
    "All Out Attack": {
        "name": "All Out Attack",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage to ALL enemies. NL Draw 1 less card next turn."]
    },
    "A Thousand Cuts": {
        "name": "A Thousand Cuts",
        "cost": 2,
        "type": "POWER",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Whenever you play a card, deal !M! damage to ALL enemies."]
    },
    "Backflip": {
        "name": "Backflip",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Gain !B! Block. NL Draw 2 cards."]
    },
    "Backstab": {
        "name": "Backstab",
        "cost": 0,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage. NL Innate. NL Exhaust."]
    },
    "Bane": {
        "name": "Bane",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL If the enemy is Poisoned, deal !D! damage again."]
    },
    "Blade Dance": {
        "name": "Blade Dance",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Add !M! Shivs to your hand."]
    },
    "Blur": {
        "name": "Blur",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Gain !B! Block. NL Block is not removed at the start of your next turn."]
    },
    "Bouncing Flask": {
        "name": "Bouncing Flask",
        "cost": 2,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Apply 3 Poison to a random enemy !M! times."]
    },
    "Bullet Time": {
        "name": "Bullet Time",
        "cost": 3,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["You cannot draw any cards this turn. Reduce the cost of cards in your hand to 0 this turn."]
    },
    "Burst": {
        "name": "Burst",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["This turn, your next Skill is played twice.", "This turn, your next !M! Skills are played twice."]
    },
    "Calculated Gamble": {
        "name": "Calculated Gamble",
        "cost": 0,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Discard your hand, NL then draw that many cards. NL Exhaust.", "Discard your hand, NL then draw that many cards."]
    },
    "Caltrops": {
        "name": "Caltrops",
        "cost": 1,
        "type": "POWER",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Whenever you are attacked, deal !M! damage to the attacker."]
    },
    "Catalyst": {
        "name": "Catalyst",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Double an enemy's Poison. NL Exhaust.", "Triple an enemy's Poison. NL Exhaust."]
    },
    "Choke": {
        "name": "Choke",
        "cost": 2,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage. NL Whenever you play a card this turn, targeted enemy loses !M! HP."]
    },
    "Cloak and Dagger": {
        "name": "Cloak and Dagger",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "COMMON"
    },
    "Concentrate": {
        "name": "Concentrate",
        "cost": 0,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Discard !M! cards. NL Gain [G] [G]."]
    },
    "Corpse Explosion": {
        "name": "Corpse Explosion",
        "cost": 2,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Enemy loses all Poison. Deal damage equal to twice the amount lost to ALL enemies.", "Enemy loses all Poison. Deal damage equal to 3 times the amount lost to ALL enemies."]
    },
    "Crippling Poison": {
        "name": "Crippling Poison",
        "cost": 2,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Apply !M! Poison. NL Apply !M! Weak."]
    },
    "Dagger Spray": {
        "name": "Dagger Spray",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage to ALL enemies twice."]
    },
    "Dagger Throw": {
        "name": "Dagger Throw",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL Draw 1 card. NL Discard 1 card."]
    },
    "Dash": {
        "name": "Dash",
        "cost": 2,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Gain !B! Block. NL Deal !D! damage."]
    },
    "Deadly Poison": {
        "name": "Deadly Poison",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Apply !M! Poison."]
    },
    "Defend_G": {
        "name": "Defend_G",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "BASIC",
        "descriptions": ["Gain !B! Block."]
    },
    "Deflect": {
        "name": "Deflect",
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Gain !B! Block."],
        "cost": 0
    },
    "Die Die Die": {
        "name": "Die Die Die",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Deal !D! damage to ALL enemies. NL Exhaust."]
    },
    "Distraction": {
        "name": "Distraction",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Add a random Skill to your hand. NL It costs 0 this turn. NL Exhaust."]
    },
    "Dodge and Roll": {
        "name": "Dodge and Roll",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Gain !B! Block. NL Next turn gain !B! Block."]
    },
    "Doppelganger": {
        "name": "Doppelganger",
        "cost": -1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Next turn, draw X cards and gain X [G]. NL Exhaust.", "Next turn, draw X+1 cards and gain X+1 [G]. NL Exhaust."]
    },
    "Endless Agony": {
        "name": "Endless Agony",
        "cost": 0,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Whenever you draw this card, add a copy of it to your hand. NL Deal !D! damage. NL Exhaust."]
    },
    "Envenom": {
        "name": "Envenom",
        "cost": 2,
        "type": "POWER",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Whenever an Attack deals unblocked damage, apply 1 Poison."]
    },
    "Escape Plan": {
        "name": "Escape Plan",
        "cost": 0,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Draw 1 card. NL If the card is a Skill, gain !B! Block."]
    },
    "Eviscerate": {
        "name": "Eviscerate",
        "cost": 4,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Costs 1 less [G] NL for each card discarded this turn. NL Deal !D! damage three times."]
    },
    "Expertise": {
        "name": "Expertise",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Draw cards until you have !M! in hand."]
    },
    "Finisher": {
        "name": "Finisher",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage for each Attack played this turn."]
    },
    "Flechettes": {
        "name": "Flechettes",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage for each Skill in your hand."]
    },
    "Flying Knee": {
        "name": "Flying Knee",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL Next turn gain [G]."]
    },
    "Footwork": {
        "name": "Footwork",
        "cost": 1,
        "type": "POWER",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Gain !M! Dexterity."]
    },
    "Glass Knife": {
        "name": "Glass Knife",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Deal !D! damage twice. Glass Knife's damage is lowered by 2 this combat."]
    },
    "Grand Finale": {
        "name": "Grand Finale",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Can only be played if there are no cards in your draw pile. NL Deal !D! damage to ALL enemies.", "My draw pile NL must be #rEmpty."]
    },
    "Heel Hook": {
        "name": "Heel Hook",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage. NL If the enemy is Weak, NL Gain [G] and NL draw 1 card."]
    },
    "Infinite Blades": {
        "name": "Infinite Blades",
        "cost": 1,
        "type": "POWER",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["At the start of your turn, add a Shiv to your hand.", "Innate. NL At the start of your turn, add a Shiv to your hand."]
    },
    "Leg Sweep": {
        "name": "Leg Sweep",
        "cost": 2,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Apply !M! Weak. NL Gain !B! Block."]
    },
    "Malaise": {
        "name": "Malaise",
        "cost": -1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Enemy loses X Strength. Apply X Weak. NL Exhaust.", "Enemy loses X+1 Strength. Apply X+1 Weak. NL Exhaust."]
    },
    "Masterful Stab": {
        "name": "Masterful Stab",
        "cost": 0,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Can only be played if there are no other cards in your hand. NL Deal !D! damage.", "This has to be my NL only card."]
    },
    "Neutralize": {
        "name": "Neutralize",
        "cost": 0,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "BASIC",
        "descriptions": ["Deal !D! damage. NL Apply !M! Weak."]
    },
    "Night Terror": {
        "name": "Night Terror",
        "cost": 3,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Choose a card. NL Next turn, add !M! copies of that card into your hand. Exhaust."]
    },
    "Noxious Fumes": {
        "name": "Noxious Fumes",
        "cost": 1,
        "type": "POWER",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["At the start of your turn, apply !M! Poison to ALL enemies."]
    },
    "Outmaneuver": {
        "name": "Outmaneuver",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Next turn NL gain [G] [G].", "Next turn NL gain [G] [G] [G]."]
    },
    "Phantasmal Killer": {
        "name": "Phantasmal Killer",
        "cost": 2,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["On your next turn, your Attack damage is doubled."]
    },
    "PiercingWail": {
        "name": "PiercingWail",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["ALL enemies lose !M! Strength for 1 turn. NL Exhaust."]
    },
    "Poisoned Stab": {
        "name": "Poisoned Stab",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL Apply !M! Poison."]
    },
    "Predator": {
        "name": "Predator",
        "cost": 2,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage. NL Draw 2 more cards next turn."]
    },
    "Prepared": {
        "name": "Prepared",
        "cost": 0,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Draw !M! card. NL Discard !M! card.", "Draw !M! cards. NL Discard !M! cards."]
    },
    "Quick Slash": {
        "name": "Quick Slash",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL Draw 1 card."]
    },
    "Reflex": {
        "name": "Reflex",
        "cost": -2,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Unplayable. NL If this card is discarded from your hand, draw !M! card.", "Unplayable. NL If this card is discarded from your hand, draw !M! cards."]
    },
    "Riddle With Holes": {
        "name": "Riddle With Holes",
        "cost": 2,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage 5 times."]
    },
    "Setup": {
        "name": "Setup",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Place a card from your hand on top of your draw pile. NL It costs 0 until it is played."]
    },
    "Skewer": {
        "name": "Skewer",
        "cost": -1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage X times."]
    },
    "Slice": {
        "name": "Slice",
        "cost": 0,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage."]
    },
    "Storm of Steel": {
        "name": "Storm of Steel",
        "cost": 2,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Discard your hand. NL Add 1 Shiv to your hand for each card discarded.", "Discard your hand. NL Add 1 upgraded Shiv to your hand for each card discarded."]
    },
    "Strike_G": {
        "name": "Strike_G",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "BASIC",
        "descriptions": ["Deal !D! damage."]
    },
    "Sucker Punch": {
        "name": "Sucker Punch",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL Apply !M! Weak."]
    },
    "Survivor": {
        "name": "Survivor",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "BASIC",
        "descriptions": ["Gain !B! Block. NL Discard a card."]
    },
    "Tactician": {
        "name": "Tactician",
        "cost": -2,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Unplayable. NL If this card is discarded from your hand, gain [G].", "Unplayable. NL If this card is discarded from your hand, gain [G] [G]."]
    },
    "Terror": {
        "name": "Terror",
        "cost": 1,
        "type": "SKILL",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["Apply 99 Vulnerable. NL Exhaust."]
    },
    "Tools of the Trade": {
        "name": "Tools of the Trade",
        "cost": 1,
        "type": "POWER",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["At the start of your turn, draw 1 card and discard 1 card."]
    },
    "Underhanded Strike": {
        "name": "Underhanded Strike",
        "cost": 2,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "COMMON",
        "descriptions": ["Deal !D! damage. NL If you have discarded a card this turn, NL gain [G] [G]."]
    },
    "Unload": {
        "name": "Unload",
        "cost": 1,
        "type": "ATTACK",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Deal !D! damage. NL Discard ALL non-Attack cards."]
    },
    "Well Laid Plans": {
        "name": "Well Laid Plans",
        "cost": 0,
        "type": "POWER",
        "color": "GREEN",
        "rarity": "UNCOMMON",
        "descriptions": ["At the end of your turn, Retain up to !M! card.", "At the end of your turn, Retain up to !M! cards."]
    },
    "Wraith Form": {
        "name": "Wraith Form",
        "cost": 3,
        "type": "POWER",
        "color": "GREEN",
        "rarity": "RARE",
        "descriptions": ["Whenever you play a Skill, deal !M! damage to a random enemy."]
    },
    "Defend_B": {
        "name": "Defend_B",
        "cost": 1,
        "type": "SKILL",
        "color": "BLUE",
        "rarity": "BASIC",
        "descriptions": ["Gain !B! Block."]
    },
    "Apotheosis": {
        "name": "Apotheosis",
        "cost": 2,
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "RARE",
        "descriptions": ["Upgrade ALL of your cards for the rest of combat. NL Exhaust."]
    },
    "Bandage Up": {
        "name": "Bandage Up",
        "cost": 0,
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Heal !M! HP. NL Exhaust."]
    },
    "Bite": {
        "name": "Bite",
        "cost": 1,
        "type": "ATTACK",
        "color": "COLORLESS",
        "rarity": "SPECIAL",
        "descriptions": ["Deal !D! damage. NL Heal !M! HP."]
    },
    "Blind": {
        "name": "Blind",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Apply !M! Weak.", "Apply !M! Weak to ALL enemies."],
        "cost": 0
    },
    "Dark Shackles": {
        "name": "Dark Shackles",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Enemy loses !M! Strength for the rest of this turn. NL Exhaust."],
        "cost": 0
    },
    "Deep Breath": {
        "name": "Deep Breath",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Shuffle your discard pile into your draw pile. NL Draw !M! card.", "Shuffle your discard pile into your draw pile. NL Draw !M! cards."],
        "cost": 0
    },
    "Dramatic Entrance": {
        "name": "Dramatic Entrance",
        "type": "ATTACK",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Innate. NL Deal !D! damage to ALL enemies. NL Exhaust."],
        "cost": 0
    },
    "Enlightenment": {
        "name": "Enlightenment",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "RARE",
        "descriptions": ["Reduce the cost of cards in your hand to 1 this turn.", "Reduce the cost of cards in your hand to 1 this combat."],
        "cost": 0
    },
    "Finesse": {
        "name": "Finesse",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Gain !B! Block. NL Draw 1 card."],
        "cost": 0
    },
    "Flash of Steel": {
        "name": "Flash of Steel",
        "type": "ATTACK",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage. NL Draw 1 card."],
        "cost": 0
    },
    "Good Instincts": {
        "name": "Good Instincts",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Gain !B! Block."],
        "cost": 0
    },
    "Jack Of All Trades": {
        "name": "Jack Of All Trades",
        "cost": 0,
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Add !M! random colorless card to your hand. NL Exhaust.", "Add !M! random colorless cards to your hand. NL Exhaust."]
    },
    "J.A.X.": {
        "name": "J.A.X.",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "SPECIAL",
        "descriptions": ["Lose 3 HP. NL Gain !M! Strength . NL Exhaust."],
        "cost": 0
    },
    "Madness": {
        "name": "Madness",
        "cost": 1,
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["A random card in your hand costs 0 for the rest of combat. NL Exhaust."]
    },
    "Master of Strategy": {
        "name": "Master of Strategy",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "RARE",
        "descriptions": ["Draw !M! cards. NL Exhaust."],
        "cost": 0
    },
    "Mind Blast": {
        "name": "Mind Blast",
        "cost": 0,
        "type": "ATTACK",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal damage equal to the number of cards in your draw pile.", "Innate. NL Deal damage equal to the number of cards in your draw pile."]
    },
    "Panacea": {
        "name": "Panacea",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Gain !M! Artifact. NL Exhaust."],
        "cost": 0
    },
    "Panache": {
        "name": "Panache",
        "type": "POWER",
        "color": "COLORLESS",
        "rarity": "RARE",
        "descriptions": ["Every time you play 5 cards in a single turn, deal !M! damage to ALL enemies."],
        "cost": 0
    },
    "Purity": {
        "name": "Purity",
        "cost": 0,
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Choose and Exhaust up to !M! cards in your hand. NL Exhaust."]
    },
    "Sadistic Nature": {
        "name": "Sadistic Nature",
        "type": "POWER",
        "color": "COLORLESS",
        "rarity": "RARE",
        "descriptions": ["Whenever you apply a Debuff to an enemy, they take !M! damage."],
        "cost": 0
    },
    "Secret Technique": {
        "name": "Secret Technique",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "RARE",
        "descriptions": ["Choose a Skill from your draw pile and place it into your hand. NL Exhaust.", "Choose a Skill from your draw pile and place it into your hand."],
        "cost": 0
    },
    "Secret Weapon": {
        "name": "Secret Weapon",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "RARE",
        "descriptions": ["Choose an Attack from your draw pile and place it into your hand. NL Exhaust.", "Choose an Attack from your draw pile and place it into your hand."],
        "cost": 0
    },
    "Shiv": {
        "name": "Shiv",
        "type": "ATTACK",
        "color": "COLORLESS",
        "rarity": "SPECIAL",
        "descriptions": ["Deal !D! damage. NL Exhaust."],
        "cost": 0
    },
    "Swift Strike": {
        "name": "Swift Strike",
        "type": "ATTACK",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Deal !D! damage."],
        "cost": 0
    },
    "Thinking Ahead": {
        "name": "Thinking Ahead",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "RARE",
        "descriptions": ["Draw 2 cards. NL Put a card from your hand on top of your draw pile. NL Exhaust.", "Draw 2 cards. NL Put a card from your hand on top of your draw pile."],
        "cost": 0
    },
    "Transmutation": {
        "name": "Transmutation",
        "cost": -1,
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "RARE",
        "descriptions": ["Add X random colorless cards into your hand. NL Exhaust.", "Add X random upgraded colorless cards into your hand. NL Exhaust."]
    },
    "Trip": {
        "name": "Trip",
        "type": "SKILL",
        "color": "COLORLESS",
        "rarity": "UNCOMMON",
        "descriptions": ["Apply !M! Vulnerable.", "Apply !M! Vulnerable to ALL enemies."],
        "cost": 0
    },
    "Burn": {
        "name": "Burn",
        "cost": -2,
        "type": "STATUS",
        "color": "COLORLESS",
        "rarity": "COMMON",
        "descriptions": ["Unplayable. NL At the end of your turn, take 2 damage.", "Unplayable. NL At the end of your turn, take 4 damage."]
    },
    "Dazed": {
        "name": "Dazed",
        "cost": -2,
        "type": "STATUS",
        "color": "COLORLESS",
        "rarity": "COMMON",
        "descriptions": ["Unplayable. NL Ethereal."]
    },
    "Wound": {
        "name": "Wound",
        "cost": -2,
        "type": "STATUS",
        "color": "COLORLESS",
        "rarity": "COMMON",
        "descriptions": ["Unplayable."]
    },
    "Clumsy": {
        "name": "Clumsy",
        "cost": -2,
        "type": "CURSE",
        "color": "CURSE",
        "rarity": "CURSE",
        "descriptions": ["Unplayable. NL Ethereal."]
    },
    "Decay": {
        "name": "Decay",
        "cost": -2,
        "type": "CURSE",
        "color": "CURSE",
        "rarity": "CURSE",
        "descriptions": ["Unplayable. NL At the end of your turn, take 2 damage."]
    },
    "Doubt": {
        "name": "Doubt",
        "cost": -2,
        "type": "CURSE",
        "color": "CURSE",
        "rarity": "CURSE",
        "descriptions": ["Unplayable. NL At the end of your turn, gain 1 Weak."]
    },
    "Injury": {
        "name": "Injury",
        "cost": -2,
        "type": "CURSE",
        "color": "CURSE",
        "rarity": "CURSE",
        "descriptions": ["Unplayable."]
    },
    "Necronomicurse": {
        "name": "Necronomicurse",
        "cost": -2,
        "type": "CURSE",
        "color": "CURSE",
        "rarity": "SPECIAL",
        "descriptions": ["Unplayable. NL There is no escape from this Curse."]
    },
    "Normality": {
        "name": "Normality",
        "cost": -2,
        "type": "CURSE",
        "color": "CURSE",
        "rarity": "CURSE",
        "descriptions": ["Unplayable. NL You cannot play more than 3 cards this turn."]
    },
    "Pain": {
        "name": "Pain",
        "cost": -2,
        "type": "CURSE",
        "color": "CURSE",
        "rarity": "CURSE",
        "descriptions": ["Unplayable. NL While in hand, NL lose 1 HP when other cards are played."]
    },
    "Parasite": {
        "name": "Parasite",
        "cost": -2,
        "type": "CURSE",
        "color": "CURSE",
        "rarity": "CURSE",
        "descriptions": ["Unplayable. NL If transformed or removed from your deck, lose 3 Max HP"]
    },
    "Regret": {
        "name": "Regret",
        "cost": -2,
        "type": "CURSE",
        "color": "CURSE",
        "rarity": "CURSE",
        "descriptions": ["Unplayable. NL At the end of your turn, lose 1 HP for each card in your hand."]
    },
    "Writhe": {
        "name": "Writhe",
        "cost": -2,
        "type": "CURSE",
        "color": "CURSE",
        "rarity": "CURSE",
        "descriptions": ["Unplayable. NL Innate."]
    }
}`;

cards = JSON.parse(cards);

export default cards;
