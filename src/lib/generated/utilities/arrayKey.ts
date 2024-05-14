const arrayKey = (key: string): (string | number)[] => {
    return key.split(".").map((k) => {
        let tryNumber = Number(k)
        if (!Number.isNaN(tryNumber)) {
            return tryNumber
        } else {
            return k
        }
    })
}

export default arrayKey