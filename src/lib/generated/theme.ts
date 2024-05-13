// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { defaultTransitionCurve, defaultTransitionTimeInterval, desktopHDMin, desktopMax, desktopMin, phoneLandscapeMax, phoneLandscapeMin, phonePortraitMax, shortTransitionTimeInterval, tabletMax, tabletMin } from "../extended/theme"
import { Property } from 'csstype'

export const light = '@media (prefers-color-scheme: light)'

export const dark = '@media (prefers-color-scheme: dark)'

export const phonePortrait = `@media (max-width: ${phonePortraitMax})`

export const phoneLandscape = `@media (min-width: ${phoneLandscapeMin}) and (max-width: ${phoneLandscapeMax})`

export const tablet = `@media (min-width: ${tabletMin}) and (max-width: ${tabletMax})`

export const desktop = `@media (min-width: ${desktopMin}) and (max-width: ${desktopMax})`

export const desktopHD = `@media (min-width: ${desktopHDMin})`

export const phone = `@media (max-width: ${phoneLandscapeMax})`

export const phoneAndTablet = `@media (max-width: ${tabletMax})`

export const tabletAndDesktop = `@media (min-width: ${tabletMin}) and (max-width: ${desktopMax})`

export const anyDesktop = `@media (min-width: ${desktopMin})`

export const exceptPhonePortrait = `@media (min-width: ${phoneLandscapeMin})`

export const exceptPhone = `@media (min-width: ${tabletMin})`

export const flexContainer = (direction: Property.FlexDirection, alignItems: Property.AlignItems = "center", justifyContent: Property.JustifyContent = "center") => {
    return `display: flex; flex-direction: ${direction}; align-items: ${alignItems}; justify-content: ${justifyContent};`
}

export const clearButton = `background: none; border: none; outline: none; box-shadow: none; margin: 0; padding: 0;`

export const clearHeading = `padding: 0; margin: 0; line-height: 1;`

export const transitionAll = `transition: all ${defaultTransitionTimeInterval} ${defaultTransitionCurve};`

export const transitionShort = (keys: string) => {
    return `transition: ${keys} ${shortTransitionTimeInterval} ${defaultTransitionCurve};`
}

export const size = (width: string, height?: string) => {
    if (height) {
        return `width: ${width}; height: ${height};`
    } else {
        return `width: ${width}; height: ${width};`
    }
}
