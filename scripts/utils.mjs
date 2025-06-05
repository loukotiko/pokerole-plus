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

export class ClassExtender {
  extensionGetter;
  superClassGetter;

  constructor(superClassGetter, variableGetter, extensions) {
    this.superClassGetter = superClassGetter;
    this.extensionGetter = () => new extensions[variableGetter()]();
  }

  extends(callback) {
    const functionOrVariable = callback(this.extensionGetter());
    const isVariable = typeof functionOrVariable === typeof Function;

    if (isVariable) return functionOrVariable.bind(this.superClassGetter());
    return functionOrVariable;
  }
}
