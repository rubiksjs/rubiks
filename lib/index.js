import { Rubiks } from "./lib/rubiks.js";

/**
 * Creates and returns a new Rubiks instance.
 * @returns {Rubiks} a new Rubiks logger instance.
 */
export function rubiks() {
	return new Rubiks();
}

export * from "./lib/levels.js";
export * from "./lib/modifiers.js";
export { Rubiks };
