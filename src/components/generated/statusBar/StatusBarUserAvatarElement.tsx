import { styled } from "@linaria/react"
import { dark, flexContainer, light, size } from "../../../lib/generated/theme"
import { spacing } from "../../../lib/extended/theme"

const StatusBarUserAvatarElement = styled.div`
    ${flexContainer("row", "center", "center")}
    ${size(`calc(1.5rem + 2 * ${spacing})`)}
    border-radius: ${`calc((1.5rem + 2 * ${spacing}) / 2)`};
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    font-size: 1.25rem;
    ${light} {
        background-color: gray;
    }
    ${dark} {
        background-color: gray;
    }
`

export default StatusBarUserAvatarElement