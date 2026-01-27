import {
  UserPlus,
  CheckCircle2,
  XCircle,
  Clock,
  Search,
} from "lucide-react"
import { Input } from "@/app/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs"

export function Guests() {
  const stats = {
    total: 120,
    confirmed: 67,
    declined: 8,
    pending: 45,
  }

  const guests = [
    { id: 1, name: "Sarah Johnson", email: "sarah@email.com", status: "confirmed", party: 2, category: "Family" },
    { id: 2, name: "Michael Chen", email: "michael@email.com", status: "confirmed", party: 3, category: "Friends" },
    { id: 3, name: "Emily Davis", email: "emily@email.com", status: "pending", party: 2, category: "Friends" },
    { id: 4, name: "Robert Wilson", email: "robert@email.com", status: "confirmed", party: 1, category: "Work" },
    { id: 5, name: "Jessica Martinez", email: "jessica@email.com", status: "declined", party: 2, category: "Friends" },
    { id: 6, name: "David Anderson", email: "david@email.com", status: "pending", party: 4, category: "Family" },
    { id: 7, name: "Lisa Thompson", email: "lisa@email.com", status: "confirmed", party: 2, category: "Friends" },
    { id: 8, name: "James Garcia", email: "james@email.com", status: "pending", party: 1, category: "Work" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle2 className="w-4 h-4 text-green-600" />
      case "declined":
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-[#6B6B6F]" />
    }
  }

  const getStatusPill = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-50 text-green-700"
      case "declined":
        return "bg-red-50 text-red-700"
      default:
        return "bg-[#F2F2F7] text-[#6B6B6F]"
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
            className="bg-white rounded-2xl p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)]"
          >
            <div className="flex gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-[#E5E5EA] flex items-center justify-center text-[15px] font-medium flex-shrink-0">
                {guest.name.charAt(0)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[15px] font-medium truncate">
                    {guest.name}
                  </span>
                  {getStatusIcon(guest.status)}
                </div>

                <div className="text-[13px] text-[#6B6B6F] mb-2 truncate">
                  {guest.email}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`text-[12px] px-2 py-0.5 rounded-full ${getStatusPill(
                      guest.status
                    )}`}
                  >
                    {guest.status}
                  </span>

                  <span className="text-[12px] text-[#6B6B6F]">
                    Party of {guest.party}
                  </span>

                  <span className="text-[12px] px-2 py-0.5 rounded-full bg-[#F2F2F7] text-[#6B6B6F]">
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
    <div className="min-h-screen px-4 pt-6 pb-10 bg-[#F2F2F7]">
      {/* iOS Header */}
      <header className="mb-6">
        <h1 className="text-[34px] leading-tight font-semibold tracking-tight">
          Guests
        </h1>
        <p className="text-[15px] text-[#6B6B6F] mt-1">
          Manage your guest list
        </p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        <StatCard label="Total" value={stats.total} />
        <StatCard label="Yes" value={stats.confirmed} accent="green" />
        <StatCard label="No" value={stats.declined} accent="red" />
        <StatCard label="Pending" value={stats.pending} />
      </div>

      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6F]" />
        <Input
          placeholder="Search guests"
          className="pl-10 h-11 rounded-xl bg-white border-none shadow-sm"
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all">
        <TabsList className="w-full bg-[#E5E5EA] rounded-xl p-1 mb-5">
          <TabsTrigger value="all" className="flex-1 rounded-lg">
            All
          </TabsTrigger>
          <TabsTrigger value="confirmed" className="flex-1 rounded-lg">
            Confirmed
          </TabsTrigger>
          <TabsTrigger value="pending" className="flex-1 rounded-lg">
            Pending
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
    </div>
  )
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string
  value: number
  accent?: "green" | "red"
}) {
  const accentMap = {
    green: "text-green-700",
    red: "text-red-700",
  }

  return (
    <div className="bg-white rounded-2xl p-3 text-center shadow-sm">
      <div
        className={`text-[20px] font-semibold ${
          accent ? accentMap[accent] : ""
        }`}
      >
        {value}
      </div>
      <div className="text-[12px] text-[#6B6B6F]">
        {label}
      </div>
    </div>
  )
}
