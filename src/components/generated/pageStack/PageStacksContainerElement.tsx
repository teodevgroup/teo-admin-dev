import { styled } from "@linaria/react"

export type PageStacksContainerElementProps = {
    isHidden: boolean
}

const PageStacksContainerElement = styled.div<PageStacksContainerElementProps>`
    flex-grow: 1;
    position: relative;
    display: ${({ isHidden }) => isHidden ? "none" : "block"};
`

export default PageStacksContainerElement