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
        bg-[#F2F2F7]/70
        backdrop-blur-xl
      "
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* CAJA REAL DEL HEADER (iOS REAL) */}
      <div className="h-[96px] px-4 flex flex-col">
        
        {/* SMALL TITLE (navigation bar) */}
        <div className="h-11 flex items-center justify-center relative">
          <span
            className={`
              text-[17px] font-semibold
              transition-opacity duration-200
              ${collapsed ? "opacity-100" : "opacity-0"}
            `}
          >
            {title}
          </span>
        </div>

        {/* LARGE TITLE */}
        <div className="flex-1 flex items-end pb-[6px]">
          <h1
            className={`
              text-[34px] font-bold tracking-tight leading-none
              transition-all duration-200
              ${collapsed
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"}
            `}
          >
            {title}
          </h1>
        </div>
      </div>
    </header>
  )
}
