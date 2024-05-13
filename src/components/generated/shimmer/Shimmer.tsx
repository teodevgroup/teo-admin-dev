// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { radius } from "../../../lib/extended/theme"
import { dark, light } from "../../../lib/generated/theme"

const Shimmer = styled.div`
    width: 80px;
    height: 20px;
    border-radius: ${radius};
    ${light} {
        animation-duration: 2.2s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        background: #ddd;
        background: linear-gradient(to left, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);
        animation-name: shimmer;
        background-size: 1200px 100%;
    }
    ${dark} {
        animation-duration: 2.2s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        background: #191919;
        background: linear-gradient(to left, #191919 8%, #272729 18%, #191919 33%);
        animation-name: shimmer;
        background-size: 1200px 100%;
    }
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