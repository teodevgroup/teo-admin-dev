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

const ProductRecords = ({ item }: PageProps) => {
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
                            "key": "ProductForm",
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

export default ProductRecords