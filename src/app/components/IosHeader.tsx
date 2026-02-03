import { useEffect, useState } from "react"

interface IosHeaderProps {
  title: string
}

export default function IosHeader({ title }: IosHeaderProps) {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Umbral de colapso suave
      setCollapsed(window.scrollY > 40)
    }

    onScroll() // por si entrás ya scrolleado
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40">
      {/* Una sola lámina: status bar + header */}
      <div
        className="
          bg-[#F2F2F2]/40  /* mismo base que la barra de sistema */
          backdrop-blur-2xl
        "
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        {/* Barra compacta (colapsado) */}
        <div
          className={`
            h-11
            flex justify-center items-end
            pb-1              /* empuja el texto un pelín hacia arriba visualmente */
            transition-opacity duration-200
            ${collapsed ? "opacity-100" : "opacity-0"}
          `}
        >
          <span className="text-[17px] font-semibold text-[#111111]">
            {title}
          </span>
        </div>

        {/* Área de título grande: cambia altura de verdad */}
        <div
          className={`
            overflow-hidden
            px-4
            transition-all duration-200
            ${collapsed ? "max-h-0 py-0" : "max-h-[64px] pt-1 pb-3"}
          `}
        >
          <h1
            className="
              text-[34px] font-bold tracking-tight text-[#111111]
              leading-tight
            "
          >
            {title}
          </h1>
        </div>
      </div>
    </header>
  )
}
