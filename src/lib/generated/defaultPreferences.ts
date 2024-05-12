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
    },
    models: {
        "Admin": {
            form: {
                email: { width: "full" },
                phoneNo: { width: "full" },
                password: { width: "full" },
            },
        },
        "Category": {
            form: {
                name: { width: "full" },
            },
        },
        "Item": {
            form: {
                name: { width: "full" },
            },
        },
        "Product": {
            form: {
                name: { width: "full" },
                stock: { width: "full" },
                categoryId: { width: "full" },
            },
        },
        "Record": {
            form: {
                string: { width: "full" },
                bool: { width: "full" },
                int: { width: "full" },
                float: { width: "full" },
                decimal: { width: "full" },
                date: { width: "full" },
                dateTime: { width: "full" },
                sex: { width: "full" },
                strings: { width: "full" },
                genders: { width: "full" },
            },
        },
        "Root": {
            form: {
                email: { width: "full" },
                password: { width: "full" },
            },
        },
    }
}

export default defaultPreferences