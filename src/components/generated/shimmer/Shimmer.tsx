import { styled } from "@linaria/react"
import { radius } from "../../../lib/extended/theme"

const Shimmer = styled.div`
    width: 80px;
    height: 20px;
    border-radius: ${radius};
    animation-duration: 2.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: shimmer;
    animation-timing-function: linear;
    background: #ddd;
    background: linear-gradient(to left, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);
    background-size: 1200px 100%;
    @keyframes shimmer {
        0% {
            background-position: 100% 0;
        }
        100% {
            background-position: -100% 0;
        }
    }
`

export default Shimmer