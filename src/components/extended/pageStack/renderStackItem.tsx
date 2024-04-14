// This file is generated by Teo generator for extending purpose.
// The file content will not be overwritten between generations. Be careful to 
// modify this file. Do not modify export names and siganatures. Modify values 
// with care.

import { PageStackItem } from "../../generated/pageStack/PageStackItem"
import renderDefaultStackItem from "../../generated/pageStack/renderDefaultStackItem"
import renderNotFound from "../../generated/pageStack/renderNotFound"

export default function renderStackItem(item: PageStackItem) {
    const element = renderDefaultStackItem(item)
    if (element) {
        return element
    }
    // write your own page items here
    return renderNotFound()
}