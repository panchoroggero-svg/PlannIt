import { useEffect, useState } from "react"

interface IosHeaderProps {
  title: string
}

export default function IosHeader({ title }: IosHeaderProps) {
  const [collapsed, setCollapsed] = useState(false)

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
        bg-transparent
      "
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* Misma “materia” que la barra inferior: fondo + blur, sin borde */}
      <div className="bg-[#F2F2F2]/60 backdrop-blur-2xl">
        {/* Header chico (colapsado) */}
        <div
          className={`
            h-11
            flex items-center justify-center
            transition-opacity duration-200
            ${collapsed ? "opacity-100" : "opacity-0"}
          `}
        >
          <span className="text-[17px] font-semibold text-[#3D3D3D]">
            {title}
          </span>
        </div>

        {/* Large Title un poco más arriba y caja más baja */}
        <div className="px-4 pb-1 pt-0">
          <h1
            className={`
              text-[34px] font-bold tracking-tight text-[#3D3D3D]
              transition-all duration-200
              ${collapsed ? "opacity-0 translate-y-2" : "opacity-100"}
            `}
          >
            {title}
          </h1>
        </div>
      </div>
    </header>
  )
}
