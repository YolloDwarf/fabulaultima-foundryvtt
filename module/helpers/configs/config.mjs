import { FUItem } from "./items-config.mjs";
import { preLocalize } from "../utils.mjs";

export const FU = {
  item: FUItem,
};

/**
 * The set of Ability Scores used within the sytem.
 * @type {Object}
 */
FU.attributes = {
  dexterity: "FU.attributes.dexterity",
  intuition: "FU.attributes.intuition",
  vigor: "FU.attributes.vigor",
  will: "FU.attributes.will",
};
preLocalize("attributes", { key: "label", sort: true });

FU.attrs = {
  dexterity: "FU.attributes.DEX",
  intuition: "FU.attributes.INT",
  vigor: "FU.attributes.VIG",
  will: "FU.attributes.WIL",
};
preLocalize("attrs", { key: "label", sort: true });

FU.damageTypes = {
  physical: "FU.damageType.physical",
  air: "FU.damageType.air",
  earth: "FU.damageType.earth",
  fire: "FU.damageType.fire",
  ice: "FU.damageType.ice",
  light: "FU.damageType.light",
  lightning: "FU.damageType.lightning",
  poison: "FU.damageType.poison",
  shadow: "FU.damageType.shadow",
};
preLocalize("damageTypes", { key: "label", sort: true });

FU.statuses = {
  poisoned: "FU.statuses.poisoned",
  confused: "FU.statuses.confused",
  weak: "FU.statuses.weak",
  furious: "FU.statuses.furious",
  slow: "FU.statuses.slow",
  shaken: "FU.statuses.shaken",
};
preLocalize("statuses", { key: "label", sort: true });
