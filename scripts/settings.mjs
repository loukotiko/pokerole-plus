import { ID } from "./consts.mjs";
import { createEnum } from "./utils.mjs";

export const SETTINGS = createEnum(
  ["DEBUG", "INITIATIVE_FORMULA"],
  ID + "_SETTINGS_"
);

export async function setupSettings() {
  await game.settings.register(ID, SETTINGS.DEBUG, {
    name: "POKEROLE+.SETTINGS.DEBUG.NAME", // can also be an i18n key
    hint: "POKEROLE+.SETTINGS.DEBUG.HINT", // can also be an i18n key
    scope: "world", // "world" = sync to db, "client" = local storage
    config: true, // false if you dont want it to show in module config
    type: Boolean, // Number, Boolean, String, or even a custom class or DataModel
    default: false,
    requiresReload: true, // when changing the setting, prompt the user to reload
  });

  await game.settings.register(ID, SETTINGS.INITIATIVE_FORMULA, {
    name: "POKEROLE+.SETTINGS.INITIATIVE_FORMULA.NAME", // can also be an i18n key
    hint: "POKEROLE+.SETTINGS.INITIATIVE_FORMULA.HINT", // can also be an i18n key
    scope: "world", // "world" = sync to db, "client" = local storage
    config: true, // false if you dont want it to show in module config
    type: String, // Number, Boolean, String, or even a custom class or DataModel
    default: "1d6 + @dexterity + @alert",
    requiresReload: true, // when changing the setting, prompt the user to reload
  });
}
