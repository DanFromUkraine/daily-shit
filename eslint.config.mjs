import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        plugins: ["@cspell"],
        rules: {
            "@cspell/spellchecker": [
                "warn",
                {
                    checkComments: true,
                    checkStringLiterals: true,
                    checkIdentifiers: true,
                    checkTemplates: true,
                    autoFix: true,
                },
            ],
        },
    },
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
]);

export default eslintConfig;
