import IosHeader from "@/app/components/IosHeader"

interface Event {
  id: string
  title: string
  date: string
  guests: number
  vendors: number
  status: "planificado" | "en_progreso" | "finalizado"
}

export function Home() {
  const events: Event[] = [
    {
      id: "1",
      title: "Cumpleaños de Ana",
      date: "12 abril 2026",
      guests: 12,
      vendors: 3,
      status: "planificado",
    },
    {
      id: "2",
      title: "Evento corporativo",
      date: "28 mayo 2026",
      guests: 45,
      vendors: 8,
      status: "en_progreso",
    },
  ]

  const getStatusLabel = (status: Event["status"]) => {
    switch (status) {
      case "planificado":
        return "Planificado"
      case "en_progreso":
        return "En progreso"
      case "finalizado":
        return "Finalizado"
    }
  }

  const getStatusClass = (status: Event["status"]) => {
    switch (status) {
      case "planificado":
        return "bg-[#E5F0FF] text-[#2385F3]"
      case "en_progreso":
        return "bg-[#FFF7CC] text-[#A67C00]"
      case "finalizado":
        return "bg-[#E6FCEB] text-[#22863A]"
    }
  }

  return (
    <div className="bg-[#F2F2F7] min-h-screen">
      <IosHeader title="Eventos" />

      <main className="px-4 pt-3 pb-6 space-y-6">
        {/* Resumen rápido */}
        <section
          aria-label="Resumen de eventos"
          className="
            bg-white
            rounded-3xl
            px-5 py-4
            shadow-[0_8px_24px_rgba(0,0,0,0.06)]
          "
        >
          <p className="text-[13px] text-[#6B6B6F] mb-1">
            Próximos eventos
          </p>
          <h2 className="text-[24px] font-semibold text-[#3D3D3D] mb-2">
            {events.length} activos
          </h2>
          <p className="text-[13px] text-[#6B6B6F]">
            Gestioná invitados, presupuesto y proveedores desde un solo lugar.
          </p>
        </section>

        {/* Lista de eventos */}
        <section aria-label="Listado de eventos" className="space-y-3">
          <h3 className="text-[17px] font-semibold text-[#3D3D3D]">
            Próximos eventos
          </h3>

          {events.map((event) => (
            <article
              key={event.id}
              className="
                bg-white
                rounded-3xl
                px-4 py-3.5
                shadow-[0_2px_10px_rgba(0,0,0,0.04)]
              "
            >
              <div className="flex justify-between items-start mb-1.5">
                <div>
                  <h4 className="text-[17px] font-semibold text-[#3D3D3D]">
                    {event.title}
                  </h4>
                  <p className="text-[13px] text-[#6B6B6F] mt-0.5">
                    {event.date}
                  </p>
                </div>
                <span
                  className={`
                    text-[11px] px-2 py-0.5 rounded-full
                    ${getStatusClass(event.status)}
                  `}
                >
                  {getStatusLabel(event.status)}
                </span>
              </div>

              <p className="text-[13px] text-[#6B6B6F]">
                {event.guests} invitados · {event.vendors} proveedores
              </p>
            </article>
          ))}
        </section>

        {/* CTA principal */}
        <section>
          <button
            className="
              w-full
              h-14
              rounded-2xl
              bg-[#2385F3]
              text-white
              text-[17px]
              font-semibold
              active:opacity-80
              transition
              shadow-[0_6px_16px_rgba(35,133,243,0.35)]
            "
          >
            Nuevo evento
          </button>
        </section>
      </main>
    </div>
  )
}
