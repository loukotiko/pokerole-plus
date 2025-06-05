import { ID, NAME } from "./consts.mjs";
import { SETTINGS } from "./settings.mjs";

export function log(...args) {
  const shouldLog = game.settings.get(ID, SETTINGS.DEBUG);

  if (shouldLog) {
    console.log(NAME, "|", ...args);
  }
}

export function createEnum(keys, prefix = "") {
  return keys.reduce(
    (theEnum, key) => ({ ...theEnum, [key]: prefix + key }),
    {}
  );
}
