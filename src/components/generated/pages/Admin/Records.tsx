import React, { Suspense, useState } from 'react'
import PaddedMainContent from "../../pageStack/PaddedMainContent"
import PageProps from '../PageProps'
import ButtonsContainer from '../../records/ButtonsContainer'
import FilterAndSortContainer from '../../records/FilterAndSortContainer'
import CreateContainer from '../../records/CreateContainer'
import Button from '../../../extended/button/Button'
import RecordsList from './RecordsList'
import RecordsListShimmer from '../../records/RecordsListShimmer'

const AdminRecords = ({ item }: PageProps) => {
    const filter = useState({})
    return <PaddedMainContent>
        <ButtonsContainer>
            <FilterAndSortContainer>
                <Button>Filters</Button>
                <Button>Sort</Button>
            </FilterAndSortContainer>
            <CreateContainer>
                <Button>Create</Button>
            </CreateContainer>
        </ButtonsContainer>
        <Suspense fallback={<RecordsListShimmer />}>
            <RecordsList />
        </Suspense>
    </PaddedMainContent>
}

export default AdminRecords