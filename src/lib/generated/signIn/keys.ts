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
                name: "models.admin.email.title",
                desc: "models.admin.email.desc",
            },
        ]
    }
    if (model === "User") {
        return [
            {
                key: "email",
                name: "models.admin.email.title",
                desc: "models.admin.email.desc",
            },
            {
                key: "phoneNo",
                name: "models.admin.phoneNo.title",
                desc: "models.admin.phoneNo.desc",
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
                name: "models.admin.password.title",
                desc: "models.admin.password.desc",
            },
        ]
    }
    if (model === "User") {
        return [
            {
                key: "password",
                name: "models.admin.password.title",
                desc: "models.admin.password.desc",
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