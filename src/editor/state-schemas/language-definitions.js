// This defines the "built-in" language definitions

export const jsLanguageDefinition = {
  pluginType: "language",
  languageId: "js",
  displayName: "JavaScript",
  module: "window",
  evaluator: "eval",
  url: "",
  autocomplete: "autocompleteJs"
};

const PYODIDE_URL = process.env.USE_LOCAL_PYODIDE
  ? "/pyodide/pyodide.js"
  : "https://cdn.jsdelivr.net/pyodide/v0.15.0/full/pyodide.js";

const pyLanguageDefinition = {
  languageId: "py",
  displayName: "Python",
  url: PYODIDE_URL,
  module: "pyodide",
  evaluator: "runPython",
  asyncEvaluator: "runPythonAsync",
  pluginType: "language",
  autocomplete: "autocomplete"
};

export const languageDefinitions = {
  py: pyLanguageDefinition,
  js: jsLanguageDefinition
};
