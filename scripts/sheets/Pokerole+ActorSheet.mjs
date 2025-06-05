import { TEMPLATES } from "../templates.mjs";

export class PokerolePlusActorSheet extends ActorSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["pokerole+", "sheet", "actor"],
      width: 720,
      height: 600,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "attributes",
        },
      ],
    });
  }

  /** @override */
  get template() {
    switch (this.actor.type) {
      default:
      case "trainer":
        return TEMPLATES.TRAINER_ACTOR_SHEET;
        break;
      case "pokemon":
        return TEMPLATES.POKEMON_ACTOR_SHEET;
        break;
    }
  }
  /** @override */
  async getData() {
    const context = await super.getData();

    return context;
  }
}
