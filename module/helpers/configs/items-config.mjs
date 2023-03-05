import { preLocalize } from "../utils.mjs";

export const FUItem = {};

FUItem.equipment = {
  cost: "FU.item.cost",
  qualities: "FU.item.qualities",
};
preLocalize("equipment", { key: "label", sort: true });

FUItem.defense = {
  dex: {
    label: "FU.item.equipment.armor.dex",
    value: "@dex",
  },
  dex1: {
    label: "FU.item.equipment.armor.dex1",
    value: "@dex + 1",
  },
  base10: {
    label: "FU.item.equipment.armor.base10",
    value: "10",
  },
  base11: {
    label: "FU.item.equipment.armor.base11",
    value: "11",
  },
  base12: {
    label: "FU.item.equipment.armor.base12",
    value: "12",
  },
};
preLocalize("defense", { key: "label", sort: true });

FUItem.magicDefense = {
  int: {
    label: "FU.item.equipment.armor.int",
    value: "@int",
  },
  int1: {
    label: "FU.item.equipment.armor.int1",
    value: "@int + 1",
  },
  int2: {
    label: "FU.item.equipment.armor.int2",
    value: "@int + 2",
  },
};
preLocalize("magicDefense", { key: "label", sort: true });

FUItem.magicDefenseBonus = {
  none: {
    label: "FU.item.equipment.armor.none",
    value: "0",
  },
  plusTwo: {
    label: "FU.item.equipment.armor.plusTwo",
    value: "+2",
  },
};
preLocalize("magicDefenseBonus", { key: "label", sort: true });

FUItem.weapon = {
  class: "FU.item.weapon.class",
  damage: "FU.item.weapon.damage",
  hands: "FU.item.weapon.hands",
  melee: "FU.item.weapon.melee",
  oneHand: "FU.item.weapon.oneHand",
  precision: "FU.item.weapon.precision",
  ranged: "FU.item.weapon.ranged",
  rangeType: "FU.item.weapon.rangeType",
  twoHand: "FU.item.weapon.twoHand",
};
preLocalize("weapon", { key: "label", sort: true });

FUItem.defensiveQualities = {
  custom: { name: "FU.item.equipment.qualitiesList.custom", type: "textarea" },
  antiStatus: {
    name: "FU.item.equipment.qualitiesList.antiStatus",
    type: "select",
    options: "statuses",
  },
  doubleResistance: {
    name: "FU.item.equipment.qualitiesList.doubleResistance",
    type: "select",
    options: "damageTypes",
    multiChoice: true,
  },
  healingPlus: {
    name: "FU.item.equipment.qualitiesList.healingPlus",
  },
  immunity: {
    name: "FU.item.equipment.qualitiesList.immunity",
    type: "select",
    options: "damageTypes",
  },
  initiativePlus: {
    name: "FU.item.equipment.qualitiesList.initiativePlus",
  },
  magicPlus: {
    name: "FU.item.equipment.qualitiesList.magicPlus",
  },
  perfectHealth: {
    name: "FU.item.equipment.qualitiesList.perfectHealth",
  },
  precisionPlus: {
    name: "FU.item.equipment.qualitiesList.precisionPlus",
  },
  resistance: {
    name: "FU.item.equipment.qualitiesList.resistance",
    type: "select",
    options: "damageTypes",
  },
  spellPlus: {
    name: "FU.item.equipment.qualitiesList.spellPlus",
  },
  swordBreak: {
    name: "FU.item.equipment.qualitiesList.swordBreak",
  },
  vitalityPlus: {
    name: "FU.item.equipment.qualitiesList.vitalityPlus",
  },
  weaponPlus: {
    name: "FU.item.equipment.qualitiesList.weaponPlus",
  },
};
preLocalize("defensiveQualities", { key: "label", sort: true });

FUItem.accessoryQualities = {
  custom: { name: "FU.item.equipment.qualitiesList.custom", type: "textarea" },
  amulet: {
    name: "FU.item.equipment.qualitiesList.amulet",
  },
  antiStatus: {
    name: "FU.item.equipment.qualitiesList.antiStatus",
    type: "select",
    options: "statuses",
  },
  bulwark: {
    name: "FU.item.equipment.qualitiesList.bulwark",
  },
  damageChange: {
    name: "FU.item.equipment.qualitiesList.damageChange",
    type: "select",
    options: "damageTypes",
  },
  doubleResistance: {
    name: "FU.item.equipment.qualitiesList.doubleResistance",
    type: "select",
    options: "damageTypes",
    multiChoice: true,
  },
  healingPlus: {
    name: "FU.item.equipment.qualitiesList.healingPlus",
  },
  immunity: {
    name: "FU.item.equipment.qualitiesList.immunity",
    type: "select",
    options: "damageTypes",
  },
  initiativePlus: {
    name: "FU.item.equipment.qualitiesList.initiativePlus",
  },
  magicPlus: {
    name: "FU.item.equipment.qualitiesList.magicPlus",
  },
  omnishield: {
    name: "FU.item.equipment.qualitiesList.omnishield",
  },
  perfectHealth: {
    name: "FU.item.equipment.qualitiesList.perfectHealth",
  },
  precisionPlus: {
    name: "FU.item.equipment.qualitiesList.precisionPlus",
  },
  resistance: {
    name: "FU.item.equipment.qualitiesList.resistance",
    type: "select",
    options: "damageTypes",
  },
  spellPlus: {
    name: "FU.item.equipment.qualitiesList.spellPlus",
  },
  swordBreak: {
    name: "FU.item.equipment.qualitiesList.swordBreak",
  },
  vitalityPlus: {
    name: "FU.item.equipment.qualitiesList.vitalityPlus",
  },
  weaponPlus: {
    name: "FU.item.equipment.qualitiesList.weaponPlus",
  },
};
preLocalize("accessoryQualities", { key: "label", sort: true });

FUItem.weaponQualities = {
  custom: { name: "FU.item.equipment.qualitiesList.custom", type: "textarea" },
  amulet: {
    name: "FU.item.equipment.qualitiesList.amulet",
  },
  antiStatus: {
    name: "FU.item.equipment.qualitiesList.antiStatus",
    type: "select",
    options: "statuses",
  },
  bonusMagic: {
    name: "FU.item.equipment.qualitiesList.magicBonus",
  },
  bonusPrecision: {
    name: "FU.item.equipment.qualitiesList.precisionBonus",
  },
  breaks: {
    name: "FU.item.equipment.qualitiesList.breaks",
  },
  bulwark: {
    name: "FU.item.equipment.qualitiesList.bulwark",
  },
  doubleHunting: {
    name: "FU.item.equipment.qualitiesList.doubleHunting",
    type: "text",
    options: "creatureTypes",
    multiChoice: true,
  },
  doubleResistance: {
    name: "FU.item.equipment.qualitiesList.doubleResistance",
    type: "select",
    options: "damageTypes",
    multiChoice: true,
  },
  equipFreeHand: {
    name: "FU.item.equipment.qualitiesList.alwaysEquipped",
  },
  extraDamage: {
    name: "FU.item.equipment.qualitiesList.extraDamage",
    type: "number",
  },
  heavyWeight: {
    name: "FU.item.equipment.qualitiesList.heavyWeight",
  },
  hunting: {
    name: "FU.item.equipment.qualitiesList.hunting",
    type: "text",
    options: "creatureTypes",
  },
  immunity: {
    name: "FU.item.equipment.qualitiesList.immunity",
    type: "select",
    options: "damageTypes",
  },
  lightWeight: {
    name: "FU.item.equipment.qualitiesList.lightWeight",
  },
  magical: {
    name: "FU.item.equipment.qualitiesList.magical",
  },
  multi: {
    name: "FU.item.equipment.qualitiesList.multi",
    type: "number",
  },
  perfectHealth: {
    name: "FU.item.equipment.qualitiesList.perfectHealth",
  },
  piercing: {
    name: "FU.item.equipment.qualitiesList.piercing",
  },
  omnishield: {
    name: "FU.item.equipment.qualitiesList.omnishield",
  },
  resistance: {
    name: "FU.item.equipment.qualitiesList.resistance",
    type: "select",
    options: "damageTypes",
  },
  status: {
    name: "FU.item.equipment.qualitiesList.status",
    type: "select",
    options: "statuses",
  },
  statusPlus: {
    name: "FU.item.equipment.qualitiesList.statusPlus",
    type: "select",
    options: "statuses",
    multiChoice: true,
  },
  swordBreak: {
    name: "FU.item.equipment.qualitiesList.swordBreak",
  },
};
preLocalize("weaponQualities", { key: "label", sort: true });

FUItem.equipmentClass = {
  simple: "FU.item.equipment.equipmentClass.simple",
  martial: "FU.item.equipment.equipmentClass.martial",
};
preLocalize("equipmentClass", { key: "label", sort: true });

FUItem.weaponTypes = {
  arcane: "FU.item.equipment.weaponTypes.arcane",
  bow: "FU.item.equipment.weaponTypes.bow",
  brawl: "FU.item.equipment.weaponTypes.brawl",
  dagger: "FU.item.equipment.weaponTypes.dagger",
  firearm: "FU.item.equipment.weaponTypes.firearm",
  flail: "FU.item.equipment.weaponTypes.flail",
  heavy: "FU.item.equipment.weaponTypes.heavy",
  lance: "FU.item.equipment.weaponTypes.lance",
  sword: "FU.item.equipment.weaponTypes.sword",
  thrown: "FU.item.equipment.weaponTypes.thrown",
};
preLocalize("weaponTypes", { key: "label", sort: true });
