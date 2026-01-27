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
    <header className="sticky top-0 z-40 bg-[#F2F2F7]/80 backdrop-blur-xl">
      {/* Header chico (colapsado) */}
      <div
        className={`
          h-12
          flex items-center justify-center
          transition-opacity duration-200
          ${collapsed ? "opacity-100" : "opacity-0"}
        `}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <span className="text-[17px] font-semibold">{title}</span>
      </div>

      {/* Large Title */}
      <div className="px-4 pb-2 pt-2">
        <h1
          className={`
            text-[34px] font-bold tracking-tight
            transition-all duration-200
            ${collapsed ? "opacity-0 translate-y-2" : "opacity-100"}
          `}
        >
          {title}
        </h1>
      </div>
    </header>
  )
}
