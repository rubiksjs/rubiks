/**
 * @callback Level
 * @param {Rubiks} self - The instance
 * @param {string} content - The content you provide.
 * @returns {void}
 */
/**
 * Default log level.
 * @param {import("./rubiks").Rubiks} self
 * @param {string} content
 */
export function log(self: import("./rubiks").Rubiks, content: string): void;
/**
 * error log level.
 * @param {import("./rubiks").Rubiks} self
 * @param {string} content
 */
export function error(self: import("./rubiks").Rubiks, content: string): void;
/**
 * warn log level.
 * @param {import("./rubiks").Rubiks} self
 * @param {string} content
 */
export function warn(self: import("./rubiks").Rubiks, content: string): void;
/**
 * success log level.
 * @param {import("./rubiks").Rubiks} self
 * @param {string} content
 */
export function success(self: import("./rubiks").Rubiks, content: string): void;
/**
 * info log level.
 * @param {import("./rubiks").Rubiks} self
 * @param {string} content
 */
export function info(self: import("./rubiks").Rubiks, content: string): void;
export type Level = (self: Rubiks, content: string) => void;
