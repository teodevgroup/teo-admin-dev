import { AccountModel } from "."

export type Field = {
    key: string
    name: string
    desc: string
}

export const idFieldsForModel: (model: AccountModel) => Field[] = (model: AccountModel) => {
    if (model === "Admin") {
        return [
            {
                key: "email",
                name: "model.admin.email.name",
                desc: "model.admin.email.desc",
            },
        ]
    }
    if (model === "User") {
        return [
            {
                key: "email",
                name: "model.admin.email.name",
                desc: "model.admin.email.desc",
            },
            {
                key: "phoneNo",
                name: "model.admin.phoneNo.name",
                desc: "model.admin.phoneNo.desc",
            },            
        ]
    }
    return []
}

export const checkerFieldsForModel: (model: AccountModel) => Field[] = (model: AccountModel) => {
    if (model === "Admin") {
        return [
            {
                key: "password",
                name: "model.admin.password.name",
                desc: "model.admin.password.desc",
            },
        ]
    }
    if (model === "User") {
        return [
            {
                key: "password",
                name: "model.admin.password.name",
                desc: "model.admin.password.desc",
            },          
        ]
    }
    return []
}

export const companionFieldsForModel: (model: AccountModel) => Field[] = (model: AccountModel) => {
    if (model === "Admin") {
        return [
        ]
    }
    if (model === "User") {
        return [
        ]
    }
    return []
}