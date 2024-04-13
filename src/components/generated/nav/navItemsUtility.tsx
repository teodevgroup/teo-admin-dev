import { NavItem } from "../../../lib/generated/preferences"

export const navItemsAtPath = (navItems: NavItem[], itemsPath: string[]): NavItem[] => {
    let result = navItems
    for (let p of itemsPath) {
        const child = result.find((item) => item.id === p)
        if (!child) {
            return []
        }
        if (!child.childItems) {
            return []
        }
        result = child.childItems
    }
    return result
}

export const removeNavItemAtPath = (navItems: NavItem[], itemsPath: string[]): [NavItem[], NavItem | undefined] => {
    if (itemsPath.length === 0) {
        return [navItems, undefined]
    }
    let removedItem = undefined
    const _removed = (nestedNavItems: NavItem[]): NavItem[] => {
        const newNestedNavItems = [...nestedNavItems]
        if (itemsPath.length > 1) {
            const key = itemsPath.shift()
            const index = newNestedNavItems.findIndex((item) => item.id === key)
            newNestedNavItems[index] = { ...newNestedNavItems[index] }
            newNestedNavItems[index].childItems = _removed(newNestedNavItems[index].childItems!)
            return newNestedNavItems
        } else {
            const index = newNestedNavItems.findIndex((item) => item.id === itemsPath[0])
            removedItem = newNestedNavItems[index]
            newNestedNavItems.splice(index, 1)
            return newNestedNavItems
        }
    }
    const object = _removed(navItems)
    return [object, removedItem]
}

export const insertNavItemAtPath = (navItems: NavItem[], itemsPath: string[], index: number, navItem: NavItem): NavItem[] => {
    const _inserted = (nestedNavItems: NavItem[]): NavItem[] => {
        const newNestedNavItems = [...nestedNavItems]
        if (itemsPath.length >= 1) {
            const key = itemsPath.shift()
            const index = newNestedNavItems.findIndex((item) => item.id === key)
            newNestedNavItems[index] = { ...newNestedNavItems[index] }
            newNestedNavItems[index].childItems = _inserted(newNestedNavItems[index].childItems!)
            return newNestedNavItems
        } else {
            newNestedNavItems.splice(index, 0, navItem)
            return newNestedNavItems
        }
    }
    return _inserted(navItems)
}

export const moveNavItemFromPathToPath = (navItems: NavItem[], fromPath: string[], toPath: string[], toIndex: number): NavItem[] => {
    const [newNavItems, navItem] = removeNavItemAtPath(navItems, fromPath)
    return insertNavItemAtPath(newNavItems, toPath, toIndex, navItem!)
}

export const droppableIdForNavItemAtPath = (path: string[]) => {
    return ["nav", ...path].join("/")
}

export const navItemPathFromDroppableId = (droppableId: string) => {
    return droppableId.split("/").slice(1)
}

export const isNavItemDroppableId = (droppableId: string) => {
    return droppableId.startsWith("nav")
}

export const moveNavItemWithSourceAndDestInfo = (navItems: NavItem[], sourceId: string, sourceIndex: number, destId: string, destIndex: number) => {
    const sourcePath = navItemPathFromDroppableId(sourceId)
    const destPath = navItemPathFromDroppableId(destId)
    const item = navItemsAtPath(navItems, sourcePath)[sourceIndex]
    const sourcePathWithItem = [...sourcePath, item.id]
    return moveNavItemFromPathToPath(navItems, sourcePathWithItem, destPath, destIndex)
}