import { ReactElement } from "react"
import { DefaultIconCode, defaultIconsMap } from "../generated/icons"

export type IconCode = DefaultIconCode

export const iconsMap: { [key in IconCode]: ReactElement } = { 
    ...defaultIconsMap,
}