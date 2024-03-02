/**
 * @typedef {import("./rubiks.js").Rubiks} Rubiks
 */

/**
 * @callback Modifier
 * @param {Rubiks} self - The instance
 * @returns {import("./levels.js").Level | null} A fuction to be executed in every log or null
 */

/**
 * @typedef NerdIconsModifierOptions
 * @type {object}
 * @property {boolean=} error - switch to activate icon for error level.
 * @property {boolean=} warn - switch to activate icon for warn level.
 * @property {boolean=} success - switch to activate icon for success level.
 * @property {boolean=} info - switch to activate icon for info level.
 * @property {boolean=} fatal - switch to activate icon for fatal level.
 */

/**
 * Modifier that adds a nerd icon to the default logging levels.
 * @param {NerdIconsModifierOptions} [options] - Set what levels have a nerd icon.
 * @returns {Modifier} The modifier function.
 */
export function nerdIcons(
	options = {
		error: true,
		warn: true,
		success: true,
		info: true,
		fatal: true,
	},
) {
	return (_) => (self, _) => {
		const nc = self.noColor;

		if (options.error) {
			self.prefixes.error = `${nc ? "" : "\x1b[31m"}\x1b[0m  `;
		}
		if (options.fatal) {
			self.prefixes.fatal = `${nc ? "" : "\x1b[31m"}\x1b[0m  `;
		}
		if (options.warn) {
			self.prefixes.warn = `${nc ? "" : "\x1b[33m"}\x1b[0m  `;
		}
		if (options.success) {
			self.prefixes.success = `${nc ? "" : "\x1b[32m"}\x1b[0m  `;
		}
		if (options.info) {
			self.prefixes.info = `${nc ? "" : "\x1b[34m"}\x1b[0m  `;
		}
	};
}

/**
 * Modifier that adds a date to the start of every log.
 * @param {Rubiks} self - The instance
 * @returns {ReturnType<Modifier> | null} A fuction to be executed in every log or null
 */
export function withDates(self) {
	const c = self.prefixes.all || "";
	return (self, _) => {
		const d = new Date();

		self.prefixes.all = `${c}${
			self.noColor ? "" : "\x1b[90m"
		}[${d.toLocaleDateString()} ${d.toLocaleTimeString()}]\x1b[0m `;
	};
}

/**
 * Modifier that sets noColor to true
 * @param {Rubiks} self - The instance
 * @returns {ReturnType<Modifier> | null} A fuction to be executed in every log or null
 */
export function noColor(self) {
	self.noColor = true;
	return null;
}
