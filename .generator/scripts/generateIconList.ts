import * as path from 'path';
import * as fs from 'fs';


const directoryPath: string = path.dirname(require.resolve("react-icons"));
const iconFilePath: string = path.join(directoryPath, 'ri/index.d.ts');
const fileContent: string = fs.readFileSync(iconFilePath, 'utf-8');

const iconRegex: RegExp = /export declare const (Ri\w+): IconType;/g;
const iconNames: string[] = [];

let match: RegExpExecArray | null;
while ((match = iconRegex.exec(fileContent)) !== null) {
    iconNames.push(match[1]);
}

const fragment1: string = iconNames.map(name => `"${name}"`).join("\n| ");
const fragment2: string = iconNames.map(name => `    "${name}": <Ri.${name} />,`).join("\n");

const body: string = `// This file is generated and managed by Teo generator internally.
// It will be overwritten in the next generation. Do not modify this file.

import React, { ReactElement } from "react";
import * as Ri from "react-icons/ri";

export type DefaultIconCode = ${fragment1};

export const defaultIconsMap: { [key in DefaultIconCode]: ReactElement } = {
${fragment2}
};
`;

fs.writeFileSync("src/lib/generated/icons.tsx", body);
