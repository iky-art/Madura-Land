export interface InterpretSuccess {
  error: false;
  output: string[];
}

export interface InterpretError {
  error: true;
  line: number;
  text: string;
}

export type InterpretResult = InterpretSuccess | InterpretError;

const KEYWORDS = ["gawe", "toles", "jika", "lain", "samporna", "fungsi", "balek"];

function resolveToken(token: string, vars: Record<string, string>): string | null {
  const trimmed = token.trim();
  const strMatch = trimmed.match(/^"(.*)"$/);
  if (strMatch) return strMatch[1];
  if (Object.prototype.hasOwnProperty.call(vars, trimmed)) return vars[trimmed];
  return null;
}

/**
 * A deliberately small prototype interpreter for the Madura Land playground.
 * Supports:
 *   gawe <name> = "value" | number
 *   toles <name | "text"> (+ ...)
 */
export function runMadura(source: string): InterpretResult {
  const vars: Record<string, string> = {};
  const lines = source.split("\n");
  const output: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    if (line === "" || line.startsWith("#")) continue;

    const assignMatch = line.match(/^gawe\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);
    if (assignMatch) {
      const [, varName, rawValueRaw] = assignMatch;
      const rawValue = rawValueRaw.trim();
      const strLit = rawValue.match(/^"(.*)"$/);
      const numLit = rawValue.match(/^-?\d+(\.\d+)?$/);

      if (strLit) {
        vars[varName] = strLit[1];
      } else if (numLit) {
        vars[varName] = rawValue;
      } else {
        return { error: true, line: i + 1, text: raw };
      }
      continue;
    }

    const tolesMatch = line.match(/^toles\s+(.+)$/);
    if (tolesMatch) {
      const expr = tolesMatch[1].trim();
      const parts = expr.split("+");
      const resultParts: string[] = [];
      let ok = true;

      for (const part of parts) {
        const resolved = resolveToken(part, vars);
        if (resolved === null) {
          ok = false;
          break;
        }
        resultParts.push(resolved);
      }

      if (!ok) {
        return { error: true, line: i + 1, text: raw };
      }

      output.push(resultParts.join(""));
      continue;
    }

    return { error: true, line: i + 1, text: raw };
  }

  return { error: false, output };
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const TOKEN_PATTERN = new RegExp(
  '(#.*)|("[^"]*")|\\b(' + KEYWORDS.join("|") + ")\\b|\\b(\\d+(?:\\.\\d+)?)\\b",
  "g"
);

/** Returns highlighted HTML (via token- classes) for a single line of source. */
export function highlightLine(rawLine: string): string {
  const escaped = escapeHtml(rawLine);
  return escaped.replace(
    TOKEN_PATTERN,
    (match, comment?: string, str?: string, kw?: string, num?: string) => {
      if (comment !== undefined) return `<span class="token-comment">${comment}</span>`;
      if (str !== undefined) return `<span class="token-str">${str}</span>`;
      if (kw !== undefined) return `<span class="token-kw">${kw}</span>`;
      if (num !== undefined) return `<span class="token-num">${num}</span>`;
      return match;
    }
  );
}

export function highlightMadura(source: string): string {
  return source.split("\n").map(highlightLine).join("\n");
}
