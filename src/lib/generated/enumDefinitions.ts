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

export type EnumNames = "Sex"

const enumDefinitions: {[key in EnumNames]: EnumDefinition} = {
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
        ],
    },
}

export default enumDefinitions
