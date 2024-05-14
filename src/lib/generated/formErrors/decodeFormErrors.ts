import { FieldErrors } from "react-hook-form"
import arrayKey from "../utilities/arrayKey"
import set from "../utilities/set"

function decodeFormErrors(teoErrors: {[key: string]: string}): FieldErrors<any> {
    let result: any = {}
    Object.entries(teoErrors).forEach(([k, v]) => {
        const fixedK = arrayKey(k.replace(/^create./, "").replace(/^update./, ""))
        result = set(result, fixedK, { message: v })
    })
    return result as any
}

export default decodeFormErrors