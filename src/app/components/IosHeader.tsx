import { useEffect, useState } from "react"

interface IosHeaderProps {
  title: string
}

export default function IosHeader({ title }: IosHeaderProps) {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Ajustá el 40 si querés que colapse antes/después
      setCollapsed(window.scrollY > 40)
    }

    onScroll() // por si ya estás scrolleado al montar
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40">
      {/* Una sola lámina: incluye status bar + header */}
      <div
        className="bg-[#F2F2F7]/40 backdrop-blur-2xl"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        {/* Barra compacta (solo visible cuando está colapsado) */}
        <div
          className={`
            h-11
            flex items-center justify-center
            transition-opacity duration-200
            ${collapsed ? "opacity-100" : "opacity-0"}
          `}
        >
          <span className="text-[17px] font-semibold text-[#111111]">
            {title}
          </span>
        </div>

        {/* Área de título grande: realmente cambia de altura */}
        <div
          className={`
            overflow-hidden
            px-4
            transition-all duration-200
            ${collapsed ? "max-h-0 py-0" : "max-h-[64px] pt-2 pb-4"}
          `}
        >
          <h1 className="text-[34px] font-bold tracking-tight text-[#111111]">
            {title}
          </h1>
        </div>
      </div>
    </header>
  )
}
