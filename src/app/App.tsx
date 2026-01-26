import { RouterProvider } from "react-router"
import { router } from "@/app/routes"

export default function App() {
  return (
    <div
      className="
        min-h-screen
        bg-[#F2F2F7]
        text-black
        antialiased
      "
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <RouterProvider router={router} />
    </div>
  )
}

