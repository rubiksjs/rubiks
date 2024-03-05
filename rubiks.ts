import {
  error,
  fatal,
  info,
  type Level,
  log,
  success,
  warn,
} from "./levels.ts";
import { type Modifier } from "./modifiers.ts";

interface Global {
  process?: { env: Record<string, string | undefined> };
  Deno?: { noColor: boolean };
}

/**
 * Class that represents a rubiks logger, each instance has it's own settings and data.
 * @class
 */
export class Rubiks {
  /** The format string that will end up being used for logging. */
  format: string = "%s";

  /** The level that is currently being used. */
  level: string = "";

  /** The prefixes map to use. */
  prefixes: { all: string } & Record<string, string> = { all: "" };

  /** The suffixes map to use. */
  suffixes: { all: string } & Record<string, string> = { all: "" };

  /** Is NO_COLOR enabled? */
  noColor: boolean = false;

  /** The levels that will be used in every log */
  #levels: Level[] = [];

  /**
   * Helper function to apply format to the provided content
   * @param content - The content to integrate into the format
   * @returns The formatted content
   */
  #replace(content: string): string {
    return this.format.replace("%s", content);
  }

  constructor() {
    const nc = (globalThis as Global).process?.env?.NO_COLOR;
    if (
      (nc === undefined || nc === "") && !(globalThis as Global).Deno?.noColor
    ) return;
    this.noColor = true;
  }

  /**
   * Applies a modifier to the logger
   * @param modifier - The modifier to use
   */
  use(modifier: Modifier): Rubiks {
    const l = modifier(this);
    if (typeof l !== "function") return this;
    this.#levels.push(l);
    return this;
  }

  /**
   * Log the content you pass with the level you pass.
   * @param content - The content to be logged.
   * @param [level=log] - The log levels, it will use a normal log by default.
   * @returns This instance.
   */
  log(content: string, level: Level = log): Rubiks {
    const c = this.#replace(content);
    for (const l of this.#levels) l(this, c);
    level(this, c);
    return this;
  }

  /**
   * Log the content you pass with the warn level.
   * @param content - The content to be logged.
   * @returns This instance.
   */
  warn(content: string): Rubiks {
    const c = this.#replace(content);
    for (const l of this.#levels) l(this, c);
    warn(this, c);
    return this;
  }

  /**
   * Log the content you pass with the error level.
   * @param content - The content to be logged.
   * @returns This instance.
   */
  error(content: string): Rubiks {
    const c = this.#replace(content);
    for (const l of this.#levels) l(this, c);
    error(this, c);
    return this;
  }

  /**
   * Log the content you pass with the fatal level.
   * @param content - The content to be logged.
   * @returns This instance.
   */
  fatal(content: string): Rubiks {
    const c = this.#replace(content);
    for (const l of this.#levels) l(this, c);
    fatal(this, c);
    return this;
  }

  /**
   * Log the content you pass with the success level.
   * @param content - The content to be logged.
   * @returns This instance.
   */
  success(content: string): Rubiks {
    const c = this.#replace(content);
    for (const l of this.#levels) l(this, c);
    success(this, c);
    return this;
  }

  /**
   * Log the content you pass with the info level.
   * @param content - The content to be logged.
   * @returns This instance.
   */
  info(content: string): Rubiks {
    const c = this.#replace(content);
    for (const l of this.#levels) l(this, c);
    info(this, c);
    return this;
  }
}

/**
 * Creates and returns a new Rubiks instance.
 * @returns a new Rubiks logger instance.
 */
export function rubiks(): Rubiks {
  return new Rubiks();
}
