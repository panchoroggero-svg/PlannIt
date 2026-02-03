import { ChevronRight, Bell, Globe2, LogOut, User } from "lucide-react"
import IosHeader from "@/app/components/IosHeader"

export function Profile() {
  const user = {
    name: "Francisco Roggero",
    email: "francisco@example.com",
    events: 3,
  }

  return (
    <div className="bg-[#F2F2F7] min-h-screen">
      <IosHeader title="Perfil" />

      <main className="px-4 pt-3 pb-6 space-y-6">
        {/* Card de usuario */}
        <section
          aria-label="Información de usuario"
          className="
            bg-white
            rounded-3xl
            px-5 py-4
            shadow-[0_8px_24px_rgba(0,0,0,0.06)]
          "
        >
          <div className="flex items-center gap-3">
            <div className="w-48 h-12 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EDF4FF] flex items-center justify-center text-[#2385F3]">
                <User className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[15px] font-semibold text-[#3D3D3D] truncate">
                  {user.name}
                </p>
                <p className="text-[12px] text-[#6B6B6F] truncate">
                  {user.email}
                </p>
              </div>
            </div>
            <div className="ml-auto text-right">
              <p className="text-[24px] font-semibold text-[#3D3D3D] leading-none">
                {user.events}
              </p>
              <p className="text-[12px] text-[#6B6B6F]">eventos activos</p>
            </div>
          </div>
        </section>

        {/* Secciones de configuración */}
        <section
          aria-label="Configuración"
          className="bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
        >
          <ul className="divide-y divide-[#E5E5EA]">
            <li>
              <button className="w-full flex items-center px-4 py-3.5 text-left active:bg-[#F2F2F7]">
                <div className="w-8 flex justify-center">
                  <Bell className="w-4 h-4 text-[#8E8E93]" />
                </div>
                <div className="flex-1">
                  <p className="text-[15px] text-[#3D3D3D]">Notificaciones</p>
                  <p className="text-[12px] text-[#6B6B6F]">
                    Recordatorios de pagos e invitados
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-[#C7C7CC]" />
              </button>
            </li>

            <li>
              <button className="w-full flex items-center px-4 py-3.5 text-left active:bg-[#F2F2F7]">
                <div className="w-8 flex justify-center">
                  <Globe2 className="w-4 h-4 text-[#8E8E93]" />
                </div>
                <div className="flex-1">
                  <p className="text-[15px] text-[#3D3D3D]">Idioma</p>
                  <p className="text-[12px] text-[#6B6B6F]">
                    Usar idioma del dispositivo
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-[#C7C7CC]" />
              </button>
            </li>
          </ul>
        </section>

        {/* Cerrar sesión */}
        <section>
          <button
            className="
              w-full
              h-12
              rounded-2xl
              border border-[#FF3B30]
              text-[#FF3B30]
              text-[15px]
              font-semibold
              active:bg-[#FFF5F5]
            "
          >
            Cerrar sesión
          </button>
        </section>
      </main>
    </div>
  )
}
