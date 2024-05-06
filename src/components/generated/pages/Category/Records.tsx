// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

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
import { useTranslation } from 'react-i18next'
import HideContentShimmerIfNotSignedIn from '../../shimmer/HideContentShimmerIfNotSignedIn'

const CategoryRecords = ({ item }: PageProps) => {
    const [filter, setFilter] = useState({})
    const { t } = useTranslation("translations")
    const { pushStack } = usePageStackPage()
    return <PaddedMainContent>
        <ButtonsContainer>
            <FilterAndSortContainer>
                <HideContentShimmerIfNotSignedIn rounded={true}>
                    <Button>{t("records.filters")}</Button>
                </HideContentShimmerIfNotSignedIn>
                <HideContentShimmerIfNotSignedIn rounded={true}>
                    <Button>{t("records.orders")}</Button>
                </HideContentShimmerIfNotSignedIn>
            </FilterAndSortContainer>
            <CreateContainer>
                <HideContentShimmerIfNotSignedIn rounded={true}>
                    <Button onClick={() => {
                        pushStack({
                            "key": "CategoryForm",
                            "variant": undefined,
                            "query": {}
                        })
                    }}>{t("records.create")}</Button>
                </HideContentShimmerIfNotSignedIn>
            </CreateContainer>
        </ButtonsContainer>
        <Suspense fallback={<RecordsListShimmer />}>
            <RecordsList filter={filter} />
        </Suspense>
    </PaddedMainContent>
}

export default CategoryRecords