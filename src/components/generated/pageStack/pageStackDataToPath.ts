import { toQuery } from 'query-string-parser'
import { PageStackData } from "./PageStackData"
import { PageStackItem } from "./PageStackItem"

const pageStackItemToPath = (item: PageStackItem) => {
    if (item.key === "_Index") {
        return ""
    }
    return item.key.replace(".Variant", "") + 
    (item.variant ? "-" + item.variant : "") +
    (item.query ? (item.variant ? "-" : "--") + toQuery(item.query!) : "")
}

const pageStackDataToPath: (stack: PageStackData) => string = (stack: PageStackData) => {
    return "/" + stack.map((item) => pageStackItemToPath(item)).join("/")
}

export default pageStackDataToPath
