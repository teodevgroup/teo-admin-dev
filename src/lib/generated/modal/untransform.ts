function extract(transform: string): [number, number] {
    return transform.replace("translate(", "").replace(")", "").split(",").map((item) => Number(item.trim().replace("px", ""))) as [number, number]
}

export default function untransform(itemTransform: string, portalTransform: string) {
    const itemTransformArray = extract(itemTransform)
    const portalTransformArray = extract(portalTransform)
    return `translate(${itemTransformArray[0] - portalTransformArray[0]}px, ${itemTransformArray[1] - portalTransformArray[1]}px)`

}