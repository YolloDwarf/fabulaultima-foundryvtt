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

FUItem.qualities = {
  custom: {
    name: "FU.item.equipment.qualitiesList.custom",
    type: "textarea",
    availableFor: ["accessory", "armor", "shield", "weapon"],
  },
  antiStatus: {
    name: "FU.item.equipment.qualitiesList.antiStatus",
    type: "select",
    options: "statuses",
    availableFor: ["accessory", "armor", "shield", "weapon"],
  },
  doubleResistance: {
    name: "FU.item.equipment.qualitiesList.doubleResistance",
    type: "select",
    options: "damageTypes",
    multiChoice: true,
    availableFor: ["accessory", "armor", "shield", "weapon"],
  },
  healingPlus: {
    name: "FU.item.equipment.qualitiesList.healingPlus",
    availableFor: ["accessory", "armor", "shield"],
  },
  immunity: {
    name: "FU.item.equipment.qualitiesList.immunity",
    type: "select",
    options: "damageTypes",
    availableFor: ["accessory", "armor", "shield", "weapon"],
  },
  initiativePlus: {
    name: "FU.item.equipment.qualitiesList.initiativePlus",
    availableFor: ["accessory", "armor", "shield"],
  },
  magicPlus: {
    name: "FU.item.equipment.qualitiesList.magicPlus",
    availableFor: ["accessory", "armor", "shield"],
  },
  perfectHealth: {
    name: "FU.item.equipment.qualitiesList.perfectHealth",
    availableFor: ["accessory", "armor", "shield", "weapon"],
  },
  precisionPlus: {
    name: "FU.item.equipment.qualitiesList.precisionPlus",
    availableFor: ["accessory", "armor", "shield"],
  },
  resistance: {
    name: "FU.item.equipment.qualitiesList.resistance",
    type: "select",
    options: "damageTypes",
    availableFor: ["accessory", "armor", "shield", "weapon"],
  },
  spellPlus: {
    name: "FU.item.equipment.qualitiesList.spellPlus",
    availableFor: ["accessory", "armor", "shield"],
  },
  swordBreak: {
    name: "FU.item.equipment.qualitiesList.swordBreak",
    availableFor: ["accessory", "armor", "shield", "weapon"],
  },
  vitalityPlus: {
    name: "FU.item.equipment.qualitiesList.vitalityPlus",
    availableFor: ["accessory", "armor", "shield"],
  },
  weaponPlus: {
    name: "FU.item.equipment.qualitiesList.weaponPlus",
    availableFor: ["accessory", "armor", "shield"],
  },
  amulet: {
    name: "FU.item.equipment.qualitiesList.amulet",
    availableFor: ["accessory", "weapon"],
  },
  bulwark: {
    name: "FU.item.equipment.qualitiesList.bulwark",
    availableFor: ["accessory", "weapon"],
  },
  damageChange: {
    name: "FU.item.equipment.qualitiesList.damageChange",
    type: "select",
    options: "damageTypes",
    availableFor: ["accessory"],
  },
  omnishield: {
    name: "FU.item.equipment.qualitiesList.omnishield",
    availableFor: ["accessory", "weapon"],
  },
  bonusMagic: {
    name: "FU.item.equipment.qualitiesList.magicBonus",
    availableFor: ["weapon"],
  },
  bonusPrecision: {
    name: "FU.item.equipment.qualitiesList.precisionBonus",
    availableFor: ["weapon"],
  },
  breaks: {
    name: "FU.item.equipment.qualitiesList.breaks",
    availableFor: ["weapon"],
  },
  doubleHunting: {
    name: "FU.item.equipment.qualitiesList.doubleHunting",
    type: "select",
    options: "speciesType",
    multiChoice: true,
    availableFor: ["weapon"],
  },
  equipFreeHand: {
    name: "FU.item.equipment.qualitiesList.alwaysEquipped",
    availableFor: ["weapon"],
  },
  extraDamage: {
    name: "FU.item.equipment.qualitiesList.extraDamage",
    type: "number",
    availableFor: ["weapon"],
  },
  heavyWeight: {
    name: "FU.item.equipment.qualitiesList.heavyWeight",
    availableFor: ["weapon"],
  },
  hunting: {
    name: "FU.item.equipment.qualitiesList.hunting",
    type: "select",
    options: "speciesType",
    availableFor: ["weapon"],
  },
  lightWeight: {
    name: "FU.item.equipment.qualitiesList.lightWeight",
    availableFor: ["weapon"],
  },
  magical: {
    name: "FU.item.equipment.qualitiesList.magical",
    availableFor: ["weapon"],
  },
  multi: {
    name: "FU.item.equipment.qualitiesList.multi",
    type: "number",
    availableFor: ["weapon"],
  },
  piercing: {
    name: "FU.item.equipment.qualitiesList.piercing",
    availableFor: ["weapon"],
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
};
preLocalize("qualities", { key: "label", sort: true });

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
