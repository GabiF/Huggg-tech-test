import * as fs from 'fs';
import * as path from 'path';

export const readJsonFile = (filePath: string): any => {
  const absolutePath = path.resolve(filePath);
  const fileContents = fs.readFileSync(absolutePath, 'utf8');

  return JSON.parse(fileContents);
};