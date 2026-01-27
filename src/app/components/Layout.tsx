import { Outlet, NavLink } from "react-router-dom"
import {

Home,
Wallet,
Users,
Store,
User
} from "lucide-react"

export function Layout() {
return (
  <div className="min-h-screen flex flex-col bg-[#F2F2F7]">
    {/* CONTENIDO */}
    <div className="flex-1 overflow-y-auto">
      <Outlet />
    </div>

    {/* TAB BAR iOS */}
    <nav
      className="
        sticky bottom-0
        bg-white
        border-t border-[#E5E5EA]
        h-20
        flex justify-around items-center
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
icon: React.ReactNode
label: string
}) {
return (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `
      flex flex-col items-center justify-center gap-1
      text-xs
      ${isActive ? "text-[#007AFF]" : "text-[#8E8E93]"}
      `
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
)
}