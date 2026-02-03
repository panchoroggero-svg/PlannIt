import { useEffect, useState } from "react"
import {
  ChevronRight,
  Bell,
  Globe2,
  LogOut,
  User,
  Moon,
  SunMedium,
} from "lucide-react"
import IosHeader from "@/app/components/IosHeader"

type ThemeMode = "light" | "dark"

const THEME_KEY = "nido-theme"

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "light"
  const stored = window.localStorage.getItem(THEME_KEY)
  if (stored === "dark" || stored === "light") return stored
  return "light"
}

export function Profile() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)

  // Aplicar el tema al cargar / cambiar
  useEffect(() => {
    if (typeof window === "undefined") return

    window.localStorage.setItem(THEME_KEY, theme)

    // Fondo general del documento (suaviza el cambio al navegar)
    const bg = theme === "dark" ? "#000000" : "#F2F2F7"
    document.body.style.backgroundColor = bg
    document.documentElement.style.backgroundColor = bg
  }, [theme])

  const user = {
    name: "Francisco Roggero",
    email: "francisco@example.com",
    events: 3,
  }

  const isDark = theme === "dark"

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-black text-white" : "bg-[#F2F2F7] text-[#3D3D3D]"
      }`}
    >
      <IosHeader title="Perfil" />

      <main className="px-4 pt-3 pb-6 space-y-6">
        {/* Card de usuario */}
        <section
          aria-label="Información de usuario"
          className={
            isDark
              ? "bg-[#1C1C1E] rounded-3xl px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.8)]"
              : "bg-white rounded-3xl px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
          }
        >
          <div className="flex items-center gap-3">
            <div className="w-48 h-12 flex items-center gap-3">
              <div
                className={
                  isDark
                    ? "w-10 h-10 rounded-full bg-[#2C2C2E] flex items-center justify-center text-[#0A84FF]"
                    : "w-10 h-10 rounded-full bg-[#EDF4FF] flex items-center justify-center text-[#2385F3]"
                }
              >
                <User className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[15px] font-semibold truncate">
                  {user.name}
                </p>
                <p
                  className={`text-[12px] truncate ${
                    isDark ? "text-[#A1A1A6]" : "text-[#6B6B6F]"
                  }`}
                >
                  {user.email}
                </p>
              </div>
            </div>
            <div className="ml-auto text-right">
              <p className="text-[24px] font-semibold leading-none">
                {user.events}
              </p>
              <p
                className={`text-[12px] ${
                  isDark ? "text-[#A1A1A6]" : "text-[#6B6B6F]"
                }`}
              >
                eventos activos
              </p>
            </div>
          </div>
        </section>

        {/* Secciones de configuración */}
        <section
          aria-label="Configuración"
          className={
            isDark
              ? "bg-[#1C1C1E] rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
              : "bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
          }
        >
          <ul
            className={
              isDark
                ? "divide-y divide-[#2C2C2E]"
                : "divide-y divide-[#E5E5EA]"
            }
          >
            {/* Notificaciones */}
            <li>
              <button className="w-full flex items-center px-4 py-3.5 text-left active:bg-white/5">
                <div className="w-8 flex justify-center">
                  <Bell
                    className={`w-4 h-4 ${
                      isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[15px]">Notificaciones</p>
                  <p
                    className={`text-[12px] ${
                      isDark ? "text-[#A1A1A6]" : "text-[#6B6B6F]"
                    }`}
                  >
                    Recordatorios de pagos e invitados
                  </p>
                </div>
                <ChevronRight
                  className={`w-4 h-4 ${
                    isDark ? "text-[#505055]" : "text-[#C7C7CC]"
                  }`}
                />
              </button>
            </li>

            {/* Idioma */}
            <li>
              <button className="w-full flex items-center px-4 py-3.5 text-left active:bg-white/5">
                <div className="w-8 flex justify-center">
                  <Globe2
                    className={`w-4 h-4 ${
                      isDark ? "text-[#8E8E93]" : "text-[#8E8E93]"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[15px]">Idioma</p>
                  <p
                    className={`text-[12px] ${
                      isDark ? "text-[#A1A1A6]" : "text-[#6B6B6F]"
                    }`}
                  >
                    Usar idioma del dispositivo
                  </p>
                </div>
                <ChevronRight
                  className={`w-4 h-4 ${
                    isDark ? "text-[#505055]" : "text-[#C7C7CC]"
                  }`}
                />
              </button>
            </li>

            {/* Apariencia (Dark Mode) */}
            <li>
              <div className="w-full flex items-center px-4 py-3.5">
                <div className="w-8 flex justify-center">
                  {isDark ? (
                    <Moon className="w-4 h-4 text-[#0A84FF]" />
                  ) : (
                    <SunMedium className="w-4 h-4 text-[#F4A940]" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-[15px]">Apariencia</p>
                  <p
                    className={`text-[12px] ${
                      isDark ? "text-[#A1A1A6]" : "text-[#6B6B6F]"
                    }`}
                  >
                    Elegí entre modo claro u oscuro
                  </p>
                </div>

                {/* Selector tipo iOS segmentado */}
                <div
                  className={
                    isDark
                      ? "flex rounded-full bg-[#2C2C2E] p-0.5"
                      : "flex rounded-full bg-[#E5E5EA] p-0.5"
                  }
                >
                  <button
                    onClick={() => setTheme("light")}
                    className={`
                      px-2.5 h-7 rounded-full text-[12px] min-w-[54px]
                      ${
                        !isDark
                          ? "bg-white text-[#3D3D3D]"
                          : "text-[#A1A1A6]"
                      }
                    `}
                  >
                    Claro
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className={`
                      px-2.5 h-7 rounded-full text-[12px] min-w-[54px]
                      ${
                        isDark
                          ? "bg-white/10 text-white"
                          : "text-[#3D3D3D]"
                      }
                    `}
                  >
                    Oscuro
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* Cerrar sesión */}
        <section>
          <button
            className={`
              w-full h-12 rounded-2xl text-[15px] font-semibold
              border border-[#FF3B30]
              ${
                isDark
                  ? "text-[#FF453A] active:bg-[#3A1A1A]"
                  : "text-[#FF3B30] active:bg-[#FFF5F5]"
              }
            `}
          >
            Cerrar sesión
          </button>
        </section>
      </main>
    </div>
  )
}
