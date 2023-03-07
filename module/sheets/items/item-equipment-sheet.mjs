import { FUItemSheet } from "./item-sheet.mjs";

export class FUEquipmentSheet extends FUItemSheet {
  _newQuality = null;

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: [
        "fabulaUltima",
        "sheet",
        "item",
        ["accessory", "armor", "shield", "weapon"]
      ],
      width: 520,
      height: 480,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "description"
        }
      ]
    });
  }

  /** @override */
  get template() {
    const path = "systems/fabulaUltima/templates/item";
    // Return a single sheet for all item types.
    // return `${path}/item-sheet.html`;

    // Alternatively, you could use the following return statement to do a
    // unique item sheet by type, like `weapon-sheet.html`.
    return `${path}/item-equipment-sheet.hbs`;
  }

  /* -------------------------------------------- */
  /** @override */
  getData() {
    const data = super.getData();
    data.config = CONFIG.FU;
    return data;
  }

  /** @override */
  activateListeners(html) {
    html.find(".new-quality").change(this._qualityChange.bind(this, html));
    html.find(".add-quality").click(this._addQuality.bind(this, event, html));
    html.find(".remove-quality").click(this._removeQuality.bind(this));

    const qualitySelect = html.find(".new-quality");
    qualitySelect.change((event) => {
      this._newQuality =
        this.getData().config.item.qualities[event.target.value];
      html.find("[name*='quality.value']").remove();
      if (this._newQuality?.type) {
        let inputs = "";
        if (
          this._newQuality.type === "text" ||
          this._newQuality.type === "number"
        ) {
          inputs = `
          <input class="quality-value" name="quality.value1" type=${
            this._newQuality.type
          } ${
            this._newQuality.type === "number" ? 'data-dtype="Number"' : ""
          } />
        `;
          if (this._newQuality.multiChoice) {
            inputs += `
          <input class="quality-value" name="quality.value2" type=${
            this._newQuality.type
          } ${
              this._newQuality.type === "number" ? 'data-dtype="Number"' : ""
            } />
        `;
          }
          qualitySelect.after(inputs);
        } else if (this._newQuality.type === "select") {
          let options = "";
          const opts = this.getData().config[this._newQuality.options];
          Object.keys(opts).forEach((key) => {
            options += `
              <option value="${key}">${game.i18n.localize(opts[key])}</option>
            `;
          });
          let inputs = `
          <select class="quality-value" name="quality.value1">${options}</select>
        `;
          if (this._newQuality.multiChoice) {
            inputs += `
          <select class="quality-value" name="quality.value2">${options}</select>
        `;
          }
          qualitySelect.after(inputs);
        }
      }
    });

    super.activateListeners(html);
  }

  _qualityChange(html, event) {
    event?.preventDefault();
    html
      .find(".add-quality")
      .css("visibility", event.currentTarget.value ? "visible" : "hidden");
    return;
  }

  async _addQuality(event, html) {
    event?.preventDefault();

    const quality = html.find(".new-quality").val();
    const value1 = html.find('[name="quality.value1"]').val();
    const value2 = html.find('[name="quality.value2"]').val();
    const qualityData = this.getData().config.item.qualities[quality];

    let flagValue = {
      label: qualityData.name
    };
    if (value1) {
      flagValue.value1 = value1;
      flagValue.value1Name =
        qualityData.type === "select"
          ? game.i18n.localize(
              this.getData().config[qualityData.options][value1]
            )
          : undefined;
    }
    if (value2) {
      flagValue.value2 = value2;
      flagValue.value2Name =
        qualityData.type === "select"
          ? game.i18n.localize(
              this.getData().config[qualityData.options][value2]
            )
          : undefined;
    }

    await this.item.setFlag("fabulaUltima", `qualities.${quality}`, flagValue);
    html
      .find(".remove-quality")
      .click(this._removeQuality.bind(this, event, html));
    return;
  }

  async _removeQuality(event) {
    console.log(event.currentTarget.id);
    await this.item.unsetFlag(
      "fabulaUltima",
      `qualities.${event.currentTarget.id}`
    );
    return;
  }
}
