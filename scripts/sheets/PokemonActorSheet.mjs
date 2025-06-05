import { TEMPLATES } from "../templates.mjs";

export class PokemonActorSheet extends ActorSheet {
  /** @override */
  get template() {
    return TEMPLATES.POKEMON_ACTOR_SHEET;
  }

  /** @override */
  async getData() {
    const context = await super.getData();

    return context;
  }
}
