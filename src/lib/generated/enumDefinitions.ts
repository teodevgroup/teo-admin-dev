// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

export type EnumMemberDefinition = {
    value: string
    name: string
    desc: string
}

export type EnumDefinition = {
    name: string
    desc: string
    members: EnumMemberDefinition[]
}

const enumDefinitions: { [key: string]: EnumDefinition } = {
    "Sex": {
        "name": "enum.sex.name",
        "desc": "enum.sex.desc",
        "members": [
            {
                "value": "male",
                "name": "enum.sex.male.name",
                "desc": "enum.sex.male.desc",
            },
            {
                "value": "female",
                "name": "enum.sex.female.name",
                "desc": "enum.sex.female.desc",
            },
        ]
    },
    "std.Sort": {
        "name": "enum.std.sort.name",
        "desc": "enum.std.sort.desc",
        "members": [
            {
                "value": "asc",
                "name": "enum.std.sort.asc.name",
                "desc": "enum.std.sort.asc.desc",
            },
            {
                "value": "desc",
                "name": "enum.std.sort.desc.name",
                "desc": "enum.std.sort.desc.desc",
            },
        ]
    },
    "std.StringMatchMode": {
        "name": "enum.std.stringMatchMode.name",
        "desc": "enum.std.stringMatchMode.desc",
        "members": [
            {
                "value": "default",
                "name": "enum.std.stringMatchMode.default.name",
                "desc": "enum.std.stringMatchMode.default.desc",
            },
            {
                "value": "caseInsensitive",
                "name": "enum.std.stringMatchMode.caseInsensitive.name",
                "desc": "enum.std.stringMatchMode.caseInsensitive.desc",
            },
        ]
    },
}

export default enumDefinitions