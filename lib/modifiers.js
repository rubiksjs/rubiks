/**
 * @callback Modifier
 * @param {import("./rubiks").Rubiks} self - The instance
 * @returns {void}
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
	return function (self) {
		if (options.error) {
			self.prefixes.error = self.noColor ? "  " : "\x1b[31m\x1b[0m  ";
		}

		if (options.warn) {
			self.prefixes.warn = self.noColor ? "  " : "\x1b[33m\x1b[0m  ";
		}

		if (options.success) {
			self.prefixes.success = self.noColor ? "  " : "\x1b[32m\x1b[0m  ";
		}

		if (options.info) {
			self.prefixes.info = self.noColor ? "  " : "\x1b[34m\x1b[0m  ";
		}

		return self.format;
	};
}

/**
 * Modifier that adds a date to the start of every log.
 * @param {import("./rubiks").Rubiks} self
 * @param {string} format The format string.
 */
export function withDates(self) {
	const date = new Date();

	self.prefixes.all = `${self.prefixes.all || ""}${
		self.noColor ? "" : "\x1b[90m"
	}[${date.toLocaleDateString()} ${date.toLocaleTimeString()}]\x1b[0m `;

	return self.format;
}

/**
 * Modifier that sets noColor to true
 * @param {import("./rubiks").Rubiks} self
 */
export function noColor(self) {
	self.noColor = true;

	return self.format;
}
