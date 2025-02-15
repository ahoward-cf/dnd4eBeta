// Namespace D&D4e Configuration Values
export const DND4EBETA = {};

// ASCII Artwork
DND4EBETA.ASCII = `__________________________________________________________
______      ______   ___     ______      _        
|  _  \\___  |  _  \\ /   |    | ___ \\    | |       
| | | ( _ ) | | | |/ /| | ___| |_/ / ___| |_ __ _ 
| | | / _ \\/\\ | | / /_| |/ _ \\ ___ \\/ _ \\ __/ _\' |
| |/ / (_>  < |/ /\\___  |  __/ |_/ /  __/ || (_| |
|___/ \\___/\\/___/     |_/\\___\\____/ \\___|\\__\\__,_|
__________________________________________________________`;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
DND4EBETA.abilities = {
  "str": "DND4EBETA.AbilityStr",
  "con": "DND4EBETA.AbilityCon",
  "dex": "DND4EBETA.AbilityDex",
  "int": "DND4EBETA.AbilityInt",
  "wis": "DND4EBETA.AbilityWis",
  "cha": "DND4EBETA.AbilityCha"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
DND4EBETA.alignments = {
  'lg': "DND4EBETA.AlignmentLG",
  'ng': "DND4EBETA.AlignmentNG",
  'cg': "DND4EBETA.AlignmentCG",
  'ln': "DND4EBETA.AlignmentLN",
  'tn': "DND4EBETA.AlignmentTN",
  'cn': "DND4EBETA.AlignmentCN",
  'le': "DND4EBETA.AlignmentLE",
  'ne': "DND4EBETA.AlignmentNE",
  'ce': "DND4EBETA.AlignmentCE"
};


DND4EBETA.weaponProficiencies = {
  "sim": "DND4EBETA.WeaponSimpleProficiency",
  "mar": "DND4EBETA.WeaponMartialProficiency"
};

DND4EBETA.toolProficiencies = {
  "art": "DND4EBETA.ToolArtisans",
  "disg": "DND4EBETA.ToolDisguiseKit",
  "forg": "DND4EBETA.ToolForgeryKit",
  "game": "DND4EBETA.ToolGamingSet",
  "herb": "DND4EBETA.ToolHerbalismKit",
  "music": "DND4EBETA.ToolMusicalInstrument",
  "navg": "DND4EBETA.ToolNavigators",
  "pois": "DND4EBETA.ToolPoisonersKit",
  "thief": "DND4EBETA.ToolThieves",
  "vehicle": "DND4EBETA.ToolVehicle"
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur in D&D4e
 * @type {Object}
 */
DND4EBETA.timePeriods = {
  "inst": "DND4EBETA.TimeInst",
  "turn": "DND4EBETA.TimeTurn",
  "round": "DND4EBETA.TimeRound",
  "minute": "DND4EBETA.TimeMinute",
  "hour": "DND4EBETA.TimeHour",
  "day": "DND4EBETA.TimeDay",
  "month": "DND4EBETA.TimeMonth",
  "year": "DND4EBETA.TimeYear",
  "perm": "DND4EBETA.TimePerm",
  "spec": "DND4EBETA.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
DND4EBETA.abilityActivationTypes = {
  "none": "DND4EBETA.None",
  "standard": "DND4EBETA.ActionStandard",
  "move": "DND4EBETA.ActionMove",
  "minor": "DND4EBETA.ActionMinor",
  "free": "DND4EBETA.ActionFree",
  "reaction": "DND4EBETA.ActionReaction",
  "interrupt": "DND4EBETA.ActionInterrupt",
  "opportunity": "DND4EBETA.ActionOpportunity",

  // "minute": DND4EBETA.timePeriods.minute,
  // "hour": DND4EBETA.timePeriods.hour,
  // "day": DND4EBETA.timePeriods.day,
  // "special": DND4EBETA.timePeriods.spec
};

DND4EBETA.abilityActivationTypesShort = {
  "none": "DND4EBETA.NoneShort",
  "standard": "DND4EBETA.ActionStandardShort",
  "move": "DND4EBETA.ActionMoveShort",
  "minor": "DND4EBETA.ActionMinorShort",
  "free": "DND4EBETA.ActionFreeShort",
  "reaction": "DND4EBETA.ActionReactionShort",
  "interrupt": "DND4EBETA.ActionInterruptShort",
  "opportunity": "DND4EBETA.ActionOpportunityShort",
};
/* -------------------------------------------- */


DND4EBETA.abilityConsumptionTypes = {
  "ammo": "DND4EBETA.ConsumeAmmunition",
  "attribute": "DND4EBETA.ConsumeAttribute",
  "material": "DND4EBETA.ConsumeMaterial",
  "charges": "DND4EBETA.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
DND4EBETA.actorSizes = {
  "tiny": "DND4EBETA.SizeTiny",
  "sm": "DND4EBETA.SizeSmall",
  "med": "DND4EBETA.SizeMedium",
  "lg": "DND4EBETA.SizeLarge",
  "huge": "DND4EBETA.SizeHuge",
  "grg": "DND4EBETA.SizeGargantuan"
};

DND4EBETA.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
DND4EBETA.itemActionTypes = {
  "mwak": "DND4EBETA.ActionMWAK",
  "rwak": "DND4EBETA.ActionRWAK",
  "msak": "DND4EBETA.ActionMSAK",
  "rsak": "DND4EBETA.ActionRSAK",
  "save": "DND4EBETA.ActionSave",
  "heal": "DND4EBETA.ActionHeal",
  "abil": "DND4EBETA.ActionAbil",
  "util": "DND4EBETA.ActionUtil",
  "other": "DND4EBETA.ActionOther"
};

/* -------------------------------------------- */

DND4EBETA.itemCapacityTypes = {
  "items": "DND4EBETA.ItemContainerCapacityItems",
  "weight": "DND4EBETA.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
DND4EBETA.limitedUsePeriods = {
  "enc": "DND4EBETA.Encounter",
  "day": "DND4EBETA.Day",
  "charges": "DND4EBETA.Charges"
};

/* -------------------------------------------- */

DND4EBETA.launchOrder = {
	"both": "DND4EBETA.LaunchOrderBoth",
	"off": "DND4EBETA.LaunchOrderOff",
	"pre": "DND4EBETA.LaunchOrderPre",
	"post": "DND4EBETA.LaunchOrderPost",
	"sub": "DND4EBETA.LaunchOrderSub"
}

/* -------------------------------------------- */

/**
 * The set of equipment types for armour, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
DND4EBETA.equipmentTypes = {
  // "light": "DND4EBETA.EquipmentLight",
  // "medium": "DND4EBETA.EquipmentMedium",
  // "heavy": "DND4EBETA.EquipmentHeavy",
  // "bonus": "DND4EBETA.EquipmentBonus",
  // "natural": "DND4EBETA.EquipmentNatural",
  // "shield": "DND4EBETA.EquipmentShield",
  // "clothing": "DND4EBETA.EquipmentClothing",
  // "trinket": "DND4EBETA.EquipmentTrinket"
	"armour": "DND4EBETA.EquipmentTypeArmour",
	"arms": "DND4EBETA.EquipmentTypeArms",
	"feet": "DND4EBETA.EquipmentTypeFeet",
	"hands": "DND4EBETA.EquipmentTypeHands",
	"head": "DND4EBETA.EquipmentTypeHead",
	"neck": "DND4EBETA.EquipmentTypeNeck",
	"ring": "DND4EBETA.EquipmentTypeRing",
	"waist": "DND4EBETA.EquipmentTypeWaist",
	"natural": "DND4EBETA.EquipmentTypeNatural",
	"other": "DND4EBETA.EquipmentTypeOther",
};

DND4EBETA.equipmentTypesArmour = {
	"cloth": "DND4EBETA.EquipmentArmourCloth",
	"light": "DND4EBETA.EquipmentArmourLight",
	"heavy": "DND4EBETA.EquipmentArmourHeavy",
	"natural": "DND4EBETA.EquipmentArmourNatural",
};
DND4EBETA.equipmentTypesArms = {
	"light": "DND4EBETA.EquipmentArmsLight",
	"heavy": "DND4EBETA.EquipmentArmsHeavy",
	"bracers": "DND4EBETA.EquipmentArmsBracers",
	"bracelet": "DND4EBETA.EquipmentArmsBracelet",
};
DND4EBETA.equipmentTypesFeet = {
	"shoe": "DND4EBETA.EquipmentFeetShoe",
	"boot": "DND4EBETA.EquipmentFeetBoot",
	"greave": "DND4EBETA.EquipmentFeetGreave",
};
DND4EBETA.equipmentTypesHands = {
	"gloves": "DND4EBETA.EquipmentHandsGloves",
	"gauntlets": "DND4EBETA.EquipmentHandsGauntlets",
};
DND4EBETA.equipmentTypesHead = {
	"hat": "DND4EBETA.EquipmentHeadHat",
	"helmet": "DND4EBETA.EquipmentHeadHelmet",
	"eyewear": "DND4EBETA.EquipmentHeadEyewear",

};
DND4EBETA.equipmentTypesNeck = {
	"necklace": "DND4EBETA.EquipmentNeckNecklace",
	"amulet": "DND4EBETA.EquipmentNeckAmulet",
	"cloack": "DND4EBETA.EquipmentCloack",
};
DND4EBETA.equipmentTypesWaist = {
	"belt": "DND4EBETA.EquipmentWaistBelt",
};

/* -------------------------------------------- */

/**
 * The set of armour Proficiencies which a character may have
 * @type {Object}
 */
DND4EBETA.armourProficiencies = {
  "lgt": DND4EBETA.equipmentTypes.light,
  "med": DND4EBETA.equipmentTypes.medium,
  "hvy": DND4EBETA.equipmentTypes.heavy,
  "shl": "DND4EBETA.EquipmentShieldProficiency"
};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
DND4EBETA.consumableTypes = {
  "ammo": "DND4EBETA.ConsumableAmmunition",
  "potion": "DND4EBETA.ConsumablePotion",
  "poison": "DND4EBETA.ConsumablePoison",
  "food": "DND4EBETA.ConsumableFood",
  "scroll": "DND4EBETA.ConsumableScroll",
  "wand": "DND4EBETA.ConsumableWand",
  "rod": "DND4EBETA.ConsumableRod",
  "trinket": "DND4EBETA.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 4e system
 * @type {Object}
 */
DND4EBETA.currencies = {
  "ad": "DND4EBETA.CurrencyAD",
  "pp": "DND4EBETA.CurrencyPP",
  "gp": "DND4EBETA.CurrencyGP",
  "sp": "DND4EBETA.CurrencySP",
  "cp": "DND4EBETA.CurrencyCP"
};

/**
 * Define the upwards-conversion rules for registered currency types
 * @type {{string, object}}
 */
DND4EBETA.currencyConversion = {
  cp: {into: "sp", each: 10},
  sp: {into: "gp", each: 10 },
  gp: {into: "pp", each: 100},
  pp: {into: "ad", each: 100}
};

/* -------------------------------------------- */

DND4EBETA.ritualcomponents = {
	"ar": "DND4EBETA.RitualCompAR",
	"ms": "DND4EBETA.RitualCompMS",
	"rh": "DND4EBETA.RitualCompRH",
	"si": "DND4EBETA.RitualCompSI",
	"rs": "DND4EBETA.RitualCompRS"
};

// DND4EBETA.ritualcomponents = {
	// "ad": "DND4EBETA.RitualCompAD",
	// "rh": "DND4EBETA.RitualCompRH",
	// "si": "DND4EBETA.RitualCompSI",
	// "mc": "DND4EBETA.RitualCompMC"
// };


/* -------------------------------------------- */

// Damage Types
DND4EBETA.damageTypes = {
	
  "damage": "DND4EBETA.Damage",
  "acid": "DND4EBETA.DamageAcid",
  // "bludgeoning": "DND4EBETA.DamageBludgeoning",
  // "bludgeon": "DND4EBETA.DamageBludgeoning",
  "cold": "DND4EBETA.DamageCold",
  "fire": "DND4EBETA.DamageFire",
  "force": "DND4EBETA.DamageForce",
  "lightning": "DND4EBETA.DamageLightning",
  "necrotic": "DND4EBETA.DamageNecrotic",
  // "pierce": "DND4EBETA.DamagePiercing",
  // "piercing": "DND4EBETA.DamagePiercing",
  "physical": "DND4EBETA.Damagephysical",
  "poison": "DND4EBETA.DamagePoison",
  "psychic": "DND4EBETA.DamagePsychic",
  "radiant": "DND4EBETA.DamageRadiant",
  // "slashing": "DND4EBETA.DamageSlashing",
  // "slash": "DND4EBETA.DamageSlashing",
  "thunder": "DND4EBETA.DamageThunder"
};

/* -------------------------------------------- */

// Def
DND4EBETA.def = {
  "ac": "DND4EBETA.DefAC",
  "fort": "DND4EBETA.DefFort",
  "ref": "DND4EBETA.DefRef",
  "wil": "DND4EBETA.DefWil"
};/* -------------------------------------------- */


// Defensives
DND4EBETA.defensives = {
  "ac": "DND4EBETA.DefenceAC",
  "fort": "DND4EBETA.DefenceFort",
  "ref": "DND4EBETA.DefenceRef",
  "wil": "DND4EBETA.DefenceWil"
};

/* -------------------------------------------- */

DND4EBETA.distanceUnits = {
  "none": "DND4EBETA.None",
  "self": "DND4EBETA.DistSelf",
  "touch": "DND4EBETA.DistTouch",
  "ft": "DND4EBETA.DistFt",
  "mi": "DND4EBETA.DistMi",
  "spec": "DND4EBETA.Special",
  "any": "DND4EBETA.DistAny"
};

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
DND4EBETA.encumbrance = {
  currencyPerWeight: 50,
  strMultiplier: 15
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied in D&D4e
 * @type {Object}
 */
DND4EBETA.targetTypes = {
  "none": "DND4EBETA.None",
  "ally": "DND4EBETA.TargetAlly",
  "creature": "DND4EBETA.TargetCreature",
  "enemy": "DND4EBETA.TargetEnemy",
  "personal": "DND4EBETA.TargetPersonal",
  "object": "DND4EBETA.TargetObject",
  "square": "DND4EBETA.TargetSquare",
  "wall": "DND4EBETA.TargetWall",
  "allyA": "DND4EBETA.TargetAllyAdjacent",
  "creatureA": "DND4EBETA.TargetCreatureAdjacent",
  "enemyA": "DND4EBETA.TargetEnemyAdjacent",
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are DND4EBETA target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
DND4EBETA.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray",
  closeBlast: "rect",
  closeBurst: "rect",
  rangeBlast: "rect",
  rangeBurst: "rect",
};


/* -------------------------------------------- */

// Healing Types
DND4EBETA.healingTypes = {
  "healing": "DND4EBETA.Healing",
  "temphp": "DND4EBETA.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes in the D&D4E system
 * @type {Array.<string>}
 */
DND4EBETA.hitDieTypes = ["d6", "d8", "d10", "d12"];

/* -------------------------------------------- */

DND4EBETA.powerType = {
	"class": "DND4EBETA.Class",
	"race": "DND4EBETA.Race",
	"utility": "DND4EBETA.PowerUtil"
};

DND4EBETA.powerUseType = {
	"atwill": "DND4EBETA.PowerAt",
	"encounter": "DND4EBETA.PowerEnc",
	"daily": "DND4EBETA.PowerDaily",
	"recharge": "DND4EBETA.PowerRecharge",
	// "utility": "DND4EBETA.PowerUtil"
};
DND4EBETA.powerSource = {
	"arcane": "DND4EBETA.Arcane",
	"divine": "DND4EBETA.Divine",
	"martial": "DND4EBETA.Martial",
	"Elemental": "DND4EBETA.Elemental",
	"ki": "DND4EBETA.Ki",
	"primal": "DND4EBETA.Primal",
	"psionic": "DND4EBETA.Psionic",
	"shadow": "DND4EBETA.Shadow",
};

DND4EBETA.powerGroupTypes = {
	"usage": "DND4EBETA.Usage",
	"action": "DND4EBETA.Action",
	"type": "DND4EBETA.Type",
};

DND4EBETA.powerSortTypes = {
	"name": "DND4EBETA.Name",
	"level": "DND4EBETA.Level",
	"actionType": "DND4EBETA.Action",
	"rangeTextShort": "DND4EBETA.Range",
	"use.value": "DND4EBETA.Used",
	"none": "DND4EBETA.None",
};

/* -------------------------------------------- */
/**
 * Character senses options
 * @type {Object}
 */
DND4EBETA.special = {
  "aa": "DND4EBETA.SpecialSensesAA",
  "bs": "DND4EBETA.SpecialSensesBS",
  "dv": "DND4EBETA.SpecialSensesDV",
  "ts": "DND4EBETA.SpecialSensesTS",
  "tr": "DND4EBETA.SpecialSensesTR"
};

DND4EBETA.vision = {
	"nv": "DND4EBETA.VisionNormal",
	"lv": "DND4EBETA.VisionLowLight",
	"bv": "DND4EBETA.VisionBlind"
};

DND4EBETA.weaponType = {
	"melee": "DND4EBETA.WeaponMelee",
	"meleeRanged": "DND4EBETA.WeaponMeleeRanged",
	"ranged": "DND4EBETA.WeaponRanged",
	"implement": "DND4EBETA.WeaponPropertiesImp",
	"none": "DND4EBETA.None",
	"any": "DND4EBETA.AnyW",
};

DND4EBETA.rangeType = {
	"weapon": "DND4EBETA.rangeWeapon",
	"range" : "DND4EBETA.rangeRanged",
	"closeBurst": "DND4EBETA.rangeCloseBurst",
	"closeBlast": "DND4EBETA.rangeCloseBlast",
	"rangeBurst": "DND4EBETA.rangeBurst",
	"rangeBlast": "DND4EBETA.rangeBlast",
	"wall": "DND4EBETA.rangeWall",
	"personal": "DND4EBETA.rangePersonal",
	"touch": "DND4EBETA.rangeTouch",
};

DND4EBETA.effectTypes = {
	"beast": "DND4EBETA.Beast",
	"beastForm": "DND4EBETA.BeastForm",
	"charm": "DND4EBETA.Charm",
	"conjuration": "DND4EBETA.Conjuration",
	"fear": "DND4EBETA.Fear",
	"healing": "DND4EBETA.Healing",
	"illusion": "DND4EBETA.Illusion",
	"invigorating": "DND4EBETA.Invigorating",
	"poison": "DND4EBETA.DamagePoison",
	"polymorph": "DND4EBETA.Polymorph",
	"rage": "DND4EBETA.Rage",
	"rattling": "DND4EBETA.Rattling",
	"reliable": "DND4EBETA.Reliable",
	"sleep": "DND4EBETA.Sleep",
	"spirit": "DND4EBETA.Spirit",
	"stance": "DND4EBETA.Stance",
	"summoning": "DND4EBETA.Summoning",
	"teleportation": "DND4EBETA.Teleportation",
	"zone": "DND4EBETA.Zone",
};

DND4EBETA.saves = {
	"Arcane": "DND4EBETA.Arcane",
	"Divine": "DND4EBETA.Divine",
	"Martial": "DND4EBETA.Martial",
	"Elemental": "DND4EBETA.Elemental",
	"Ki": "DND4EBETA.Ki",
	"Primal": "DND4EBETA.Primal",
	"Psionic": "DND4EBETA.Psionic",
	"Shadow": "DND4EBETA.Shadow",

	"Acid": "DND4EBETA.DamageAcid",
	"Cold": "DND4EBETA.DamageCold",
	"Fire": "DND4EBETA.DamageFire",
	"Force": "DND4EBETA.DamageForce",
	"Lighting": "DND4EBETA.DamageLightning",
	"Necrotic": "DND4EBETA.DamageNecrotic",
	"Poison": "DND4EBETA.DamagePoison",
	"Psychic": "DND4EBETA.DamagePsychic",
	"Radiant": "DND4EBETA.DamageRadiant",
	"Thunder ": "DND4EBETA.DamageThunder",

	"Charm": "DND4EBETA.Charm",
	"Fear": "DND4EBETA.Fear",
	"Healing": "DND4EBETA.Healing",
	"Illusion": "DND4EBETA.Illusion",
	"Invigorating": "DND4EBETA.Invigorating",
	"Polymorph": "DND4EBETA.Polymorph",
	"Rage": "DND4EBETA.Rage",
	"Sleep": "DND4EBETA.Sleep",
	"Spirit": "DND4EBETA.Spirit",
	"Teleportation": "DND4EBETA.Teleportation"
};
/* -------------------------------------------- */

/**
 * The set of skill which can be trained in D&D4eBeta
 * @type {Object}
 */
DND4EBETA.skills = {
  "acr": "DND4EBETA.SkillAcr",
  "arc": "DND4EBETA.SkillArc",
  "ath": "DND4EBETA.SkillAth",
  "blu": "DND4EBETA.SkillBlu",
  "dip": "DND4EBETA.SkillDip",
  "dun": "DND4EBETA.SkillDun",
  "end": "DND4EBETA.SkillEnd",
  "eng": "DND4EBETA.SkillEng",
  "hea": "DND4EBETA.SkillHea",
  "his": "DND4EBETA.SkillHis",
  "ins": "DND4EBETA.SkillIns",
  "itm": "DND4EBETA.SkillItm",
  "nat": "DND4EBETA.SkillNat",
  "prc": "DND4EBETA.SkillPrc",
  "pra": "DND4EBETA.SkillPra",
  "rel": "DND4EBETA.SkillRel",
  "stl": "DND4EBETA.SkillStl",
  "stw": "DND4EBETA.SkillStw",
  "thi": "DND4EBETA.SkillThi"
};


/* -------------------------------------------- */

DND4EBETA.spellPreparationModes = {
  "always": "DND4EBETA.SpellPrepAlways",
  "atwill": "DND4EBETA.SpellPrepAtWill",
  "innate": "DND4EBETA.SpellPrepInnate",
  "pact": "DND4EBETA.PactMagic",
  "prepared": "DND4EBETA.SpellPrepPrepared"
};

DND4EBETA.spellUpcastModes = ["always", "pact", "prepared"];


DND4EBETA.spellProgression = {
  "none": "DND4EBETA.SpellNone",
  "full": "DND4EBETA.SpellProgFull",
  "half": "DND4EBETA.SpellProgHalf",
  "third": "DND4EBETA.SpellProgThird",
  "pact": "DND4EBETA.SpellProgPact",
  "artificer": "DND4EBETA.SpellProgArt"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
DND4EBETA.spellScalingModes = {
  "none": "DND4EBETA.SpellNone",
  "cantrip": "DND4EBETA.SpellCantrip",
  "level": "DND4EBETA.SpellLevel"
};

/* -------------------------------------------- */


/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
DND4EBETA.weaponTypes = {
	"simpleM": "DND4EBETA.WeaponSimpleM",
	"militaryM": "DND4EBETA.WeaponMilitaryM",
	"superiorM": "DND4EBETA.WeaponSuperiorM",
	"improvM": "DND4EBETA.WeaponImprovisedM",
	"simpleR": "DND4EBETA.WeaponSimpleR",  
	"militaryR": "DND4EBETA.WeaponMilitaryR",
	"superiorR": "DND4EBETA.WeaponSuperiorR",
	"improvR": "DND4EBETA.WeaponImprovisedR",
	"siegeM": "DND4EBETA.WeaponSiegeM",
	"siegeR": "DND4EBETA.WeaponSiegeR",
	"naturalM": "DND4EBETA.WeaponNaturalM",
	"naturalR": "DND4EBETA.WeaponNaturalR",
	"improv": "DND4EBETA.WeaponImprov",
	"other": "DND4EBETA.EquipmentTypeOther",

};

/* -------------------------------------------- */


/**
 * Define the set of hands configurations which a weapon item cantake
 * @type {Object}
 */
DND4EBETA.weaponHands = {
  "hMain": "DND4EBETA.HMain",
  "hTwo": "DND4EBETA.HTwo",
  "hOff": "DND4EBETA.HOff",
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
DND4EBETA.weaponProperties = {
  "amm": "DND4EBETA.WeaponPropertiesAmm",
  "bru": "DND4EBETA.WeaponPropertiesBru",
  "def": "DND4EBETA.WeaponPropertiesDef",
  "hic": "DND4EBETA.WeaponPropertiesHic",
  "imp": "DND4EBETA.WeaponPropertiesImp",
  "lof": "DND4EBETA.WeaponPropertiesLof",
  "lom": "DND4EBETA.WeaponPropertiesLom",
  "off": "DND4EBETA.WeaponPropertiesOff",
  "rch": "DND4EBETA.WeaponPropertiesRch",
  "rel": "DND4EBETA.WeaponPropertiesRel",
  "sml": "DND4EBETA.WeaponPropertiesSml",
  "spc": "DND4EBETA.WeaponPropertiesSpc",
  "thv": "DND4EBETA.WeaponPropertiesThv",
  "tlg": "DND4EBETA.WeaponPropertiesTlg",
  "two": "DND4EBETA.WeaponPropertiesTwo",
  "ver": "DND4EBETA.WeaponPropertiesVer"
};

DND4EBETA.weaponGroup = {
	"axe": "DND4EBETA.WeaponGroupAxe",
	"bladeH": "DND4EBETA.WeaponGroupBladeH",
	"bladeL": "DND4EBETA.WeaponGroupBladeL",
	"bow": "DND4EBETA.WeaponGroupBow",
	"cbow": "DND4EBETA.WeaponGroupCBow",
	"flail": "DND4EBETA.WeaponGroupFlail",
	"ham": "DND4EBETA.WeaponGroupHam",
	"mace": "DND4EBETA.WeaponGroupMace",
	"pik": "DND4EBETA.WeaponGroupPik",
	"pole": "DND4EBETA.WeaponGroupPole",
	"sling": "DND4EBETA.WeaponGroupSling",
	"spear": "DND4EBETA.WeaponGroupSpear",
	"staff": "DND4EBETA.WeaponGroupStaff",
	"unarm": "DND4EBETA.WeaponGroupUnarm"
};

// Spell Components
DND4EBETA.spellComponents = {
  "V": "DND4EBETA.ComponentVerbal",
  "S": "DND4EBETA.ComponentSomatic",
  "M": "DND4EBETA.ComponentMaterial"
};

// Spell Schools
DND4EBETA.spellSchools = {
  "abj": "DND4EBETA.SchoolAbj",
  "con": "DND4EBETA.SchoolCon",
  "div": "DND4EBETA.SchoolDiv",
  "enc": "DND4EBETA.SchoolEnc",
  "evo": "DND4EBETA.SchoolEvo",
  "ill": "DND4EBETA.SchoolIll",
  "nec": "DND4EBETA.SchoolNec",
  "trs": "DND4EBETA.SchoolTrs"
};

// Spell Levels
DND4EBETA.spellLevels = {
  0: "DND4EBETA.SpellLevel0",
  1: "DND4EBETA.SpellLevel1",
  2: "DND4EBETA.SpellLevel2",
  3: "DND4EBETA.SpellLevel3",
  4: "DND4EBETA.SpellLevel4",
  5: "DND4EBETA.SpellLevel5",
  6: "DND4EBETA.SpellLevel6",
  7: "DND4EBETA.SpellLevel7",
  8: "DND4EBETA.SpellLevel8",
  9: "DND4EBETA.SpellLevel9"
};

// Spell Scroll Compendium UUIDs
DND4EBETA.spellScrollIds = {
  0: 'Compendium.dnd4eBeta.items.rQ6sO7HDWzqMhSI3',
  1: 'Compendium.dnd4eBeta.items.9GSfMg0VOA2b4uFN',
  2: 'Compendium.dnd4eBeta.items.XdDp6CKh9qEvPTuS',
  3: 'Compendium.dnd4eBeta.items.hqVKZie7x9w3Kqds',
  4: 'Compendium.dnd4eBeta.items.DM7hzgL836ZyUFB1',
  5: 'Compendium.dnd4eBeta.items.wa1VF8TXHmkrrR35',
  6: 'Compendium.dnd4eBeta.items.tI3rWx4bxefNCexS',
  7: 'Compendium.dnd4eBeta.items.mtyw4NS1s7j2EJaD',
  8: 'Compendium.dnd4eBeta.items.aOrinPg7yuDZEuWr',
  9: 'Compendium.dnd4eBeta.items.O4YbkJkLlnsgUszZ'
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {Array[]}
 */
DND4EBETA.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

// Polymorph options.
DND4EBETA.polymorphSettings = {
  keepPhysical: 'DND4EBETA.PolymorphKeepPhysical',
  keepMental: 'DND4EBETA.PolymorphKeepMental',
  keepSaves: 'DND4EBETA.PolymorphKeepSaves',
  keepSkills: 'DND4EBETA.PolymorphKeepSkills',
  mergeSaves: 'DND4EBETA.PolymorphMergeSaves',
  mergeSkills: 'DND4EBETA.PolymorphMergeSkills',
  keepClass: 'DND4EBETA.PolymorphKeepClass',
  keepFeats: 'DND4EBETA.PolymorphKeepFeats',
  keepSpells: 'DND4EBETA.PolymorphKeepSpells',
  keepItems: 'DND4EBETA.PolymorphKeepItems',
  keepBio: 'DND4EBETA.PolymorphKeepBio',
  keepVision: 'DND4EBETA.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
DND4EBETA.proficiencyLevels = {
  0: "DND4EBETA.NotProficient",
  5: "DND4EBETA.Proficient"
};

DND4EBETA.trainingLevels = {
  0: "DND4EBETA.NotTrained",
  5: "DND4EBETA.Trained",
  8: "DND4EBETA.FocusTrained"
};
/* -------------------------------------------- */


// Condition Types
DND4EBETA.conditionTypes = {
	"blinded": "DND4EBETA.ConBlinded",
	"bloodied": "DND4EBETA.ConBlood",
	"dazed": "DND4EBETA.ConDazed",
	"deafened": "DND4EBETA.ConDeafened",
	"dominated": "DND4EBETA.ConDominated",
	"dying": "DND4EBETA.ConDying",
	"helpless": "DND4EBETA.ConHelpless",
	"immobilized": "DND4EBETA.Immobilized",
	"invisible": "DND4EBETA.ConInvisible",
	"marked": "DND4EBETA.ConMarked",
	"petrified": "DND4EBETA.ConPetrified",
	"prone": "DND4EBETA.ConProne",
	"restrained": "DND4EBETA.ConRestrained",
	"slowed": "DND4EBETA.ConSlower",
	"stunned": "DND4EBETA.ConStunned",
	"surprised": "DND4EBETA.ConSurprised",
	"unconscious": "DND4EBETA.ConUnconscious",
	"weakened": "DND4EBETA.ConWeakened",
};


DND4EBETA.statusEffect = [
	//row 1
	{
		id: "mark_1",
		label: "EFFECT.statusMark",
		icon: "systems/dnd4eBeta/icons/statusEffects/mark_1.svg"
	},
	{
		id: "mark_2",
		label: "EFFECT.statusMark",
		icon: "systems/dnd4eBeta/icons/statusEffects/mark_2.svg"
	},
	{
		id: "mark_3",
		label: "EFFECT.statusMark",
		icon: "systems/dnd4eBeta/icons/statusEffects/mark_3.svg"
	},
	{
		id: "mark_4",
		label: "EFFECT.statusMark",
		icon: "systems/dnd4eBeta/icons/statusEffects/mark_4.svg"
	},
	{
		id: "mark_5",
		label: "EFFECT.statusMark",
		icon: "systems/dnd4eBeta/icons/statusEffects/mark_5.svg"
	},
	{
		id: "mark_6",
		label: "EFFECT.statusMark",
		icon: "systems/dnd4eBeta/icons/statusEffects/mark_6.svg"
	},
	{
		id: "mark_7",
		label: "EFFECT.statusMark",
		icon: "systems/dnd4eBeta/icons/statusEffects/mark_7.svg"
	},
	//row 2
	{
		id: "bloodied",
		label: "EFFECT.statusBloodied",
		icon: "systems/dnd4eBeta/icons/statusEffects/bloodied.svg"
	},
	{
		id: "attack_up",
		label: "EFFECT.statusAttackUp",
		icon: "systems/dnd4eBeta/icons/statusEffects/attack_up.svg"
	},
	{
		id: "attack_down",
		label: "EFFECT.statusAttackDown",
		icon: "systems/dnd4eBeta/icons/statusEffects/attack_down.svg"
	},
	{
		id: "defUp",
		label: "EFFECT.statusDefUp",
		icon: "systems/dnd4eBeta/icons/statusEffects/def_up.svg"
	},
	{
		id: "defDown",
		label: "EFFECT.statusDefDown",
		icon: "systems/dnd4eBeta/icons/statusEffects/def_down.svg"
	},
	{
		id: "regen",
		label: "EFFECT.statusRegen",
		icon: "systems/dnd4eBeta/icons/statusEffects/regen.svg"
	},
	{
		id: "ammo_count",
		label: "EFFECT.statusAmmoCount",
		icon: "systems/dnd4eBeta/icons/statusEffects/ammo_count.svg"
	},
	//row 3
	{
		id: "curse",
		label: "EFFECT.statusCurse",
		icon: "systems/dnd4eBeta/icons/statusEffects/curse.svg"
	},
	{
		id: "oath",
		label: "EFFECT.statusOath",
		icon: "systems/dnd4eBeta/icons/statusEffects/oath.svg"
	},
	{
		id: "hunter_mark",
		label: "EFFECT.statusHunterMark",
		icon: "systems/dnd4eBeta/icons/statusEffects/hunter_mark.svg"
	},
	{
		id: "target",
		label: "EFFECT.statusTarget",
		icon: "systems/dnd4eBeta/icons/statusEffects/target.svg"
	},
	{
		id: "ongoing_1",
		label: "EFFECT.statusOngoing1",
		icon: "systems/dnd4eBeta/icons/statusEffects/ongoing_1.svg"
	},
	{
		id: "ongoing_2",
		label: "EFFECT.statusOngoing2",
		icon: "systems/dnd4eBeta/icons/statusEffects/ongoing_2.svg"
	},
	{
		id: "ongoing_3",
		label: "EFFECT.statusOngoing3",
		icon: "systems/dnd4eBeta/icons/statusEffects/ongoing_3.svg"
	},
	//row 4
	{
		id: "mounted",
		label: "EFFECT.statusMounted",
		icon: "systems/dnd4eBeta/icons/statusEffects/mounted.svg"
	},
	{
		id: "removed",
		label: "EFFECT.statusRemoved",
		icon: "systems/dnd4eBeta/icons/statusEffects/removed.svg"
	},
	{
		id: "blinded",
		label: "EFFECT.statusBlind",
		icon: "systems/dnd4eBeta/icons/statusEffects/blinded.svg"
	},
	{
		id: "dazed",
		label: "EFFECT.statusDazed",
		icon: "systems/dnd4eBeta/icons/statusEffects/dazed.svg"
	},
	{
		id: "dead",
		label: "EFFECT.statusDead",
		icon: "systems/dnd4eBeta/icons/statusEffects/dead.svg"
	},
	{
		id: "deafened",
		label: "EFFECT.statusDeafened",
		icon: "systems/dnd4eBeta/icons/statusEffects/deafened.svg"
	},
	{
		id: "disarmed",
		label: "EFFECT.statusDisarmed",
		icon: "systems/dnd4eBeta/icons/statusEffects/disarmed.svg"
	},
	//row 5
	{
		id: "dominated",
		label: "EFFECT.statusDominated",
		icon: "systems/dnd4eBeta/icons/statusEffects/dominated.svg"
	},
	{
		id: "drunk",
		label: "EFFECT.statusDrunk",
		icon: "systems/dnd4eBeta/icons/statusEffects/drunk.svg"
	},
	{
		id: "dying",
		label: "EFFECT.statusDying",
		icon: "systems/dnd4eBeta/icons/statusEffects/dying.svg"
	},
	{
		id: "flying",
		label: "EFFECT.statusFlying",
		icon: "systems/dnd4eBeta/icons/statusEffects/flying.svg"
	},
	{
		id: "restrained",
		label: "EFFECT.statusRestrained",
		icon: "systems/dnd4eBeta/icons/statusEffects/restrained.svg"
	},
	{
		id: "immobilized",
		label: "EFFECT.statusImmobilized",
		icon: "systems/dnd4eBeta/icons/statusEffects/immobilized.svg"
	},
	{
		id: "insubstantial",
		label: "EFFECT.statusInsubstantial",
		icon: "systems/dnd4eBeta/icons/statusEffects/insubstantial.svg"
	},
	//row 6
	{
		id: "invisible",
		label: "EFFECT.statusInvisible",
		icon: "systems/dnd4eBeta/icons/statusEffects/invisible.svg"
	},
	{
		id: "petrified",
		label: "EFFECT.statusPetrified",
		icon: "systems/dnd4eBeta/icons/statusEffects/Petrified.svg"
	},
	{
		id: "prone",
		label: "EFFECT.statusProne",
		icon: "systems/dnd4eBeta/icons/statusEffects/prone.svg"
	},
	{
		id: "grabbed",
		label: "EFFECT.statusGrabbed",
		icon: "systems/dnd4eBeta/icons/statusEffects/grabbed.svg"
	},
	{
		id: "sleeping",
		label: "EFFECT.statusSleeping",
		icon: "systems/dnd4eBeta/icons/statusEffects/Sleeping.svg"
	},
	{
		id: "slowed",
		label: "EFFECT.statusSlowed",
		icon: "systems/dnd4eBeta/icons/statusEffects/slowed.svg"
	},
	{
		id: "sneaking",
		label: "EFFECT.statusSneaking",
		icon: "systems/dnd4eBeta/icons/statusEffects/sneaking.svg"
	},
	//row 7
	{
		id: "stunned",
		label: "EFFECT.statusStunned",
		icon: "systems/dnd4eBeta/icons/statusEffects/stunned.svg"
	},
	{
		id: "surprised",
		label: "EFFECT.statusSurprised",
		icon: "systems/dnd4eBeta/icons/statusEffects/surprised.svg"
	},
	{
		id: "torch",
		label: "EFFECT.statusTorch",
		icon: "systems/dnd4eBeta/icons/statusEffects/torch.svg"
	},
	{
		id: "unconscious",
		label: "EFFECT.statusUnconscious",
		icon: "systems/dnd4eBeta/icons/statusEffects/unconscious.svg"
	},
	{
		id: "weakened",
		label: "EFFECT.statusWeakened",
		icon: "systems/dnd4eBeta/icons/statusEffects/weakend.svg"
	}
];
// Languages
DND4EBETA.spoken = {
  "Abyssal": "DND4EBETA.SpokenAbyssal",
  "Common": "DND4EBETA.SpokenCommon",
  "DeepSpeech": "DND4EBETA.SpokenDeepSpeech",
  "Draconic": "DND4EBETA.SpokenDraconic",
  "Dwarven": "DND4EBETA.SpokenDwarven",
  "Elven": "DND4EBETA.SpokenElven",
  "Giant": "DND4EBETA.SpokenGiant",
  "Goblin": "DND4EBETA.SpokenGoblin",
  "Primordial": "DND4EBETA.SpokenPrimordial",
  "Supernal": "DND4EBETA.SpokenSupernal",
};
DND4EBETA.script = {
  "Common": "DND4EBETA.ScriptCommon",
  "Barazhad": "DND4EBETA.ScriptBarazhad",
  "Davek": "DND4EBETA.ScriptDavek",
  "Iokharic": "DND4EBETA.ScriptIokharic",
  "Rellanic": "DND4EBETA.ScriptRellanic",

};

// Character Level XP Requirements
DND4EBETA.CHARACTER_EXP_LEVELS =  [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
;

// Challenge Rating XP Levels
DND4EBETA.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Configure Optional Character Flags
DND4EBETA.characterFlags = {
  "powerfulBuild": {
    name: "DND4EBETA.FlagsPowerfulBuild",
    hint: "DND4EBETA.FlagsPowerfulBuildHint",
    section: "Racial Traits",
    type: Boolean
  },
  "savageAttacks": {
    name: "DND4EBETA.FlagsSavageAttacks",
    hint: "DND4EBETA.FlagsSavageAttacksHint",
    section: "Racial Traits",
    type: Boolean
  },
  "elvenAccuracy": {
    name: "DND4EBETA.FlagsElvenAccuracy",
    hint: "DND4EBETA.FlagsElvenAccuracyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "halflingLucky": {
    name: "DND4EBETA.FlagsHalflingLucky",
    hint: "DND4EBETA.FlagsHalflingLuckyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "DND4EBETA.FlagsInitiativeAdv",
    hint: "DND4EBETA.FlagsInitiativeAdvHint",
    section: "Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "DND4EBETA.FlagsAlert",
    hint: "DND4EBETA.FlagsAlertHint",
    section: "Feats",
    type: Boolean
  },
  "jackOfAllTrades": {
    name: "DND4EBETA.FlagsJOAT",
    hint: "DND4EBETA.FlagsJOATHint",
    section: "Feats",
    type: Boolean
  },
  "observantFeat": {
    name: "DND4EBETA.FlagsObservant",
    hint: "DND4EBETA.FlagsObservantHint",
    skills: ['prc','inv'],
    section: "Feats",
    type: Boolean
  },
  "reliableTalent": {
    name: "DND4EBETA.FlagsReliableTalent",
    hint: "DND4EBETA.FlagsReliableTalentHint",
    section: "Feats",
    type: Boolean
  },
  "remarkableAthlete": {
    name: "DND4EBETA.FlagsRemarkableAthlete",
    hint: "DND4EBETA.FlagsRemarkableAthleteHint",
    abilities: ['str','dex','con'],
    section: "Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "DND4EBETA.FlagsCritThreshold",
    hint: "DND4EBETA.FlagsCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  }
};

// Configure allowed status flags
DND4EBETA.allowedActorFlags = [
  "isPolymorphed", "originalActor"
].concat(Object.keys(DND4EBETA.characterFlags));
