import IosHeader from "@/app/components/IosHeader"

interface Event {
  id: string
  title: string
  guests: number
  vendors: number
}

export function Home() {
  const events: Event[] = [
    {
      id: "1",
      title: "Cumpleaños de Ana",
      guests: 12,
      vendors: 3,
    },
    {
      id: "2",
      title: "Evento corporativo",
      guests: 45,
      vendors: 8,
    },
  ]

  return (
    <div className="min-h-screen bg-[#F2F2F7]">
      <IosHeader title="Eventos" />

      <main className="px-4 pt-4 pb-28 space-y-4">
        <h2 className="text-[13px] font-medium text-[#6B6B6F] px-1">
          PRÓXIMOS EVENTOS
        </h2>

        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08)] active:scale-[0.98] transition"
          >
            <h3 className="text-[17px] font-semibold mb-0.5">
              {event.title}
            </h3>

            <p className="text-[15px] text-[#6B6B6F]">
              {event.guests} invitados · {event.vendors} proveedores
            </p>
          </div>
        ))}
      </main>

      <div className="fixed bottom-6 left-4 right-4">
        <button
          className="w-full h-14 rounded-full bg-[#007AFF] text-white text-[17px] font-semibold shadow-[0_10px_30px_rgba(0,122,255,0.35)] active:scale-[0.97] transition"
        >
          Nuevo evento
        </button>
      </div>
    </div>
  )
}