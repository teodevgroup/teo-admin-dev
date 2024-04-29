import React, { useState } from 'react'
import PageProps from "../../pageStack/PageProps"
import { suspend } from 'suspend-react'
import { isEqual, omit } from 'radash'
import { Admin, AdminCreateInput, AdminUpdateInput, teo } from '../../../../lib/generated/teo'
import FormContainer from '../../form/FormContainer'
import Input from '../../../extended/input/Input'
import LabeledGroup from '../../form/LabeledGroup'
import Label from '../../form/Label'
import PaddedMainContent from '../../pageStack/PaddedMainContent'
import Button from '../../../extended/button/Button'
import { useForm } from 'react-hook-form'
import usePageStackPage from '../../pageStack/usePageStackPage'
import useRefreshToken from '../../../../lib/generated/refreshToken'

const AdminForm = ({ item }: PageProps) => {
    const { popStack } = usePageStackPage()
    const { refresh } = useRefreshToken("models.admin")
    const data: Partial<Admin & AdminCreateInput & AdminUpdateInput> = suspend(async () => {
        if (isEqual(item.query, {}) || !item.query) {
            return {}
        } else {
            return (await teo.admin.findUnique({
                where: item.query
            })).data
        }
    }, [item])
    const { register, handleSubmit } = useForm({ defaultValues: omit(data, ["id"]) })
    const [loading, setLoading] = useState(false)
    const onSubmit = async (data: any) => {
        setLoading(true)
        try {
            if (isEqual(item.query, {}) || !item.query) {
                const _ = await teo.admin.create({
                    "create": data
                })
                setLoading(false)
                refresh()
                popStack()
            } else {
                const _ = await teo.admin.update({
                    "where": item.query,
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
            const _ = await teo.admin.delete({
                "where": item.query!
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
                <Label>Email</Label>
                <Input disabled={loading} {...register("email")} />
            </LabeledGroup>
            <LabeledGroup>
                <Label>Password</Label>
                <Input disabled={loading} {...register("password")} />
            </LabeledGroup>
            <LabeledGroup>
                <Button disabled={loading} type='submit'>Submit</Button>
            </LabeledGroup>
            {!(isEqual(item.query, {}) || !item.query) ? <LabeledGroup>
                <Button disabled={loading} type="button" onClick={onDelete}>Delete</Button>
            </LabeledGroup> : null}
        </PaddedMainContent>
    </FormContainer>
}

export default AdminForm