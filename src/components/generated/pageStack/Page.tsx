import React, { ReactNode, useContext } from "react"
import PageElement from "../../extended/pageStack/PageElement"
import StackItemIndexContext from "./stackItemIndexContext"

export type PageProps = {
    children?: ReactNode | ReactNode[]
}

const Page = ({ children }: PageProps) => {
    return <PageElement>
        {children}
    </PageElement>
}

export default Page