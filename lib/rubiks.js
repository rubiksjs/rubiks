import { error, warn, success, info, log } from "./levels.js";

/**
 * Class that represents a rubiks logger, each instance has it's own settings and data.
 * @class
 */
export class Rubiks {
	/**
	 * The format string that will end up being used for logging.
	 * @type {string}
	 * @public
	 */
	format = "%s";

	/**
	 * The level that is currently being used.
	 * @type {string}
	 * @public
	 */
	level = "";

	/**
	 * The prefixes map to use.
	 * @type {{ all: string } & Object.<string, string>}
	 * @public
	 */
	prefixes = { all: "" };

	/**
	 * The suffixes map to use.
	 * @type {{ all: string } & Object.<string, string>}
	 * @public
	 */
	suffixes = { all: "" };

	/**
	 * Is NO_COLOR enabled?
	 * @type {boolean}
	 * @public
	 */
	noColor = false;

	/**
	 * @type {import("./modifiers").Modifier[]}
	 */
	modifiers = [];

	constructor() {
		if (process) {
			this.noColor = process?.env?.NO_COLOR !== undefined ? true : false;
		} else if (Deno?.noColor !== undefined) {
			this.noColor = Deno?.noColor;
		}
	}

	/**
	 * Applies a modifier to the logger
	 * @param {import("./modifiers").Modifier} modifier
	 */
	use(modifier) {
		this.format = modifier(this);
		this.modifiers.push(modifier);
		return this;
	}

	/**
	 * Log the content you pass with the level you pass.
	 * @param {string} content The content to be logged.
	 * @param {import("./levels").Level} [level=log] The log levels, it will use a normal log by default.
	 * @returns {Rubiks} This instance.
	 */
	log(content, level = log) {
		for (const modifier of this.modifiers) {
			modifier(this);
		}
		level(this, this.format.replace("%s", content));
		return this;
	}

	/**
	 * Log the content you pass with the warn level.
	 * @param {string} content
	 * @returns {Rubiks} This instance.
	 */
	warn(content) {
		for (const modifier of this.modifiers) {
			modifier(this);
		}
		warn(this, this.format.replace("%s", content));
		return this;
	}

	/**
	 * Log the content you pass with the error level.
	 * @param {string} content
	 * @returns {Rubiks} This instance.
	 */
	error(content) {
		for (const modifier of this.modifiers) {
			modifier(this);
		}
		error(this, this.format.replace("%s", content));
		return this;
	}

	/**
	 * Log the content you pass with the success level.
	 * @param {string} content
	 * @returns {Rubiks} This instance.
	 */
	success(content) {
		for (const modifier of this.modifiers) {
			modifier(this);
		}
		success(this, this.format.replace("%s", content));
		return this;
	}

	/**
	 * Log the content you pass with the info level.
	 * @param {string} content
	 * @returns {Rubiks} This instance.
	 */
	info(content) {
		for (const modifier of this.modifiers) {
			modifier(this);
		}
		info(this, this.format.replace("%s", content));
		return this;
	}
}

/**
 * Creates and returns a new Rubiks instance.
 * @returns {Rubiks} a new Rubiks logger instance.
 */
export function rubiks() {
	return new Rubiks();
}
