import IosHeader from "@/app/components/IosHeader"
import { TrendingDown, TrendingUp } from "lucide-react"
import { Progress } from "@/app/components/ui/progress"

export function Budget() {
  const budget = { total: 35000, spent: 12500, remaining: 22500 }

  const categories = [
    { name: "Venue", budgeted: 12000, spent: 12000, color: "bg-chart-1" },
    { name: "Catering", budgeted: 8000, spent: 0, color: "bg-chart-2" },
    { name: "Photography", budgeted: 3500, spent: 500, color: "bg-chart-3" },
    { name: "Music / DJ", budgeted: 2000, spent: 0, color: "bg-chart-4" },
    { name: "Flowers", budgeted: 2500, spent: 0, color: "bg-chart-5" },
    { name: "Decorations", budgeted: 3000, spent: 0, color: "bg-accent" },
    { name: "Invitations", budgeted: 800, spent: 0, color: "bg-muted" },
    { name: "Other", budgeted: 3200, spent: 0, color: "bg-secondary" },
  ]

  return (
    <div className="bg-[#F2F2F7] min-h-full px-4 pt-2 pb-6 space-y-6">
      <IosHeader title="Budget" />

      <main className="space-y-8">
        {/* Total Budget Card */}
        <section>
          <div className="bg-white rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)]">
            <div className="text-[13px] text-[#6B6B6F] mb-1">Total Budget</div>
            <div className="text-[32px] font-semibold mb-4">${budget.total.toLocaleString()}</div>
            <Progress value={(budget.spent / budget.total) * 100} className="h-2 rounded-full mb-5" />
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#F2F2F7] p-3">
                <div className="flex items-center gap-1 text-[12px] text-[#6B6B6F] mb-1"><TrendingDown className="w-3 h-3" />Spent</div>
                <div className="text-[17px] font-medium">${budget.spent.toLocaleString()}</div>
              </div>
              <div className="rounded-xl bg-[#F2F2F7] p-3">
                <div className="flex items-center gap-1 text-[12px] text-[#6B6B6F] mb-1"><TrendingUp className="w-3 h-3" />Remaining</div>
                <div className="text-[17px] font-medium text-[#007AFF]">${budget.remaining.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section>
          <h3 className="text-[20px] font-semibold mb-4">By Category</h3>
          <div className="space-y-3">
            {categories.map((cat) => {
              const percentage = cat.budgeted > 0 ? (cat.spent / cat.budgeted) * 100 : 0
              return (
                <div key={cat.name} className="bg-white rounded-2xl p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)]">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${cat.color}`} />
                      <span className="text-[15px] font-medium">{cat.name}</span>
                    </div>
                    <span className="text-[13px] text-[#6B6B6F]">${cat.spent.toLocaleString()} / ${cat.budgeted.toLocaleString()}</span>
                  </div>
                  <Progress value={percentage} className="h-1.5" />
                  {cat.spent > 0 && <div className="text-[12px] text-[#6B6B6F] mt-2">{Math.round(percentage)}% used</div>}
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
