// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { useState } from 'react'
import PageProps from "../../pageStack/PageProps"
import { suspend } from 'suspend-react'
import { isEqual, omit } from 'radash'
import { teo, Product, ProductCreateInput, ProductUpdateInput } from '../../../../lib/generated/teo'
import FormContainer from '../../form/FormContainer'
import LabeledGroup from '../../form/LabeledGroup'
import PaddedMainContent from '../../pageStack/PaddedMainContent'
import Button from '../../../extended/button/Button'
import { useForm } from 'react-hook-form'
import usePageStackPage from '../../pageStack/usePageStackPage'
import useRefreshToken from '../../../../lib/generated/refreshToken'
import { useTranslation } from 'react-i18next'
import renderFormEntry from '../../form/renderFormEntry'
import useRerender from '../../../../lib/useRerender'
import { useModelProductFormPreferences } from '../../../../lib/generated/preferences'

const ProductForm = ({ item }: PageProps) => {
    const { popStack } = usePageStackPage()
    const rerender = useRerender()
    const { refresh } = useRefreshToken("models.product")
    const { t } = useTranslation("translations")
    const [formPreferences, setFormPreferences] = useModelRecordFormPreferences()
    const data: Partial<Product & ProductCreateInput & ProductUpdateInput> = suspend(async () => {
        if (isEqual(item.query, {}) || !item.query) {
            return {}
        } else {
            return (await teo.product.findUnique({
                where: item.query as any
            })).data
        }
    }, [item])
    const form = useForm({ defaultValues: omit(data, ["id"]) })
    const [loading, setLoading] = useState(false)
    const onSubmit = async (data: any) => {
        setLoading(true)
        try {
            if (isEqual(item.query, {}) || !item.query) {
                const _ = await teo.product.create({
                    "create": data
                })
                setLoading(false)
                refresh()
                popStack()
            } else {
                const _ = await teo.product.update({
                    "where": item.query as any,
                    "update": data
                })
                setLoading(false)
                refresh()
                popStack()
            }
        } catch {
            if (isEqual(item.query, {}) || !item.query) {
                alert("Cannot create new record.")
            } else {
                alert("Cannot update this record.")
            }
            setLoading(false)
        }
    }
    const onDelete = async () => {
        setLoading(true)
        try {
            const _ = await teo.product.delete({
                "where": item.query as any
            })
            setLoading(false)
            refresh()
            popStack()
        } catch {
            alert("Cannot delete.")
            setLoading(false)
        }
    }
    return <FormContainer onSubmit={form.handleSubmit(onSubmit)}>
        <PaddedMainContent>
            {renderFormEntry(formPreferences, setFormPreferences, t('model.product.name.name'), "name", { type: "String", optional: false }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.product.stock.name'), "stock", { type: "Int", optional: false }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.product.categoryId.name'), "categoryId", { type: "Int", optional: false }, form, loading, t, rerender)}
            <LabeledGroup>
                <Button disabled={loading} type='submit'>{t("form.submit")}</Button>
            </LabeledGroup>
            {!(isEqual(item.query, {}) || !item.query) ? <LabeledGroup>
                <Button disabled={loading} type="button" onClick={onDelete}>{t("form.delete")}</Button>
            </LabeledGroup> : null}
        </PaddedMainContent>
    </FormContainer>
}

export default ProductForm