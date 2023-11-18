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
export function log(self, content) {
	console.log(`${self.prefixes.all || ""}${content}${self.suffixes.all || ""}`);
}

/**
 * error log level.
 * @param {import("./rubiks").Rubiks} self
 * @param {string} content
 */
export function error(self, content) {
	self.level = "error";
	console.error(
		`${self.prefixes.all || ""}${
			self.prefixes[self.level] || ""
		}\x1b[31;1merror\x1b[0m: ${content}${self.suffixes.all || ""}`,
	);
	self.level = "";
}

/**
 * warn log level.
 * @param {import("./rubiks").Rubiks} self
 * @param {string} content
 */
export function warn(self, content) {
	self.level = "warn";
	console.warn(
		`${self.prefixes.all || ""}${
			self.prefixes[self.level] || ""
		}\x1b[33;1mwarning\x1b[0m: ${content}${self.suffixes.all || ""}`,
	);
	self.level = "";
}

/**
 * success log level.
 * @param {import("./rubiks").Rubiks} self
 * @param {string} content
 */
export function success(self, content) {
	self.level = "success";
	console.log(
		`${self.prefixes.all || ""}${
			self.prefixes[self.level] || ""
		}\x1b[32;1msuccess\x1b[0m: ${content}${self.suffixes.all || ""}`,
	);
	self.level = "";
}

/**
 * info log level.
 * @param {import("./rubiks").Rubiks} self
 * @param {string} content
 */
export function info(self, content) {
	self.level = "info";
	console.log(
		`${self.prefixes.all || ""}${
			self.prefixes[self.level] || ""
		}\x1b[34;1minfo\x1b[0m: ${content}${self.suffixes.all || ""}`,
	);
	self.level = "";
}
