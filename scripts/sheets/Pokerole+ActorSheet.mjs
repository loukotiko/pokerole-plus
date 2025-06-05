import { ClassExtender } from "../utils.mjs";
import { PokemonActorSheet } from "./PokemonActorSheet.mjs";
import { TrainerActorSheet } from "./TrainerActorSheet.mjs";

export class PokerolePlusActorSheet extends ActorSheet {
  clx = new ClassExtender(
    () => this,
    () => this.actor.type,
    { trainer: TrainerActorSheet, pokemon: PokemonActorSheet }
  );

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["pokerole-plus", "actor-sheet"],
      width: 400,
      height: "auto",
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
    return this.clx.extends((ex) => ex.template);
  }
  /** @override */
  async getData() {
    return this.clx.extends((ex) => ex.getData)();
  }
}
