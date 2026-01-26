import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";
import { Progress } from "@/app/components/ui/progress";

export function Budget() {
  const budget = {
    total: 35000,
    spent: 12500,
    remaining: 22500,
  };

  const categories = [
    { name: "Venue", budgeted: 12000, spent: 12000, color: "bg-chart-1" },
    { name: "Catering", budgeted: 8000, spent: 0, color: "bg-chart-2" },
    { name: "Photography", budgeted: 3500, spent: 500, color: "bg-chart-3" },
    { name: "Music/DJ", budgeted: 2000, spent: 0, color: "bg-chart-4" },
    { name: "Flowers", budgeted: 2500, spent: 0, color: "bg-chart-5" },
    { name: "Decorations", budgeted: 3000, spent: 0, color: "bg-accent" },
    { name: "Invitations", budgeted: 800, spent: 0, color: "bg-muted" },
    { name: "Other", budgeted: 3200, spent: 0, color: "bg-secondary" },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl mb-1">Budget</h1>
        <p className="text-sm text-muted-foreground">Track your expenses</p>
      </div>

      {/* Total Budget Card */}
      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 shadow-sm border border-accent/20 mb-6">
        <div className="text-sm text-muted-foreground mb-2">Total Budget</div>
        <div className="text-3xl font-medium mb-4">${budget.total.toLocaleString()}</div>
        
        <div className="mb-4">
          <Progress 
            value={(budget.spent / budget.total) * 100} 
            className="h-3 bg-white/50"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/50 rounded-xl p-3">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <TrendingDown className="w-3 h-3" />
              <span>Spent</span>
            </div>
            <div className="text-lg font-medium">${budget.spent.toLocaleString()}</div>
          </div>
          <div className="bg-white/50 rounded-xl p-3">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <TrendingUp className="w-3 h-3" />
              <span>Remaining</span>
            </div>
            <div className="text-lg font-medium text-accent">${budget.remaining.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Budget by Category */}
      <div className="mb-4">
        <h3 className="text-base mb-4">By Category</h3>
        <div className="space-y-3">
          {categories.map((category) => {
            const percentage = category.budgeted > 0 
              ? (category.spent / category.budgeted) * 100 
              : 0;

            return (
              <div
                key={category.name}
                className="bg-card rounded-xl p-4 shadow-sm border border-border"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ${category.spent.toLocaleString()} / ${category.budgeted.toLocaleString()}
                  </div>
                </div>
                <Progress value={percentage} className="h-2" />
                {category.spent > 0 && (
                  <div className="text-xs text-muted-foreground mt-2">
                    {Math.round(percentage)}% used
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
