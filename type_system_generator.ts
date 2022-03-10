const fs = require("fs");
import { build_python_class } from "./generators/python";
import { build_ruby_class } from "./generators/ruby";
import { build_rust_class } from "./generators/rust";
import { build_typescript_class } from "./generators/typescript";

const builders = {
  python: build_python_class,
  rust: build_rust_class,
  typescript: build_typescript_class,
  ruby: build_ruby_class,
};

export const generate_classes = (
  custom_preamble_file,
  grammar,
  output_file,
  language
) =>
  fs.writeFileSync(
    output_file,
    `${fs.readFileSync(custom_preamble_file)}\n${Object.keys(grammar)
      .reverse()
      .map((cls) => builders[language](cls, grammar[cls]))
      .join("\n")}`
  );

// TODO

// T N tokens
// regex the Token constants into SQL constants

// serializer so I can see SQL output

// gather all funcs
// gather all ops
// format everything using grammar_builder
// Exp / Relation 2-input funcs

// docstrings to replace type hints

// apply misc mutations
// tests
// proliferate the preamble
// release
