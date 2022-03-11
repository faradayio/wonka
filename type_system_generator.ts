const fs = require("fs");
import { build_python_class } from "./generators/python";
import { build_ruby_class } from "./generators/ruby";
import { build_rust_class } from "./generators/rust";
import { build_typescript_class } from "./generators/typescript";
import { CFType } from "./grammar_builder";

const builders: Map<string, (name: string, root: CFType) => string> = {
  python: build_python_class,
  rust: build_rust_class,
  typescript: build_typescript_class,
  ruby: build_ruby_class,
};

export const generate_classes = (
  custom_preamble_file: string,
  grammar: CFType[],
  output_file: string,
  language: string
) =>
  fs.writeFileSync(
    output_file,
    `${fs.readFileSync(custom_preamble_file)}\n${Object.keys(grammar)
      .reverse()
      .map((cls) => builders[language](cls, grammar[cls]))
      .join("\n")}`
  );
