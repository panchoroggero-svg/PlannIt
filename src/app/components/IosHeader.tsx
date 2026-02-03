import { useEffect, useState } from "react"

interface IosHeaderProps {
  title: string
  /** "light" por defecto para no romper otras pantallas */
  mode?: "light" | "dark"
}

export default function IosHeader({ title, mode = "light" }: IosHeaderProps) {
  const [collapsed, setCollapsed] = useState(false)
  const isDark = mode === "dark"

  useEffect(() => {
    const onScroll = () => {
      setCollapsed(window.scrollY > 32)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="
        sticky top-0 z-40
        backdrop-blur-xl
      "
      style={{
        paddingTop: "env(safe-area-inset-top)",
        // Fondo translúcido tipo iOS según tema
        backgroundColor: isDark
          ? "rgba(0,0,0,0.85)"
          : "rgba(242,242,247,0.9)",
      }}
    >
      {/* Header chico (colapsado) */}
      <div
        className={`
          h-11
          flex items-center justify-center
          transition-opacity duration-200
          ${collapsed ? "opacity-100" : "opacity-0"}
        `}
      >
        <span
          className={`
            text-[17px] font-semibold
            ${isDark ? "text-white" : "text-[#111111]"}
          `}
        >
          {title}
        </span>
      </div>

      {/* Large Title */}
      <div className="px-4 pb-2 pt-1">
        <h1
          className={`
            text-[34px] font-bold tracking-tight
            transition-all duration-200
            ${collapsed ? "opacity-0 translate-y-2" : "opacity-100"}
            ${isDark ? "text-white" : "text-[#111111]"}
          `}
        >
          {title}
        </h1>
      </div>
    </header>
  )
}
