import { PageStackItemKey } from "../../extended/pageStack/PageStackItemKeys"

export type PageStackItem = {
    key: PageStackItemKey
    variant?: string | undefined
    query?: { [key: string]: any } | undefined
}