import React, { useState } from 'react'
import PageProps from "../../pageStack/PageProps"
import { suspend } from 'suspend-react'
import { isEqual, omit } from 'radash'
import { teo, Product, ProductCreateInput, ProductUpdateInput } from '../../../../lib/generated/teo'
import FormContainer from '../../form/FormContainer'
import Input from '../../../extended/input/Input'
import LabeledGroup from '../../form/LabeledGroup'
import Label from '../../form/Label'
import PaddedMainContent from '../../pageStack/PaddedMainContent'
import Button from '../../../extended/button/Button'
import { useForm } from 'react-hook-form'
import usePageStackPage from '../../pageStack/usePageStackPage'
import useRefreshToken from '../../../../lib/generated/refreshToken'
import { useTranslation } from 'react-i18next'

const ProductForm = ({ item }: PageProps) => {
    const { popStack } = usePageStackPage()
    const { refresh } = useRefreshToken("models.product")
    const { t } = useTranslation("translations")
    const data: Partial<Product & ProductCreateInput & ProductUpdateInput> = suspend(async () => {
        if (isEqual(item.query, {}) || !item.query) {
            return {}
        } else {
            return (await teo.product.findUnique({
                where: item.query as any
            })).data
        }
    }, [item])
    const { register, handleSubmit } = useForm({ defaultValues: omit(data, ["id"]) })
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
    return <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <PaddedMainContent>
            <LabeledGroup>
                <Label>{t('model.product.name.name')}</Label>
                <Input disabled={loading} {...register("name")} />
            </LabeledGroup>
            <LabeledGroup>
                <Label>{t('model.product.stock.name')}</Label>
                <Input disabled={loading} {...register("stock")} />
            </LabeledGroup>
            <LabeledGroup>
                <Label>{t('model.product.categoryId.name')}</Label>
                <Input disabled={loading} {...register("categoryId")} />
            </LabeledGroup>
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