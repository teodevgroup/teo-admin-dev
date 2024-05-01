import { styled } from "@linaria/react";
import { flexContainer } from "../../../lib/generated/theme";
import { margin } from "../../../lib/extended/theme";

const FakeControlShimmers = styled.div`
    ${flexContainer("column", "stretch", "flex-start")}
    gap: ${margin};
    flex-grow: 1;
`

export default FakeControlShimmers