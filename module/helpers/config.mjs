import { FUItems } from "./configs/items-config.mjs";

export const FABULAULTIMA = {
  items: FUItems,
};

/**
 * The set of Ability Scores used within the sytem.
 * @type {Object}
 */
FU.attributes = {
  dexterity: game.i18n.localize("FU.attributes.dexterity"),
  intuition: game.i18n.localize("FU.attributes.intuition"),
  vigor: game.i18n.localize("FU.attributes.vigor"),
  will: game.i18n.localize("FU.attributes.will"),
};

FU.attrs = {
  dexterity: game.i18n.localize("FU.attributes.DEX"),
  intuition: game.i18n.localize("FU.attributes.INT"),
  vigor: game.i18n.localize("FU.attributes.VIG"),
  will: game.i18n.localize("FU.attributes.WIL"),
};

FU.damageTypes = {
  air: {
    name: game.i18n.localize("FU.damageType.air"),
    value: "air",
  },
  earth: {
    name: game.i18n.localize("FU.damageType.earth"),
    value: "earth",
  },
  fire: {
    name: game.i18n.localize("FU.damageType.fire"),
    value: "fire",
  },
  ice: {
    name: game.i18n.localize("FU.damageType.ice"),
    value: "ice",
  },
  light: {
    name: game.i18n.localize("FU.damageType.light"),
    value: "light",
  },
  lightning: {
    name: game.i18n.localize("FU.damageType.lightning"),
    value: "lightning",
  },
  physical: {
    name: game.i18n.localize("FU.damageType.physical"),
    value: "physical",
  },
  poison: {
    name: game.i18n.localize("FU.damageType.poison"),
    value: "poison",
  },
  shadow: {
    name: game.i18n.localize("FU.damageType.shadow"),
    value: "Shadow",
  },
};
