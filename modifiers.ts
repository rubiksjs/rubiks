import { type Level } from "./levels.ts";
import { type Rubiks } from "./rubiks.ts";

export type Modifier = (self: Rubiks) => Level;

interface NerdIconsModifierOptions {
  error?: boolean;
  warn?: boolean;
  success?: boolean;
  info?: boolean;
  fatal?: boolean;
}

/**
 * Modifier that adds a nerd icon to the default logging levels.
 * @param [options] - Set what levels have a nerd icon.
 * @returns {Modifier} The modifier function.
 */
export function nerdIcons(
  options: NerdIconsModifierOptions = {
    error: true,
    warn: true,
    success: true,
    info: true,
    fatal: true,
  },
): Modifier {
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
 * @param self - The instance
 * @returns The level that modifies the dates
 */
export function withDates(self: Rubiks): Level {
  const c = self.prefixes.all || "";
  return (self: Rubiks, _) => {
    const d = new Date();

    self.prefixes.all = `${c}${
      self.noColor ? "" : "\x1b[90m"
    }[${d.toLocaleDateString()} ${d.toLocaleTimeString()}]\x1b[0m `;
  };
}

/**
 * Modifier that sets noColor to true
 * @param self - The instance
 * @returns A fuction to be executed in every log or null
 */
export function noColor(self: Rubiks): null {
  self.noColor = true;
  return null;
}
