/**
 * @callback Level
 * @param {import("./rubiks").Rubiks} self - The instance
 * @param {string} content - The content you provide.
 * @returns {void}
 */

/**
 * Default log level.
 * @type {Level}
 */
export function log(self, content) {
	console.log(`${self.prefixes.all || ""}${content}${self.suffixes.all || ""}`);
}

/**
 * error log level.
 * @type {Level}
 */
export function error(self, content) {
	self.level = "error";
	console.error(
		`${self.prefixes.all || ""}${self.prefixes[self.level] || ""}${
			self.noColor ? "" : "\x1b[31;1m"
		}error\x1b[0m: ${content}${self.suffixes.all || ""}`,
	);
	self.level = "";
}

/**
 * warn log level.
 * @type {Level}
 */
export function warn(self, content) {
	self.level = "warn";
	console.warn(
		`${self.prefixes.all || ""}${self.prefixes[self.level] || ""}${
			self.noColor ? "" : "\x1b[33;1m"
		}warning\x1b[0m: ${content}${self.suffixes.all || ""}`,
	);
	self.level = "";
}

/**
 * success log level.
 * @type {Level}
 */
export function success(self, content) {
	self.level = "success";
	console.log(
		`${self.prefixes.all || ""}${self.prefixes[self.level] || ""}${
			self.noColor ? "" : "\x1b[32;1m"
		}success\x1b[0m: ${content}${self.suffixes.all || ""}`,
	);
	self.level = "";
}

/**
 * info log level.
 * @type {Level}
 */
export function info(self, content) {
	self.level = "info";
	console.log(
		`${self.prefixes.all || ""}${self.prefixes[self.level] || ""}${
			self.noColor ? "" : "\x1b[34;1m"
		}info\x1b[0m: ${content}${self.suffixes.all || ""}`,
	);
	self.level = "";
}
