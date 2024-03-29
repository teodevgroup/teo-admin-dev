import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/extended/app/App'

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container);
root.render(<StrictMode>
    <App />
</StrictMode>)
