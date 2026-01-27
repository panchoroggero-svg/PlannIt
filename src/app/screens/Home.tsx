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
    <>
      <IosHeader title="Eventos" />

      <main className="px-4 py-6 space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)]"
          >
            <h2 className="text-[17px] font-semibold mb-1">{event.title}</h2>
            <p className="text-[15px] text-[#6B6B6F]">
              {event.guests} invitados · {event.vendors} proveedores
            </p>
          </div>
        ))}

        <button
          className="
            w-full
            h-14
            rounded-2xl
            bg-[#007AFF]
            text-white
            text-[17px]
            font-semibold
            active:opacity-80
            transition
          "
        >
          Nuevo evento
        </button>
      </main>
    </>
  )
}