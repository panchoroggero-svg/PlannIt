import { Outlet, NavLink } from "react-router-dom"
import { Home, Wallet, Users, Store, User } from "lucide-react"

export function Layout() {
  return (
    <div className="min-h-screen bg-[#F2F2F7]">
      {/* CONTENIDO */}
      <div className="pb-[88px]">
        <Outlet />
      </div>

      {/* TAB BAR iOS */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* vidrio iOS real */}
        <div className="bg-[#F2F2F7]/40 backdrop-blur-2xl">
          <div className="h-[88px] flex justify-around pt-2">
            <Tab to="/" label="Eventos" icon={Home} />
            <Tab to="/budget" label="Presupuesto" icon={Wallet} />
            <Tab to="/guests" label="Invitados" icon={Users} />
            <Tab to="/providers" label="Proveedores" icon={Store} />
            <Tab to="/profile" label="Perfil" icon={User} />
          </div>
        </div>
      </nav>
    </div>
  )
}

function Tab({
  to,
  label,
  icon: Icon,
}: {
  to: string
  label: string
  icon: React.ElementType
}) {
  return (
    <NavLink to={to} className="flex flex-col items-center gap-0.5">
      {({ isActive }) => (
        <>
          <Icon
            size={22}
            className={isActive ? "text-[#007AFF]" : "text-[#8E8E93]"}
          />
          <span
            className={`text-[10px] font-medium ${
              isActive ? "text-[#007AFF]" : "text-[#8E8E93]"
            }`}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  )
}

