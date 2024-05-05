// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { Preferences } from "./preferences"

const defaultPreferences: Preferences = {
    lang: "enUs",
    nav: {
        collapsed: false,
        items: [
            { id: "Admin", name: "model.admin.name", icon: "RiBox3Line", path: "Admin"},
            { id: "Category", name: "model.category.name", icon: "RiBox3Line", path: "Category"},
            { id: "Item", name: "model.item.name", icon: "RiBox3Line", path: "Item"},
            { id: "Product", name: "model.product.name", icon: "RiBox3Line", path: "Product"},
            { id: "Record", name: "model.record.name", icon: "RiBox3Line", path: "Record"},
            { id: "Root", name: "model.root.name", icon: "RiBox3Line", path: "Root"},
        ]
    },
    signIn: {
        defaultModel: "Admin",
        admin: {
            defaultIdKey: "email",
            defaultCheckerKey: "password",
        },
        root: {
            defaultIdKey: "email",
            defaultCheckerKey: "password",
        },
    }
}

export default defaultPreferences