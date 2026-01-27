import { useEffect, useState } from "react"

interface IosHeaderProps {
  title: string
}

export default function IosHeader({ title }: IosHeaderProps) {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setCollapsed(window.scrollY > 28)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="
        sticky top-0 z-40
        bg-[#F2F2F7]/80
        backdrop-blur-xl
      "
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* CONTENEDOR DE ALTURA FIJA (CLAVE iOS) */}
      <div className="relative h-[96px] px-4">
        {/* Small title (collapsed) */}
        <div
          className={`
            absolute top-0 left-0 right-0
            h-11
            flex items-center justify-center
            transition-opacity duration-200
            ${collapsed ? "opacity-100" : "opacity-0"}
          `}
        >
          <span className="text-[17px] font-semibold">{title}</span>
        </div>

        {/* Large title */}
        <div
          className={`
            absolute bottom-0 left-0 right-0
            transition-all duration-200
            ${collapsed
              ? "opacity-0 translate-y-2 scale-[0.98]"
              : "opacity-100 translate-y-0 scale-100"}
          `}
        >
          <h1 className="text-[34px] font-bold tracking-tight leading-[1.1]">
            {title}
          </h1>
        </div>
      </div>
    </header>
  )
}
