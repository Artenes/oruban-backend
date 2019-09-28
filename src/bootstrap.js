import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

let dotEnvFile = `.env.${process.env.NODE_ENV}`;
const pathToRoot = path.resolve(__dirname, '..');

// if no .env.[environment] exists, set the default to .env
if (!fs.existsSync(path.resolve(pathToRoot, dotEnvFile))) {
  dotEnvFile = '.env';
}

dotenv.config({ path: dotEnvFile });
