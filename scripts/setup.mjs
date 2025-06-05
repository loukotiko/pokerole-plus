import { setupSettings } from "./settings.mjs";
import { initializeTemplatesAndDialogs } from "./templates.mjs";
import { log } from "./utils.mjs";
import { ID } from "./consts.mjs";
import { PokerolePlusActorSheet } from "./sheets/Pokerole+ActorSheet.mjs";
import { PokerolePlusActor } from "./actors/Pokerole+Actor.mjs";

export default async function onInit() {
  await setupSettings();
  log("Settings created!");

  await initializeTemplatesAndDialogs();
  log("Initialized templates and dialogs!");

  await registerClassesAndSheetsToFoundry();
  log("Initialized document classes!");
}

function registerClassesAndSheetsToFoundry() {
  // Define custom Document classes
  CONFIG.Actor.documentClass = PokerolePlusActor;
  /*  
  CONFIG.Item.documentClass = PokeroleItem;
  CONFIG.Combat.documentClass = PokeroleCombat;
  CONFIG.ActiveEffect.documentClass = PokeroleActiveEffect;
  CONFIG.ui.combat = PokeroleCombatTracker;
*/
  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet(ID, PokerolePlusActorSheet, {
    makeDefault: true,
  });
  /*  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("pokerole", PokeroleItemSheet, { makeDefault: true });*/
}
