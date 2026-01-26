import { Outlet, Link, useLocation } from "react-router";
import { Home, DollarSign, Users, Briefcase, User } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const tabs = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/budget", icon: DollarSign, label: "Budget" },
    { path: "/guests", icon: Users, label: "Guests" },
    { path: "/providers", icon: Briefcase, label: "Providers" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Main content area with mobile-first design */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="mx-auto max-w-md">
          <Outlet />
        </div>
      </div>

      {/* Bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg">
        <div className="mx-auto max-w-md">
          <div className="flex justify-around items-center px-2 py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive =
                tab.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(tab.path);

              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{tab.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
