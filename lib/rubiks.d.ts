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
    public format: string;
    /**
     * The level that is currently being used.
     * @type {string}
     * @public
     */
    public level: string;
    /**
     * The prefixes map to use.
     * @type {{ all: string } & Object.<string, string>}
     * @public
     */
    public prefixes: {
        all: string;
    } & {
        [x: string]: string;
    };
    /**
     * The suffixes map to use.
     * @type {{ all: string } & Object.<string, string>}
     * @public
     */
    public suffixes: {
        all: string;
    } & {
        [x: string]: string;
    };
    /**
     * Applies a modifier to the logger
     * @param {import("./modifiers").Modifier} modifier
     */
    use(modifier: import("./modifiers").Modifier): this;
    /**
     * Log the content you pass with the level you pass.
     * @param {string} content The content to be logged.
     * @param {import("./levels").Level} [level=log] The log levels, it will use a normal log by default.
     * @returns {Rubiks} This instance.
     */
    log(content: string, level?: import("./levels").Level): Rubiks;
    /**
     * Log the content you pass with the warn level.
     * @param {string} content
     * @returns {Rubiks} This instance.
     */
    warn(content: string): Rubiks;
    /**
     * Log the content you pass with the error level.
     * @param {string} content
     * @returns {Rubiks} This instance.
     */
    error(content: string): Rubiks;
    /**
     * Log the content you pass with the success level.
     * @param {string} content
     * @returns {Rubiks} This instance.
     */
    success(content: string): Rubiks;
    /**
     * Log the content you pass with the info level.
     * @param {string} content
     * @returns {Rubiks} This instance.
     */
    info(content: string): Rubiks;
}
