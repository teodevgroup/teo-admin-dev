import React, { Suspense, useState } from 'react'
import PaddedMainContent from "../../pageStack/PaddedMainContent"
import PageProps from '../../pageStack/PageProps'
import ButtonsContainer from '../../records/ButtonsContainer'
import FilterAndSortContainer from '../../records/FilterAndSortContainer'
import CreateContainer from '../../records/CreateContainer'
import Button from '../../../extended/button/Button'
import RecordsList from './RecordsList'
import RecordsListShimmer from '../../records/RecordsListShimmer'
import usePageStackPage from '../../pageStack/usePageStackPage'

const AdminRecords = ({ item }: PageProps) => {
    const [filter, setFilter] = useState({})
    const { pushStack } = usePageStackPage()
    return <PaddedMainContent>
        <ButtonsContainer>
            <FilterAndSortContainer>
                <Button>Filters</Button>
                <Button>Sort</Button>
                <Button>Select</Button>
            </FilterAndSortContainer>
            <CreateContainer>
                <Button onClick={() => {
                    pushStack({
                        "key": "AdminForm",
                        "variant": undefined,
                        "query": {}
                    })
                }}>Create</Button>
            </CreateContainer>
        </ButtonsContainer>
        <Suspense fallback={<RecordsListShimmer />}>
            <RecordsList filter={filter} />
        </Suspense>
    </PaddedMainContent>
}

export default AdminRecords