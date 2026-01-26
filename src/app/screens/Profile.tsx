import { User, Settings, Bell, HelpCircle, LogOut, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Profile() {
  const user = {
    name: "Manuela Deleau",
    email: "manudeleau11@email.com",
    memberSince: "January 2026",
  };

  const menuItems = [
    { icon: Calendar, label: "My Events", description: "2 active events" },
    { icon: Settings, label: "Settings", description: "App preferences" },
    { icon: Bell, label: "Notifications", description: "Manage alerts" },
    { icon: HelpCircle, label: "Help & Support", description: "Get assistance" },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl mb-1">Profile</h1>
        <p className="text-sm text-muted-foreground">Your account settings</p>
      </div>

      {/* User Card */}
      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 shadow-sm border border-accent/20 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-2xl font-medium text-white">
            {user.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-medium mb-0.5">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <User className="w-3 h-3" />
          <span>Member since {user.memberSince}</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2 mb-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="w-full bg-card rounded-xl p-4 shadow-sm border border-border hover:border-accent transition-colors flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-medium mb-0.5">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.description}</div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </button>
          );
        })}
      </div>

      {/* Stats */}
      <div className="bg-card rounded-2xl p-5 shadow-sm border border-border mb-6">
        <h3 className="text-sm font-medium mb-4">Your Stats</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-medium mb-1">2</div>
            <div className="text-xs text-muted-foreground">Events</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium mb-1">187</div>
            <div className="text-xs text-muted-foreground">Guests</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium mb-1">12</div>
            <div className="text-xs text-muted-foreground">Vendors</div>
          </div>
        </div>
      </div>

      {/* Logout */}
      <Button
        variant="outline"
        className="w-full rounded-xl py-6 border-destructive text-destructive hover:bg-destructive/10"
      >
        <LogOut className="w-5 h-5 mr-2" />
        Log Out
      </Button>

      {/* App Version */}
      <div className="text-center text-xs text-muted-foreground mt-6">
        Nido v1.0.0
      </div>
    </div>
  );
}
