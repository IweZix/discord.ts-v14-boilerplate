module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "prettier",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    parserOptions: {
        project: ["./tsconfig.json"],
    },
    globals: {
        client: "writable",
    },
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
    },
    ignorePatterns: [
        "node_modules/", // ignorer node_modules
        "build/", // ignorer build
        "dist/", // ignorer dist
    ],
};
