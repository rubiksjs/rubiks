import { Rubiks } from "./rubiks.js";

/**
 * Creates and returns a new Rubiks instance.
 * @returns {Rubiks} a new Rubiks logger instance.
 */
export function rubiks() {
	return new Rubiks();
}

export * from "./levels.js";
export * from "./modifiers.js";
export { Rubiks };
