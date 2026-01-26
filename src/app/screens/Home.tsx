import { Plus, Calendar, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Progress } from "@/app/components/ui/progress";

export function Home() {
  const event = {
    name: "Pancho & Manu",
    date: "June 15, 2026",
    type: "Wedding",
    daysUntil: 142,
  };

  const stats = {
    budget: { total: 35000, spent: 12500, remaining: 22500 },
    tasks: { total: 48, completed: 23 },
    guests: { total: 120, confirmed: 67 },
  };

  const upcomingTasks = [
    { id: 1, title: "Book photographer", category: "Photography", dueDate: "Feb 10", priority: "high" },
    { id: 2, title: "Send invitations", category: "Planning", dueDate: "Feb 15", priority: "medium" },
    { id: 3, title: "Finalize menu", category: "Catering", dueDate: "Feb 20", priority: "medium" },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl mb-1 text-foreground">Nido</h1>
        <p className="text-sm text-muted-foreground">Your events, simplified</p>
      </div>

      {/* Current Event Card */}
      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl mb-1">{event.name}</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span>{event.daysUntil} days to go</span>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent-foreground">
            {event.type}
          </span>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Budget</div>
            <div className="text-lg">{Math.round((stats.budget.spent / stats.budget.total) * 100)}%</div>
            <div className="text-xs text-muted-foreground">spent</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Tasks</div>
            <div className="text-lg">{stats.tasks.completed}/{stats.tasks.total}</div>
            <div className="text-xs text-muted-foreground">done</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">RSVPs</div>
            <div className="text-lg">{stats.guests.confirmed}/{stats.guests.total}</div>
            <div className="text-xs text-muted-foreground">confirmed</div>
          </div>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="bg-card rounded-2xl p-5 shadow-sm border border-border mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base">Budget Overview</h3>
          <TrendingUp className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Spent</span>
            <span className="font-medium">${stats.budget.spent.toLocaleString()}</span>
          </div>
          <Progress value={(stats.budget.spent / stats.budget.total) * 100} className="h-2" />
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Remaining</span>
          <span className="text-accent">${stats.budget.remaining.toLocaleString()}</span>
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base">Upcoming Tasks</h3>
          <Button variant="ghost" size="sm" className="text-accent">
            View all
          </Button>
        </div>
        <div className="space-y-3">
          {upcomingTasks.map((task) => (
            <div
              key={task.id}
              className="bg-card rounded-xl p-4 shadow-sm border border-border flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium mb-0.5">{task.title}</div>
                <div className="text-xs text-muted-foreground">{task.category}</div>
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">
                {task.dueDate}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create New Event Button */}
      <Button className="w-full rounded-xl py-6 bg-primary text-primary-foreground hover:bg-primary/90">
        <Plus className="w-5 h-5 mr-2" />
        Create New Event
      </Button>
    </div>
  );
}
