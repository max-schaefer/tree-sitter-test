const path = require('path');

const { Language, Parser } = require('web-tree-sitter');

(async () => {
  await Parser.init();
  const wasmFile = path.resolve(__dirname, `tree-sitter-python.wasm`);
  const lang = await Language.load(wasmFile).catch((err) => {
    console.error(`Failed to load ${language} tree-sitter syntax: ${err.message}`);
  });
  const parser = new Parser();
  parser.setLanguage(lang);
  parser.parse("print('hello')");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
