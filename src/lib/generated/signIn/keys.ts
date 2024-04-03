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

