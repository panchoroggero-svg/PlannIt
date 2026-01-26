import { createRoot } from "react-dom/client"
import App from "./app/App"
import "./styles/index.css"

import { registerSW } from "virtual:pwa-register"

createRoot(document.getElementById("root")!).render(<App />)

// 🔥 Registro del Service Worker (OBLIGATORIO para instalar la app)
registerSW({
  immediate: true
})
