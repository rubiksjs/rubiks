import { error, warn, success, info, log } from "./levels.js";

/**
 * Class that represents a rubiks logger, each instance has it's own settings and data.
 * @class
 */
export class Rubiks {
	/**
	 * The format string that will end up being used for logging.
	 * @type {string}
	 */
	format = "%s";

	/**
	 * The level that is currently being used.
	 * @type {string}
	 */
	level = "";

	/**
	 * The prefixes map to use.
	 * @type {{ all: string } & Object.<string, string>}
	 */
	prefixes = { all: "" };

	/**
	 * The suffixes map to use.
	 * @type {{ all: string } & Object.<string, string>}
	 */
	suffixes = { all: "" };

	/**
	 * Is NO_COLOR enabled?
	 * @type {boolean}
	 */
	noColor = false;

	/**
	 * The levels that will be used in every log
	 * @type {import("./levels").Level[]}
	 */
	levels = [];

	/**
	 * Helper function to apply format to the provided content
	 * @param {string} content - The content to integrate into the format
	 * @returns {string} The formatted content
	 */
	formatContent(content) {
		return this.format.replace("%s", content);
	}

	constructor() {
		if (process) {
			this.noColor =
				process?.env?.NO_COLOR !== undefined && process?.env?.NO_COLOR !== "";
		} else if (Deno?.noColor !== undefined) {
			this.noColor = Deno?.noColor;
		}
	}

	/**
	 * Applies a modifier to the logger
	 * @param {import("./modifiers").Modifier} modifier - The modifier to use
	 */
	use(modifier) {
		const level = modifier(this);
		if (level == null) {
			return this;
		}
		this.levels.push(level);
		return this;
	}

	/**
	 * Log the content you pass with the level you pass.
	 * @param {string} content - The content to be logged.
	 * @param {import("./levels").Level} [level=log] - The log levels, it will use a normal log by default.
	 * @returns {Rubiks} This instance.
	 */
	log(content, level = log) {
		const c = this.formatContent(content);
		for (const l of this.levels) {
			l(this, c);
		}
		level(this, c);
		return this;
	}

	/**
	 * Log the content you pass with the warn level.
	 * @param {string} content - The content to be logged.
	 * @returns {Rubiks} This instance.
	 */
	warn(content) {
		const c = this.formatContent(content);
		for (const l of this.levels) {
			l(this, c);
		}
		warn(this, c);
		return this;
	}

	/**
	 * Log the content you pass with the error level.
	 * @param {string} content - The content to be logged.
	 * @returns {Rubiks} This instance.
	 */
	error(content) {
		const c = this.formatContent(content);
		for (const l of this.levels) {
			l(this, c);
		}
		error(this, c);
		return this;
	}

	/**
	 * Log the content you pass with the success level.
	 * @param {string} content - The content to be logged.
	 * @returns {Rubiks} This instance.
	 */
	success(content) {
		const c = this.formatContent(content);
		for (const l of this.levels) {
			l(this, c);
		}
		success(this, c);
		return this;
	}

	/**
	 * Log the content you pass with the info level.
	 * @param {string} content - The content to be logged.
	 * @returns {Rubiks} This instance.
	 */
	info(content) {
		const c = this.formatContent(content);
		for (const l of this.levels) {
			l(this, c);
		}
		info(this, c);
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
