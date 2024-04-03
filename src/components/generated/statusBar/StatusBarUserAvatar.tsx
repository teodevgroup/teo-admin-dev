// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ComponentPropsWithoutRef } from 'react'
import StatusBarUserAvatarElement from "../../generated/statusBar/StatusBarUserAvatarElement"

export type StatusBarUserAvatarProps = ComponentPropsWithoutRef<'button'> & {
    name: string
    image?: string
}

const StatusBarUserAvatar = ({ name, image, ...props }: StatusBarUserAvatarProps) => {
    return <StatusBarUserAvatarElement {...props}>
        {name[0].toUpperCase()}
    </StatusBarUserAvatarElement>
}

export default StatusBarUserAvatar