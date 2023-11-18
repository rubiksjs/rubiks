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
export function nerdIcons(
	options = {
		error: true,
		warn: true,
		success: true,
		info: true,
	},
) {
	return function (self, format) {
		if (options.error) {
			self.prefixes.error = "\x1b[31m \x1b[0m ";
		}

		if (options.warn) {
			self.prefixes.warn = "\x1b[33m \x1b[0m ";
		}

		if (options.success) {
			self.prefixes.success = "\x1b[32m\x1b[0m  ";
		}

		if (options.info) {
			self.prefixes.info = "\x1b[34m\x1b[0m  ";
		}

		return format;
	};
}

/**
 * Modifier that adds a date to the start of every log.
 * @param {import("./rubiks").Rubiks} self
 * @param {string} format The format string.
 * @returns The unchanged format, after setting the prefix.
 */
export function withDates(self, format) {
	const date = new Date();

	self.prefixes.all = `${
		self.prefixes.all || ""
	}\x1b[90m[${date.toLocaleDateString()} ${date.toLocaleTimeString()}]\x1b[0m `;
	return format;
}
