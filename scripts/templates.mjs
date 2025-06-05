import { ID } from "./consts.mjs";

export const TEMPLATES = {
  POKEMON_ACTOR_SHEET: `systems/${ID}/scripts/sheets/pokemon-actor-sheet.hbs`,
  TRAINER_ACTOR_SHEET: `systems/${ID}/scripts/sheets/trainer-actor-sheet.hbs`,
};

export async function initializeTemplatesAndDialogs() {
  loadTemplates([TEMPLATES.POKEMON_ACTOR_SHEET, TEMPLATES.TRAINER_ACTOR_SHEET]);
}
