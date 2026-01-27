import IosHeader from "@/app/components/IosHeader"
import { Star, Phone, Mail } from "lucide-react"

export function Providers() {
  const providers = [
    { id: 1, name: "Golden Catering", category: "Catering", rating: 4.8, reviews: 124, contact: "contact@goldencatering.com" },
    { id: 2, name: "Luxe Photography", category: "Photography", rating: 4.6, reviews: 89, contact: "hello@luxephoto.com" },
    { id: 3, name: "DJ NightFlow", category: "Music / DJ", rating: 4.9, reviews: 201, contact: "dj@nightflow.com" },
  ]

  return (
    <div className="bg-[#F2F2F7] min-h-full px-4 pt-2 pb-6 space-y-6">
      <IosHeader title="Providers" />

      <main className="space-y-4">
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="bg-white rounded-2xl p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)]"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-[17px] font-semibold">{provider.name}</h3>
                <p className="text-[13px] text-[#6B6B6F]">{provider.category}</p>
              </div>
              <div className="flex items-center gap-1 text-[13px]">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">{provider.rating}</span>
                <span className="text-[#6B6B6F]">({provider.reviews})</span>
              </div>
            </div>

            <div className="flex gap-4 mt-3 text-[#007AFF] text-sm">
              <button className="flex items-center gap-1"><Mail className="w-4 h-4" />Email</button>
              <button className="flex items-center gap-1"><Phone className="w-4 h-4" />Call</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
