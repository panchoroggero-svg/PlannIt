import { Outlet, NavLink } from "react-router-dom"
import {
  Home,
  Wallet,
  Users,
  Store,
  User,
} from "lucide-react"
import type { ReactNode } from "react"

export function Layout() {
  return (
    <div className="min-h-screen bg-[#F2F2F7]">
      {/* CONTENIDO */}
      <div className="pb-[96px]">
        <Outlet />
      </div>

      {/* TAB BAR iOS STYLE */}
      <nav
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          h-[64px]
          py-2
          flex
          justify-around
          items-center
          border-t
          border-[#E5E5EA]
          bg-white/70
          backdrop-blur-xl
        "
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Tab to="/" icon={<Home size={22} />} label="Eventos" />
        <Tab to="/budget" icon={<Wallet size={22} />} label="Presupuesto" />
        <Tab to="/guests" icon={<Users size={22} />} label="Invitados" />
        <Tab to="/providers" icon={<Store size={22} />} label="Proveedores" />
        <Tab to="/profile" icon={<User size={22} />} label="Perfil" />
      </nav>
    </div>
  )
}

function Tab({
  to,
  icon,
  label,
}: {
  to: string
  icon: ReactNode
  label: string
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex flex-col items-center justify-center gap-1
        text-[11px]
        transition
        ${isActive ? "text-[#007AFF]" : "text-[#8E8E93]"}
        `
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  )
}
