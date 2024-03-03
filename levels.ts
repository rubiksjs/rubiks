import { type Rubiks } from "./rubiks.ts";

export type Level = (self: Rubiks, content: string) => void;

/**
 * Default log level.
 * @param self - The instance
 * @param content - The content you provide.
 */
export function log(self: Rubiks, content: string) {
  console.log(`${self.prefixes.all || ""}${content}${self.suffixes.all || ""}`);
}

/**
 * Error log level.
 * @param self - The instance
 * @param content - The content you provide.
 */
export function error(self: Rubiks, content: string) {
  self.level = "error";
  console.error(
    `${self.prefixes.all || ""}${self.prefixes[self.level] || ""}${self.noColor ? "" : "\x1b[31;1m"
    }error\x1b[0m: ${content}${self.suffixes.all || ""}`,
  );
  self.level = "";
}

/**
 * Error log level.
 * @param self - The instance
 * @param content - The content you provide.
 */
export function fatal(self: Rubiks, content: string) {
  self.level = "fatal";
  console.error(
    `${self.prefixes.all || ""}${self.prefixes[self.level] || ""}${self.noColor ? "" : "\x1b[31;1m"
    }fatal\x1b[0m: ${self.noColor ? "" : "\x1b[31m"}${content}\x1b[0m${self.suffixes.all || ""
    }`,
  );
  self.level = "";
}

/**
 * Warn log level.
 * @param self - The instance
 * @param content - The content you provide.
 */
export function warn(self: Rubiks, content: string) {
  self.level = "warn";
  console.warn(
    `${self.prefixes.all || ""}${self.prefixes[self.level] || ""}${self.noColor ? "" : "\x1b[33;1m"
    }warning\x1b[0m: ${content}${self.suffixes.all || ""}`,
  );
  self.level = "";
}

/**
 * Success log level.
 * @param self - The instance
 * @param content - The content you provide.
 */
export function success(self: Rubiks, content: string) {
  self.level = "success";
  console.log(
    `${self.prefixes.all || ""}${self.prefixes[self.level] || ""}${self.noColor ? "" : "\x1b[32;1m"
    }success\x1b[0m: ${content}${self.suffixes.all || ""}`,
  );
  self.level = "";
}

/**
 * Info log level.
 * @param self - The instance
 * @param content - The content you provide.
 */
export function info(self: Rubiks, content: string) {
  self.level = "info";
  console.log(
    `${self.prefixes.all || ""}${self.prefixes[self.level] || ""}${self.noColor ? "" : "\x1b[34;1m"
    }info\x1b[0m: ${content}${self.suffixes.all || ""}`,
  );
  self.level = "";
}
