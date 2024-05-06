// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import Caption from "../caption/Caption"
import Link from "../link/Link"
import { useTranslation } from 'react-i18next'

const SignInCaption = () => {
    const { t } = useTranslation("translations")
    return <Caption>{t("signIn.poweredByBefore")}<Link href="https://teocloud.io" target='_blank'>Teo</Link>{t("signIn.poweredByAfter")}</Caption>
}

export default SignInCaption