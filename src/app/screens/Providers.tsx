import { MapPin, Phone, Mail, Star, Camera, Music, UtensilsCrossed, Building } from "lucide-react";

export function Providers() {
  const categories = [
    { id: 1, name: "Venues", icon: Building, color: "bg-chart-1" },
    { id: 2, name: "Catering", icon: UtensilsCrossed, color: "bg-chart-2" },
    { id: 3, name: "Photography", icon: Camera, color: "bg-chart-3" },
    { id: 4, name: "Music", icon: Music, color: "bg-chart-4" },
  ];

  const providers = [
    {
      id: 1,
      name: "Grand Rose Venue",
      category: "Venues",
      rating: 4.9,
      reviews: 127,
      location: "Downtown",
      phone: "(555) 123-4567",
      email: "info@grandrose.com",
      status: "booked",
      price: "$12,000",
    },
    {
      id: 2,
      name: "Artisan Catering Co.",
      category: "Catering",
      rating: 4.8,
      reviews: 89,
      location: "City Center",
      phone: "(555) 234-5678",
      email: "hello@artisancatering.com",
      status: "contacted",
      price: "$8,000",
    },
    {
      id: 3,
      name: "Moment Photography",
      category: "Photography",
      rating: 5.0,
      reviews: 156,
      location: "Studio District",
      phone: "(555) 345-6789",
      email: "book@momentphoto.com",
      status: "shortlist",
      price: "$3,500",
    },
    {
      id: 4,
      name: "Harmony DJ Services",
      category: "Music",
      rating: 4.7,
      reviews: 94,
      location: "Various",
      phone: "(555) 456-7890",
      email: "events@harmonydj.com",
      status: "shortlist",
      price: "$2,000",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "booked":
        return "bg-green-50 text-green-700 border-green-200";
      case "contacted":
        return "bg-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-secondary text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl mb-1">Providers</h1>
        <p className="text-sm text-muted-foreground">Your trusted vendors</p>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3 text-muted-foreground">Categories</h3>
        <div className="grid grid-cols-4 gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className="bg-card rounded-xl p-3 shadow-sm border border-border hover:border-accent transition-colors flex flex-col items-center gap-2"
              >
                <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-center">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Providers List */}
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-3 text-muted-foreground">All Providers</h3>
        <div className="space-y-3">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="bg-card rounded-2xl p-5 shadow-sm border border-border"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h4 className="text-base font-medium mb-1">{provider.name}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{provider.rating}</span>
                      <span className="text-xs text-muted-foreground">({provider.reviews})</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{provider.category}</span>
                  </div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(provider.status)}`}>
                  {provider.status}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-3 pb-3 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{provider.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{provider.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{provider.email}</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Quote</span>
                <span className="text-lg font-medium text-accent">{provider.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
