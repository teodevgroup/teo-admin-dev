// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"

export type ContentTabProps = {
    isHidden: boolean
}

const ContentTab = styled.div<ContentTabProps>`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: ${({ isHidden }) => isHidden ? "none" : "block"};
`

export default ContentTab