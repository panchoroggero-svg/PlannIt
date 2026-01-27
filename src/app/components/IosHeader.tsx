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

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="
        sticky top-0 z-40
        bg-[#F2F2F7]/80 backdrop-blur-xl
        border-b border-black/5
      "
    >
      {/* CONTENEDOR CON ALTURA FIJA (clave para evitar saltos) */}
      <div
        className="relative px-4"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          height: "96px", // altura total tipo iOS
        }}
      >
        {/* Header chico */}
        <div
          className={`
            absolute top-[env(safe-area-inset-top)]
            left-0 right-0
            h-12
            flex items-center justify-center
            transition-opacity duration-200
            ${collapsed ? "opacity-100" : "opacity-0"}
          `}
        >
          <span className="text-[17px] font-semibold">{title}</span>
        </div>

        {/* Large Title */}
        <div className="absolute bottom-2 left-4 right-4">
          <h1
            className={`
              text-[34px] font-bold tracking-tight
              transition-all duration-200
              ${collapsed ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}
            `}
          >
            {title}
          </h1>
        </div>
      </div>
    </header>
  )
}
