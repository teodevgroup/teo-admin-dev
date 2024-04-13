import { Dispatch, SetStateAction, useEffect, useState } from "react"

let _cachedValue = true

export const shouldDisplay = () => {
    return _cachedValue
}

export const setShouldDisplay = (value: boolean) => {
    _cachedValue = value
}