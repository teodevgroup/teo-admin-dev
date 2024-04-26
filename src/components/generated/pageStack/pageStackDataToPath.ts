import { PageStackData } from "./PageStackData"
import { PageStackItem } from "./PageStackItem"
import { encode } from 'js-base64'

const pageStackItemToPath = (item: PageStackItem) => {
    if (item.key === "_Index") {
        return ""
    }
    return item.key + 
    (item.variant ? "-" + item.variant : "") +
    (item.query ? (item.variant ? "-" : "--") + encode(JSON.stringify(item.query!)) : "")
}

const pageStackDataToPath: (stack: PageStackData) => string = (stack: PageStackData) => {
    return "/" + stack.map((item) => pageStackItemToPath(item)).join("/")
}

export default pageStackDataToPath
