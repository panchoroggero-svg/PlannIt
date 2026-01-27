import { Outlet, NavLink } from "react-router-dom"
import { Home, Wallet, Users, Store, User } from "lucide-react"
import type { ReactNode } from "react"

export function Layout() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* CONTENIDO */}
      <div className="pb-[88px]">
        <Outlet />
      </div>

      {/* TAB BAR estilo iOS + identidad PlanIt */}
      <nav
        className="
          fixed bottom-0 left-0 right-0
          z-50
          bg-[#F2F2F2]
        "
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* capa de vidrio + borde hairline */}
        <div className="bg-[#F2F2F2]/70 backdrop-blur-xl border-t border-[rgba(60,60,67,0.15)]">
          <div
            className="
              h-[88px]
              flex justify-around
              pt-2
            "
          >
            <Tab to="/" icon={<Home size={22} />} label="Eventos" />
            <Tab to="/budget" icon={<Wallet size={22} />} label="Presupuesto" />
            <Tab to="/guests" icon={<Users size={22} />} label="Invitados" />
            <Tab to="/providers" icon={<Store size={22} />} label="Proveedores" />
            <Tab to="/profile" icon={<User size={22} />} label="Perfil" />
          </div>
        </div>
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
        flex flex-col items-center gap-0.5
        text-[10px] font-medium
        ${
          isActive
            ? "text-[#2385F3]"   /* azul PlanIt */
            : "text-[#8E8E93]"   /* gris iOS para inactivo */
        }
        `
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  )
}

