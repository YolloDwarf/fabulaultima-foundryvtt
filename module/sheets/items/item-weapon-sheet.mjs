import { FabulaUltimaItemSheet } from "./item-sheet.mjs";

export class FabulaUltimaWeaponSheet extends FabulaUltimaItemSheet {
  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["fabulaUltima", "sheet", "item", "weapon"],
      width: 520,
      height: 480,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "description",
        },
      ],
    });
  }

  /** @override */
  get template() {
    const path = "systems/fabulaUltima/templates/item";
    // Return a single sheet for all item types.
    // return `${path}/item-sheet.html`;

    // Alternatively, you could use the following return statement to do a
    // unique item sheet by type, like `weapon-sheet.html`.
    return `${path}/item-${this.item.type}-sheet.html`;
  }

  /* -------------------------------------------- */
  /** @override */
  getData() {
    const data = super.getData();
    data.config = CONFIG.FABULAULTIMA;
    return data;
  }
}
