# README: Step By Step Express Prisma Project Installation

## Installation Steps

1. `npm init --y`
2. Edit file `package.json`:
   ```json
   {
     "name": "12-caching-logging-error-handling-debugging",
     "version": "1.0.0",
     "scripts": {},
     "type": "module"
   }
   ```
3. `npx tsc --init`

   ```json
   {
     "compilerOptions": {
       "rootDir": "./src",
       "outDir": "./dist",

       "module": "nodenext",
       "target": "esnext",

       "lib": ["esnext"],
       "types": ["node"],

       "sourceMap": true,
       "declaration": true,
       "declarationMap": true,

       "noUncheckedIndexedAccess": true,
       "exactOptionalPropertyTypes": true,

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

4. `npm i express @prisma/client`
5. `npm i -D typescript @types/node @types/express tsx prisma`
6. Edit scripts `package.json` file:
   ```json
     "scripts": {
     "build": "tsc",
     "dev": "tsx --watch src/app.ts",
     "start": "npm run build && node dist/app.js"
   }
   ```
7. `npx prisma init`
8. Edit `prisma/schema.prisma`:

   ```prisma
    generator client {
      provider = "prisma-client-js"
      output   = "../src/generated/prisma"
    }

    datasource db {
      provider = "postgresql"
      url = env("DATABASE_URL")
      directUrl = env("DIRECT_URL")
    }
   ```

9. Edit `.env` file:

   ```.env
    DATABASE_URL=""
    DIRECT_URL=""
   ```

## Prisma Command

1. `npx prisma db push`: Membaca schema prisma kita dan mengimplementasikannya ke dalam database kita
2. `npx prisma migrate dev`: Membaca schema prisma kita dan mengimplementasikannya ke dalam database kita. Migrate dev akan mencatat history perubahan yang terjadi
3. `npx prisma migrate reset`: Reset database kita dan menyesuaikan history schema prisma yang ada

## Additional Notes

### CommonJS (CJS) vs Module/ES Module (ESM)

#### CJS

```js
module.export = ...

require
```

#### ESM

```js
export ...
export default ...

import ...
```
