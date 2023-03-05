// Import document classes.
import { FUActor } from "./documents/actor.mjs";
import { FUItem } from "./documents/item.mjs";
// Import sheet classes.
import { FUActorSheet } from "./sheets/actor-sheet.mjs";
import { FUArmorSheet } from "./sheets/items/item-armor-sheet.mjs";
import { FUItemSheet } from "./sheets/items/item-sheet.mjs";
import { FUWeaponSheet } from "./sheets/items/item-weapon-sheet.mjs";
// Import helper/utility classes and constants.
import { FU } from "./helpers/configs/config.mjs";
import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
import { FUShieldSheet } from "./sheets/items/item-shield-sheet.mjs";
import { FUAccessorySheet } from "./sheets/items/item-accessory-sheet.mjs";

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once("init", async function () {
  // Add utility classes to the global game object so that they're more easily
  // accessible in global contexts.
  game.fabulaUltima = {
    FUActor,
    FUItem,
    rollItemMacro,
  };

  // Add custom constants for configuration.
  CONFIG.FU = FU;

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20 + @abilities.dex.mod",
    decimals: 2,
  };

  // Define custom Document classes
  CONFIG.Actor.documentClass = FUActor;
  CONFIG.Item.documentClass = FUItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("fabulaUltima", FUActorSheet, {
    makeDefault: true,
  });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("fabulaUltima", FUItemSheet, {
    makeDefault: true,
    types: ["item"],
  });
  Items.registerSheet("fabulaUltima", FUWeaponSheet, {
    makeDefault: true,
    types: ["weapon"],
  });
  Items.registerSheet("fabulaUltima", FUArmorSheet, {
    makeDefault: true,
    types: ["armor"],
  });
  Items.registerSheet("fabulaUltima", FUShieldSheet, {
    makeDefault: true,
    types: ["shield"],
  });
  Items.registerSheet("fabulaUltima", FUAccessorySheet, {
    makeDefault: true,
    types: ["accessory"],
  });

  // Preload Handlebars templates.
  return preloadHandlebarsTemplates();
});

/* -------------------------------------------- */
/*  Handlebars Helpers                          */
/* -------------------------------------------- */

// If you need to add Handlebars helpers, here are a few useful examples:
Handlebars.registerHelper("concat", function () {
  var outStr = "";
  for (var arg in arguments) {
    if (typeof arguments[arg] != "object") {
      outStr += arguments[arg];
    }
  }
  return outStr;
});

Handlebars.registerHelper("toLowerCase", function (str) {
  return str.toLowerCase();
});

/* -------------------------------------------- */
/*  Ready Hook                                  */
/* -------------------------------------------- */

Hooks.once("ready", async function () {
  // Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
  Hooks.on("hotbarDrop", (bar, data, slot) => createItemMacro(data, slot));
});

/* -------------------------------------------- */
/*  Hotbar Macros                               */
/* -------------------------------------------- */

/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {Object} data     The dropped data
 * @param {number} slot     The hotbar slot to use
 * @returns {Promise}
 */
async function createItemMacro(data, slot) {
  // First, determine if this is a valid owned item.
  if (data.type !== "Item") return;
  if (!data.uuid.includes("Actor.") && !data.uuid.includes("Token.")) {
    return ui.notifications.warn(
      "You can only create macro buttons for owned Items"
    );
  }
  // If it is, retrieve it based on the uuid.
  const item = await Item.fromDropData(data);

  // Create the macro command using the uuid.
  const command = `game.fabulaUltima.rollItemMacro("${data.uuid}");`;
  let macro = game.macros.find(
    (m) => m.name === item.name && m.command === command
  );
  if (!macro) {
    macro = await Macro.create({
      name: item.name,
      type: "script",
      img: item.img,
      command: command,
      flags: { "fabulaUltima.itemMacro": true },
    });
  }
  game.user.assignHotbarMacro(macro, slot);
  return false;
}

/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {string} itemUuid
 */
function rollItemMacro(itemUuid) {
  // Reconstruct the drop data so that we can load the item.
  const dropData = {
    type: "Item",
    uuid: itemUuid,
  };
  // Load the item from the uuid.
  Item.fromDropData(dropData).then((item) => {
    // Determine if the item loaded and if it's an owned item.
    if (!item || !item.parent) {
      const itemName = item?.name ?? itemUuid;
      return ui.notifications.warn(
        `Could not find item ${itemName}. You may need to delete and recreate this macro.`
      );
    }

    // Trigger the item roll
    item.roll();
  });
}
