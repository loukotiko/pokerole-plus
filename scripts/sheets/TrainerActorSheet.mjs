import { TEMPLATES } from "../templates.mjs";

export class TrainerActorSheet extends ActorSheet {
  /** @override */
  get template() {
    return TEMPLATES.TRAINER_ACTOR_SHEET;
  }

  /** @override */
  async getData() {
    const context = await super.getData();

    context.ranks = {
      beginner: "Beginner",
      amateur: "Amateur",
    };

    context.natures = {
      quirky: "Quirky",
      adamant: "Adamant",
    };

    return context;
  }
}
