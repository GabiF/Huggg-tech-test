import * as fs from 'fs';
import * as path from 'path';

export const readJsonFile = (filePath: string): any => {
    const jsonFilePath = path.join(__dirname, filePath);
    return JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
}