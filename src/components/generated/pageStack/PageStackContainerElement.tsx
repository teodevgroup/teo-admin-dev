import { styled } from "@linaria/react"

export type PageStackContainerElementProps = {
    isHidden: boolean
}

const PageStackContainerElement = styled.div<PageStackContainerElementProps>`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: ${({ isHidden }) => isHidden ? "none" : "block"};
`

export default PageStackContainerElement