import { TrendingDown, TrendingUp } from "lucide-react"
import { Progress } from "@/app/components/ui/progress"
import IosHeader from "@/app/components/IosHeader"

export function Budget() {
  const budget = {
    total: 35000,
    spent: 12500,
    remaining: 22500,
  }

  const categories = [
    { name: "Venue", budgeted: 12000, spent: 12000, color: "bg-[#2385F3]" },
    { name: "Catering", budgeted: 8000, spent: 0, color: "bg-[#A3BFFA]" },
    { name: "Photography", budgeted: 3500, spent: 500, color: "bg-[#7FC4FF]" },
    { name: "Music / DJ", budgeted: 2000, spent: 0, color: "bg-[#9AE6B4]" },
    { name: "Flowers", budgeted: 2500, spent: 0, color: "bg-[#FEB2B2]" },
    { name: "Decorations", budgeted: 3000, spent: 0, color: "bg-[#FBD38D]" },
    { name: "Invitations", budgeted: 800, spent: 0, color: "bg-[#CBD5E0]" },
    { name: "Other", budgeted: 3200, spent: 0, color: "bg-[#E2E8F0]" },
  ]

  return (
    <div className="bg-[#F2F2F7] min-h-screen">
      {/* Header iOS grande */}
      <IosHeader title="Presupuesto" />

      <main className="px-4 pt-3 pb-6 space-y-6">
        {/* Tarjeta resumen total */}
        <section
          aria-label="Resumen de presupuesto"
          className="
            bg-white
            rounded-3xl
            px-5 py-4
            shadow-[0_8px_24px_rgba(0,0,0,0.06)]
          "
        >
          <div className="text-[13px] font-medium text-[#6B6B6F] mb-1">
            Presupuesto total
          </div>

          <div className="flex items-baseline justify-between mb-4">
            <div className="text-[28px] font-semibold text-[#3D3D3D]">
              ${budget.total.toLocaleString()}
            </div>
          </div>

          <div className="mb-4">
            <Progress
              value={(budget.spent / budget.total) * 100}
              className="h-2.5 bg-[#E5E5EA]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#F2F2F7] rounded-2xl p-3">
              <div className="flex items-center gap-1 text-[11px] text-[#6B6B6F] mb-1">
                <TrendingDown className="w-3 h-3" />
                <span>Gastado</span>
              </div>
              <div className="text-[17px] font-semibold text-[#3D3D3D]">
                ${budget.spent.toLocaleString()}
              </div>
            </div>
            <div className="bg-[#EDF4FF] rounded-2xl p-3">
              <div className="flex items-center gap-1 text-[11px] text-[#2B6CB0] mb-1">
                <TrendingUp className="w-3 h-3" />
                <span>Disponible</span>
              </div>
              <div className="text-[17px] font-semibold text-[#2385F3]">
                ${budget.remaining.toLocaleString()}
              </div>
            </div>
          </div>
        </section>

        {/* Presupuesto por categoría */}
        <section aria-label="Presupuesto por categoría" className="space-y-3">
          <h2 className="text-[17px] font-semibold text-[#3D3D3D] px-1">
            Por categoría
          </h2>

          {categories.map((category) => {
            const percentage =
              category.budgeted > 0
                ? (category.spent / category.budgeted) * 100
                : 0

            return (
              <div
                key={category.name}
                className="
                  bg-white
                  rounded-3xl
                  px-4 py-3.5
                  shadow-[0_2px_10px_rgba(0,0,0,0.04)]
                "
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${category.color}`}
                    />
                    <span className="text-[15px] font-medium text-[#3D3D3D]">
                      {category.name}
                    </span>
                  </div>
                  <div className="text-[13px] text-[#6B6B6F]">
                    ${category.spent.toLocaleString()} / $
                    {category.budgeted.toLocaleString()}
                  </div>
                </div>

                <Progress value={percentage} className="h-1.5 bg-[#E5E5EA]" />

                {category.spent > 0 && (
                  <div className="text-[11px] text-[#6B6B6F] mt-1.5">
                    {Math.round(percentage)}% usado
                  </div>
                )}
              </div>
            )
          })}
        </section>
      </main>
    </div>
  )
}
