import { UserPlus, CheckCircle2, XCircle, Clock, Search } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

export function Guests() {
  const stats = {
    total: 120,
    confirmed: 67,
    declined: 8,
    pending: 45,
  };

  const guests = [
    { id: 1, name: "Sarah Johnson", email: "sarah@email.com", status: "confirmed", party: 2, category: "Family" },
    { id: 2, name: "Michael Chen", email: "michael@email.com", status: "confirmed", party: 3, category: "Friends" },
    { id: 3, name: "Emily Davis", email: "emily@email.com", status: "pending", party: 2, category: "Friends" },
    { id: 4, name: "Robert Wilson", email: "robert@email.com", status: "confirmed", party: 1, category: "Work" },
    { id: 5, name: "Jessica Martinez", email: "jessica@email.com", status: "declined", party: 2, category: "Friends" },
    { id: 6, name: "David Anderson", email: "david@email.com", status: "pending", party: 4, category: "Family" },
    { id: 7, name: "Lisa Thompson", email: "lisa@email.com", status: "confirmed", party: 2, category: "Friends" },
    { id: 8, name: "James Garcia", email: "james@email.com", status: "pending", party: 1, category: "Work" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case "declined":
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-50 text-green-700 border-green-200";
      case "declined":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-secondary text-muted-foreground border-border";
    }
  };

  const GuestList = ({ filterStatus }: { filterStatus?: string }) => {
    const filteredGuests = filterStatus
      ? guests.filter((g) => g.status === filterStatus)
      : guests;

    return (
      <div className="space-y-3">
        {filteredGuests.map((guest) => (
          <div
            key={guest.id}
            className="bg-card rounded-xl p-4 shadow-sm border border-border"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-sm font-medium">
                {guest.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">{guest.name}</span>
                  {getStatusIcon(guest.status)}
                </div>
                <div className="text-xs text-muted-foreground mb-2">{guest.email}</div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${getStatusColor(guest.status)}`}>
                    {guest.status}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Party of {guest.party}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                    {guest.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl mb-1">Guests</h1>
        <p className="text-sm text-muted-foreground">Manage your guest list</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        <div className="bg-card rounded-xl p-3 shadow-sm border border-border text-center">
          <div className="text-xl font-medium mb-0.5">{stats.total}</div>
          <div className="text-xs text-muted-foreground">Total</div>
        </div>
        <div className="bg-green-50 rounded-xl p-3 border border-green-200 text-center">
          <div className="text-xl font-medium mb-0.5 text-green-700">{stats.confirmed}</div>
          <div className="text-xs text-green-600">Yes</div>
        </div>
        <div className="bg-red-50 rounded-xl p-3 border border-red-200 text-center">
          <div className="text-xl font-medium mb-0.5 text-red-700">{stats.declined}</div>
          <div className="text-xs text-red-600">No</div>
        </div>
        <div className="bg-secondary rounded-xl p-3 border border-border text-center">
          <div className="text-xl font-medium mb-0.5">{stats.pending}</div>
          <div className="text-xs text-muted-foreground">Pending</div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search guests..."
          className="pl-10 bg-card rounded-xl border-border"
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="w-full bg-muted/50 rounded-xl p-1 mb-6">
          <TabsTrigger value="all" className="flex-1 rounded-lg">All</TabsTrigger>
          <TabsTrigger value="confirmed" className="flex-1 rounded-lg">Confirmed</TabsTrigger>
          <TabsTrigger value="pending" className="flex-1 rounded-lg">Pending</TabsTrigger>
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
  );
}
