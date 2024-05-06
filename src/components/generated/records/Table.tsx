// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"

const Table = styled.table`
    flex-grow: 1;
    width: 100%;
    border-collapse: collapse;
    & th {
        border-top: none;
    }
    & th:first-child {
        border-left: none;
    }
    & th:last-child {
        border-right: none;
    }
    & tr:first-child td {
        border-top: none;
    }

    & tr:last-child td {
        border-bottom: none;
    }

    & tr td:first-child {
        border-left: none;
    }

    & tr td:last-child {
        border-right: none;
    }
`

export default Table