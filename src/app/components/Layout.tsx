import { Outlet, NavLink } from "react-router-dom"
import { Home, Wallet, Users, Store, User } from "lucide-react"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F2F7]">
      {/* CONTENIDO */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* TAB BAR estilo iOS */}
      <nav
        className="
          sticky bottom-0 z-50
          h-[84px]
          flex justify-around items-center
          border-t border-white/20
          bg-white/70
          backdrop-blur-xl
        "
        style={{
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
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
        text-[10px] font-medium
        transition-all duration-150
        active:scale-95
        ${
          isActive
            ? "text-[#007AFF] translate-y-[-1px]"
            : "text-[#8E8E93]"
        }
        `
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  )
}
