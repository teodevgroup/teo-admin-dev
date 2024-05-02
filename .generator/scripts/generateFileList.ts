import { globSync } from 'glob'
import { writeFileSync } from 'fs'

const generatedExcludes = [
    "src/lib/generated/teo/index.js",
    "src/lib/generated/teo/index.d.ts",
    "src/lib/generated/signIn/index.ts",
    "src/lib/generated/signIn/keys.ts",
    "src/components/generated/signInModal/SignInForm.tsx",
    "src/lib/generated/preferences.ts",
    "src/lib/generated/defaultPreferences.ts",
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

function shouldIgnoreExtended(fileLocation: string) {
    if (fileLocation.includes("lib/extended/translations")) {
        return true
    }
    return false
}

function shouldIgnoreGenerate(fileLocation: string) {
    if (generatedExcludes.includes(fileLocation)) {
        return true
    }
    if (fileLocation.includes("components/generated/pages")) {
        return true
    }
    if (fileLocation.includes("lib/generated/translations")) {
        return true
    }
    return false
}

globSync("./src/components/generated/**/*", { nodir: true }).forEach((fileLocation) => {
    fileLocation = fixWindowsPath(fileLocation)
    if (!shouldIgnoreGenerate(fileLocation)) {
        generatedFiles.push(fileLocation)
    }
})

globSync("./src/lib/generated/**/*", { nodir: true }).forEach((fileLocation) => {
    fileLocation = fixWindowsPath(fileLocation)
    if (!shouldIgnoreGenerate(fileLocation)) {
        generatedFiles.push(fileLocation)
    }
})

globSync("./src/components/extended/**/*", { nodir: true }).forEach((fileLocation) => {
    fileLocation = fixWindowsPath(fileLocation)
    if (!shouldIgnoreExtended(fileLocation)) {
        extendedFiles.push(fileLocation)
    }
})

globSync("./src/lib/extended/**/*", { nodir: true }).forEach((fileLocation) => {
    fileLocation = fixWindowsPath(fileLocation)
    if (!shouldIgnoreExtended(fileLocation)) {
        extendedFiles.push(fileLocation)
    }
})

writeFileSync(".generator/data/fileList.json", JSON.stringify({
    "generated": generatedFiles,
    "extended": extendedFiles,
}, null, 4))
