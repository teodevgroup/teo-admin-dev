// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/extended/app/App'
import i18nInit from './lib/generated/translations/init'

i18nInit()

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<StrictMode>
    <App />
</StrictMode>)
