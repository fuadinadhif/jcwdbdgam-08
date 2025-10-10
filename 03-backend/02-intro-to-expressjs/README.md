# README

## Installation Steps

1.  `npm init --y`: Membuat file `package.json`
2.  Edit file `package.json` menjadi seperti ini:
    ```json
    {
      "name": "02-intro-to-expressjs",
      "version": "1.0.0",
      "scripts": {},
      "type": "module"
    }
    ```
3.  `npm i -D typescript @types/node @types/express tsx`: Install development dependencies
4.  `npm i express`: Install reguler dependencies
5.  `npx tsc --init`: Membuat file `tsconfig.json`
6.  Edit file `tsconfig.json` menjadi seperti ini:

    ```json
    {
      // Visit https://aka.ms/tsconfig to read more about this file
      "compilerOptions": {
        // File Layout
        "rootDir": "./src",
        "outDir": "./dist",

        // Environment Settings
        // See also https://aka.ms/tsconfig/module
        "module": "nodenext",
        "target": "esnext",
        // For nodejs:
        "lib": ["esnext"],
        "types": ["node"],
        // and npm install -D @types/node

        // Other Outputs
        "sourceMap": true,
        "declaration": true,
        "declarationMap": true,

        // Stricter Typechecking Options
        "noUncheckedIndexedAccess": true,
        "exactOptionalPropertyTypes": true,

        // Style Options
        // "noImplicitReturns": true,
        // "noImplicitOverride": true,
        // "noUnusedLocals": true,
        // "noUnusedParameters": true,
        // "noFallthroughCasesInSwitch": true,
        // "noPropertyAccessFromIndexSignature": true,

        // Recommended Options
        "strict": true,
        "jsx": "react-jsx",
        "verbatimModuleSyntax": true,
        "isolatedModules": true,
        "noUncheckedSideEffectImports": true,
        "moduleDetection": "force",
        "skipLibCheck": true
      }
    }
    ```
