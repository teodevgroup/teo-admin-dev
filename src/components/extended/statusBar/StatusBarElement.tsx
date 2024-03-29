import { styled } from "@linaria/react";
import { flexContainer } from "../../../lib/generated/theme";
import { margin } from "../../../lib/extended/theme";

const StatusBarElement = styled.div`
    ${flexContainer("row", "center", "flex-end")}
    gap: ${margin};
    padding: ${margin};
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
`

export default StatusBarElement