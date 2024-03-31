import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { suspend } from 'suspend-react'

type AccountModel = "Admin" | "User"

type Account = {}

let account: Account | null = loadAccountFromLocalStorage()

function loadAccountFromLocalStorage(): Account | null {

}

function saveAccountIntoLocalStorage(account: Account | null) {

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

        }
    }, [])
    return suspend(fetchAccount, [currentAccount])
}

export const signIn = async (model: AccountModel, data: any) => {

    account = {}
    // save to local storage
    flushAccountResolves()
}