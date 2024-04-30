// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { Preferences } from "./preferences"

const defaultPreferences: Preferences = {
    lang: "enUs",
    nav: {
        collapsed: false,
        items: [
            { id: "Admin", name: "Admin", icon: "RiBox3Line", path: "Admin" },
            { id: "User", name: "User", icon: "RiBox3Line", path: "User" },
        ]
    },
    signIn: {
        defaultModel: "Admin",
        user: {
            defaultIdKey: "email",
            defaultCheckerKey: "password"
        },
        admin: {
            defaultIdKey: "email",
            defaultCheckerKey: "password"
        }
    }
}

export default defaultPreferences