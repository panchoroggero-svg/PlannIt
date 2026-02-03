import { CheckCircle2, XCircle, Clock, Search } from "lucide-react"
import { Input } from "@/app/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs"
import IosHeader from "@/app/components/IosHeader"

export function Guests() {
  const stats = {
    total: 120,
    confirmed: 67,
    declined: 8,
    pending: 45,
  }

  const guests = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@email.com",
      status: "confirmed",
      party: 2,
      category: "Familia",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@email.com",
      status: "confirmed",
      party: 3,
      category: "Amigos",
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily@email.com",
      status: "pending",
      party: 2,
      category: "Amigos",
    },
    {
      id: 4,
      name: "Robert Wilson",
      email: "robert@email.com",
      status: "confirmed",
      party: 1,
      category: "Trabajo",
    },
    {
      id: 5,
      name: "Jessica Martinez",
      email: "jessica@email.com",
      status: "declined",
      party: 2,
      category: "Amigos",
    },
    {
      id: 6,
      name: "David Anderson",
      email: "david@email.com",
      status: "pending",
      party: 4,
      category: "Familia",
    },
    {
      id: 7,
      name: "Lisa Thompson",
      email: "lisa@email.com",
      status: "confirmed",
      party: 2,
      category: "Amigos",
    },
    {
      id: 8,
      name: "James Garcia",
      email: "james@email.com",
      status: "pending",
      party: 1,
      category: "Trabajo",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle2 className="w-5 h-5 text-[#34C759]" />
      case "declined":
        return <XCircle className="w-5 h-5 text-[#FF3B30]" />
      default:
        return <Clock className="w-5 h-5 text-[#8E8E93]" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-[#E6FCEB] text-[#22863A] border-[#BBF7C0]"
      case "declined":
        return "bg-[#FFECEC] text-[#C53030] border-[#FED7D7]"
      default:
        return "bg-[#F2F2F7] text-[#6B6B6F] border-[#E5E5EA]"
    }
  }

  const GuestList = ({ filterStatus }: { filterStatus?: string }) => {
    const filteredGuests = filterStatus
      ? guests.filter((g) => g.status === filterStatus)
      : guests

    return (
      <div className="space-y-3">
        {filteredGuests.map((guest) => (
          <div
            key={guest.id}
            className="
              bg-white
              rounded-3xl
              px-4 py-3
              shadow-[0_2px_10px_rgba(0,0,0,0.04)]
            "
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EDF4FF] flex items-center justify-center flex-shrink-0 text-sm font-medium text-[#2385F3]">
                {guest.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[15px] font-semibold text-[#3D3D3D]">
                    {guest.name}
                  </span>
                  {getStatusIcon(guest.status)}
                </div>
                <div className="text-[12px] text-[#6B6B6F] mb-2">
                  {guest.email}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`
                      text-[11px] px-2 py-0.5 rounded-full border
                      ${getStatusBadge(guest.status)}
                    `}
                  >
                    {guest.status === "confirmed"
                      ? "Confirmado"
                      : guest.status === "pending"
                      ? "Pendiente"
                      : "No asiste"}
                  </span>
                  <span className="text-[11px] text-[#6B6B6F]">
                    Grupo de {guest.party}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#F2F2F7] text-[#6B6B6F]">
                    {guest.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-[#F2F2F7] min-h-screen">
      {/* Header iOS */}
      <IosHeader title="Invitados" />

      <main className="px-4 pt-3 pb-6 space-y-6">
        {/* Tarjetas de resumen */}
        <section
          aria-label="Resumen de invitados"
          className="grid grid-cols-4 gap-2"
        >
          <div className="bg-white rounded-2xl p-3 text-center shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
            <div className="text-[18px] font-semibold text-[#3D3D3D]">
              {stats.total}
            </div>
            <div className="text-[11px] text-[#6B6B6F]">Total</div>
          </div>
          <div className="bg-[#E6FCEB] rounded-2xl p-3 text-center">
            <div className="text-[18px] font-semibold text-[#22863A]">
              {stats.confirmed}
            </div>
            <div className="text-[11px] text-[#22863A]">Sí</div>
          </div>
          <div className="bg-[#FFECEC] rounded-2xl p-3 text-center">
            <div className="text-[18px] font-semibold text-[#C53030]">
              {stats.declined}
            </div>
            <div className="text-[11px] text-[#C53030]">No</div>
          </div>
          <div className="bg-white rounded-2xl p-3 text-center shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
            <div className="text-[18px] font-semibold text-[#3D3D3D]">
              {stats.pending}
            </div>
            <div className="text-[11px] text-[#6B6B6F]">Pendiente</div>
          </div>
        </section>

        {/* Buscador */}
        <section className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6F]" />
          <Input
            placeholder="Buscar invitado, email o grupo"
            className="
              pl-9
              rounded-2xl
              bg-white
              border-none
              shadow-[0_2px_10px_rgba(0,0,0,0.04)]
              text-[14px]
            "
          />
        </section>

        {/* Tabs + lista */}
        <section>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList className="w-full bg-[#E5E5EA]/60 rounded-2xl p-1">
              <TabsTrigger
                value="all"
                className="flex-1 rounded-xl text-[13px]"
              >
                Todos
              </TabsTrigger>
              <TabsTrigger
                value="confirmed"
                className="flex-1 rounded-xl text-[13px]"
              >
                Confirmados
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="flex-1 rounded-xl text-[13px]"
              >
                Pendientes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <GuestList />
            </TabsContent>
            <TabsContent value="confirmed">
              <GuestList filterStatus="confirmed" />
            </TabsContent>
            <TabsContent value="pending">
              <GuestList filterStatus="pending" />
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  )
}
