import { globSync } from 'glob'
import { writeFileSync } from 'fs'

const generatedExcludes = [
    ""
]

const generatedFiles = [
    "src/index.tsx",
]

const extendedFiles = [
    ".babelrc",
    ".gitignore",
    "modules.d.ts",
    "tsconfig.json",
    "tslint.json",
    "webpack.config.ts",
]

function fixWindowsPath(path: string) {
    return path.replace(/\\/g, '/')
}

globSync("./src/components/generated/**/*", { nodir: true }).forEach((fileLocation) => {
    fileLocation = fixWindowsPath(fileLocation)
    if (!generatedExcludes.includes(fileLocation)) {
        generatedFiles.push(fileLocation)
    }
})

globSync("./src/lib/generated/**/*", { nodir: true }).forEach((fileLocation) => {
    fileLocation = fixWindowsPath(fileLocation)
    if (!generatedExcludes.includes(fileLocation)) {
        generatedFiles.push(fileLocation)
    }
})

globSync("./src/components/extended/**/*", { nodir: true }).forEach((fileLocation) => {
    fileLocation = fixWindowsPath(fileLocation)
    extendedFiles.push(fileLocation)
})

globSync("./src/lib/extended/**/*", { nodir: true }).forEach((fileLocation) => {
    fileLocation = fixWindowsPath(fileLocation)
    extendedFiles.push(fileLocation)
})

writeFileSync(".generator/data/fileList.json", JSON.stringify({
    "generated": generatedFiles,
    "extended": extendedFiles,
}, null, 4))
