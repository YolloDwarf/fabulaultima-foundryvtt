export const FUItems = {};

FUItems.equipment = {
  cost: game.i18n.localize("FU.item.cost"),
  qualities: game.i18n.localize("FU.item.qualities"),
};

FUItems.weapon = {
  damage: game.i18n.localize("FU.item.weapon.damage"),
  hands: game.i18n.localize("FU.item.weapon.hands"),
  melee: game.i18n.localize("FU.item.weapon.melee"),
  precision: game.i18n.localize("FU.item.weapon.precision"),
  ranged: game.i18n.localize("FU.item.weapon.ranged"),
  rangeType: game.i18n.localize("FU.item.weapon.rangeType"),
};

FUItems.weaponQualities = {
  breaks: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.breaks"),
  },
  equipFreeHand: {
    name: game.i18n.localize(
      "FUItems.item.equipment.qualitiesList.alwaysEquipped"
    ),
  },
  magical: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.magical"),
  },
  hunting: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.hunting"),
    type: "text",
    options: "creatureTypes",
  },
  piercing: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.piercing"),
  },
  doubleHunting: {
    name: game.i18n.localize(
      "FUItems.item.equipment.qualitiesList.doubleHunting"
    ),
    type: "text",
    options: "creatureTypes",
    multiChoice: true,
  },
  multi: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.multi"),
    type: "number",
  },
  status: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.statuses"),
    type: "select",
    options: "statuses",
  },
  statusPlus: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.statusPlus"),
    type: "select",
    options: "statuses",
    multiChoice: true,
  },
  bonusMagic: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.magicBonus"),
  },
  bonusPrecision: {
    name: game.i18n.localize(
      "FUItems.item.equipment.qualitiesList.precisionBonus"
    ),
  },
  increasedDamage: {
    name: game.i18n.localize(
      "FUItems.item.equipment.qualitiesList.extraDamage"
    ),
    type: "number",
  },
  heavyWeight: {
    name: game.i18n.localize(
      "FUItems.item.equipment.qualitiesList.heavyWeight"
    ),
  },
  lightWeight: {
    name: game.i18n.localize(
      "FUItems.item.equipment.qualitiesList.lightWeight"
    ),
  },
  antiStatus: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.antiStatus"),
    type: "select",
    options: "statuses",
  },
  resistance: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.resistance"),
    type: "select",
    options: "damageTypes",
  },
  amulet: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.amulet"),
  },
  bulwark: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.bulwark"),
  },
  doubleResistance: {
    name: game.i18n.localize(
      "FUItems.item.equipment.qualitiesList.doubleResistance"
    ),
    type: "select",
    options: "damageTypes",
    multiChoice: true,
  },
  swordBreak: {
    name: game.i18n.localize(
      "FUItems.item.equipment.qualitiesList.swordbreaking"
    ),
  },
  immunity: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.immunity"),
    type: "select",
    options: "damageTypes",
  },
  omnishield: {
    name: game.i18n.localize("FUItems.item.equipment.qualitiesList.omnishield"),
  },
  perfectHealth: {
    name: game.i18n.localize(
      "FUItems.item.equipment.qualitiesList.perfectHealth"
    ),
  },
};

FUItems.weaponTypes = {
  arcane: game.i18n.localize("FU.item.equipment.weaponTypes.arcane"),
  bow: game.i18n.localize("FU.item.equipment.weaponTypes.bow"),
  brawl: game.i18n.localize("FU.item.equipment.weaponTypes.brawl"),
  dagger: game.i18n.localize("FU.item.equipment.weaponTypes.dagger"),
  firearm: game.i18n.localize("FU.item.equipment.weaponTypes.firearm"),
  flail: game.i18n.localize("FU.item.equipment.weaponTypes.flail"),
  heavy: game.i18n.localize("FU.item.equipment.weaponTypes.heavy"),
  lance: game.i18n.localize("FU.item.equipment.weaponTypes.lance"),
  sword: game.i18n.localize("FU.item.equipment.weaponTypes.sword"),
  thrown: game.i18n.localize("FU.item.equipment.weaponTypes.thrown"),
};
