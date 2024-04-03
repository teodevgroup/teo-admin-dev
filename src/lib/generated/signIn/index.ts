// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { suspend } from 'suspend-react'
import { Admin, teo, User, std } from '../teo'

export type AccountModel = "Admin" | "User"

export const accountModels: AccountModel[] = ["Admin", "User"]

type Account = { 
    "Admin": std.DataMeta<Admin, std.identity.TokenInfo>
} | { 
    "User": std.DataMeta<User, std.identity.TokenInfo>
}

let account: Account | null = loadAccountFromLocalStorage()

function loadAccountFromLocalStorage(): Account | null {
    const storageItem = localStorage.getItem("__teo_account__")
    if (!storageItem) {
        return null
    } else {
        return JSON.parse(storageItem)
    }
}

function saveAccountIntoLocalStorage(account: Account | null) {
    if (!account) {
        localStorage.removeItem("__teo_account__")
    } else {
        localStorage.setItem("__teo_account__", JSON.stringify(account))
    }
}

function getAccount() {
    return account
}

loadAccountFromLocalStorage()

let savedResolves: ((value: Account | PromiseLike<Account>) => void)[] = []

const fetchAccount: () => Promise<Account> = () => {
    return new Promise((resolve) => {
        if (account) {
            resolve(account)
        } else {
            savedResolves.push(resolve)
        }
    })
}

const flushAccountSetters = () => {
    console.log("see this:", accountSetters, account)
    accountSetters.forEach((setter) => {
        setter(account)
    })
}

const flushAccountResolves = () => {
    if (account) {
        savedResolves.forEach((resolve) => {
            resolve(account!)
        })
        savedResolves = []
    }
}

const accountSetters: Dispatch<SetStateAction<Account | null>>[] = []

export const useAccount: () => Account = () => {
    const [currentAccount, setCurrentAccount] = useState(getAccount())
    useEffect(() => {
        accountSetters.push(setCurrentAccount)
        return () => {
            accountSetters.splice(accountSetters.indexOf(setCurrentAccount), 1)
        }
    }, [])
    return suspend(fetchAccount, [currentAccount])
}

export const useAccountAvailable: () => boolean = () => {
    const [currentAccount, setCurrentAccount] = useState(getAccount())
    useEffect(() => {
        accountSetters.push(setCurrentAccount)
        return () => {
            accountSetters.splice(accountSetters.indexOf(setCurrentAccount), 1)
        }
    }, [])
    console.log("see available:", !!currentAccount)
    return !!currentAccount
}

export const signOut = () => {
    account = null
    saveAccountIntoLocalStorage(null)
    flushAccountResolves()
    flushAccountSetters()
}

export const signIn = async (model: AccountModel, data: any) => {
    if (model === "Admin") {
        const signInResult = await teo.admin.signIn({
            "credentials": data
        })
        const accountLocalVariable = { "Admin": signInResult }
        if (accountLocalVariable !== null) {
            account = accountLocalVariable as any
            saveAccountIntoLocalStorage(account)
            flushAccountResolves()
            flushAccountSetters()
            return 
        }
    }
    if (model === "User") {
        const signInResult = await teo.user.signIn({
            "credentials": data
        })
        const accountLocalVariable = { "User": signInResult }
        if (accountLocalVariable !== null) {
            account = accountLocalVariable as any
            saveAccountIntoLocalStorage(account)
            flushAccountResolves()
            flushAccountSetters()
            return
        }
    }
    throw new Error("invalid sign in model")
}