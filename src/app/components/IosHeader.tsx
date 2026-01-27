import { useEffect, useState } from "react"

interface IosHeaderProps {
  title: string
}

export default function IosHeader({ title }: IosHeaderProps) {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setCollapsed(window.scrollY > 44)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-[#F2F2F7]/80 backdrop-blur-xl">
      {/* Header colapsado */}
      <div
        className={`
          h-[44px]
          flex items-end justify-center
          pb-1
          transition-opacity duration-200
          ${collapsed ? "opacity-100" : "opacity-0"}
        `}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <span className="text-[17px] font-semibold leading-none">
          {title}
        </span>
      </div>

      {/* Large Title */}
      <div
        className={`
          px-4
          transition-all duration-200
          ${collapsed ? "h-0 overflow-hidden opacity-0" : "h-[52px] opacity-100"}
        `}
      >
        <h1 className="text-[34px] font-bold tracking-tight leading-tight">
          {title}
        </h1>
      </div>
    </header>
  )
}
