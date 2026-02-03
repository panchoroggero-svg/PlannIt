import { Phone, Mail, MapPin, Search } from "lucide-react"
import { Input } from "@/app/components/ui/input"
import IosHeader from "@/app/components/IosHeader"

interface Provider {
  id: number
  name: string
  category: string
  priceRange: string
  location: string
  rating: number
  status: "confirmado" | "pendiente"
}

export function Providers() {
  const providers: Provider[] = [
    {
      id: 1,
      name: "Espacio Río",
      category: "Salón",
      priceRange: "USD 8.000 – 12.000",
      location: "Palermo, CABA",
      rating: 4.8,
      status: "confirmado",
    },
    {
      id: 2,
      name: "Catering Delicias",
      category: "Catering",
      priceRange: "USD 40 – 55 por invitado",
      location: "Belgrano, CABA",
      rating: 4.6,
      status: "pendiente",
    },
    {
      id: 3,
      name: "Luz & Sombra Studio",
      category: "Fotografía",
      priceRange: "USD 1.500 – 2.000",
      location: "Recoleta, CABA",
      rating: 4.9,
      status: "confirmado",
    },
  ]

  const getStatusLabel = (status: Provider["status"]) =>
    status === "confirmado" ? "Confirmado" : "En negociación"

  const getStatusClass = (status: Provider["status"]) =>
    status === "confirmado"
      ? "bg-[#E6FCEB] text-[#22863A] border-[#BBF7C0]"
      : "bg-[#FFF7CC] text-[#A67C00] border-[#FEEBC8]"

  return (
    <div className="bg-[#F2F2F7] min-h-screen">
      <IosHeader title="Proveedores" />

      <main className="px-4 pt-3 pb-6 space-y-6">
        {/* 🔍 Buscador estilo iOS */}
        <section className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E8E93]" />
          <Input
            placeholder="Buscar salón, catering o proveedor…"
            className="
              pl-10
              h-11
              rounded-full
              bg-[#E5E5EA]
              border-none
              shadow-none
              text-[16px]
              text-[#3D3D3D]
              placeholder:text-[#8E8E93]
            "
          />
        </section>

        {/* Lista de proveedores */}
        <section aria-label="Proveedores del evento" className="space-y-3">
          <h2 className="text-[17px] font-semibold text-[#3D3D3D]">
            Proveedores del evento
          </h2>

          {providers.map((provider) => (
            <article
              key={provider.id}
              className="
                bg-white
                rounded-3xl
                px-4 py-3.5
                shadow-[0_2px_10px_rgba(0,0,0,0.04)]
              "
            >
              <div className="flex justify-between items-start mb-1.5">
                <div>
                  <h3 className="text-[15px] font-semibold text-[#3D3D3D]">
                    {provider.name}
                  </h3>
                  <p className="text-[12px] text-[#6B6B6F]">
                    {provider.category}
                  </p>
                </div>
                <span
                  className={`
                    text-[11px] px-2 py-0.5 rounded-full border
                    ${getStatusClass(provider.status)}
                  `}
                >
                  {getStatusLabel(provider.status)}
                </span>
              </div>

              <p className="text-[13px] text-[#3D3D3D] mb-1.5">
                {provider.priceRange}
              </p>

              <div className="flex items-center gap-2 text-[12px] text-[#6B6B6F] mb-1">
                <MapPin className="w-3 h-3" />
                <span>{provider.location}</span>
                <span>•</span>
                <span>{provider.rating.toFixed(1)}★</span>
              </div>

              <div className="flex gap-3 mt-2 text-[12px] text-[#2385F3]">
                <button className="flex items-center gap-1 active:opacity-70">
                  <Phone className="w-3 h-3" />
                  <span>Llamar</span>
                </button>
                <button className="flex items-center gap-1 active:opacity-70">
                  <Mail className="w-3 h-3" />
                  <span>Enviar mensaje</span>
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
