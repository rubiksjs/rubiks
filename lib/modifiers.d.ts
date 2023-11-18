/**
 * @callback Modifier
 * @param {Rubiks} self - The instance
 * @param {string} format - the format to alter.
 * @returns {string}
 */
/**
 * @typedef NerdIconsModifierOptions
 * @type {object}
 * @property {boolean=} error - switch to activate icon for error level.
 * @property {boolean=} warn - switch to activate icon for warn level.
 * @property {boolean=} success - switch to activate icon for success level.
 * @property {boolean=} info - switch to activate icon for info level.
 */
/**
 * Modifier that adds a nerd icon to the default logging levels.
 * @param {NerdIconsModifierOptions} [options] Set what levels have a nerd icon.
 * @returns {Modifier} The modifier function.
 */
export function nerdIcons(options?: NerdIconsModifierOptions): Modifier;
/**
 * Modifier that adds a date to the start of every log.
 * @param {import("./rubiks").Rubiks} self
 * @param {string} format The format string.
 * @returns The unchanged format, after setting the prefix.
 */
export function withDates(self: import("./rubiks").Rubiks, format: string): string;
export type Modifier = (self: Rubiks, format: string) => string;
export type NerdIconsModifierOptions = {
    /**
     * - switch to activate icon for error level.
     */
    error?: boolean | undefined;
    /**
     * - switch to activate icon for warn level.
     */
    warn?: boolean | undefined;
    /**
     * - switch to activate icon for success level.
     */
    success?: boolean | undefined;
    /**
     * - switch to activate icon for info level.
     */
    info?: boolean | undefined;
};
