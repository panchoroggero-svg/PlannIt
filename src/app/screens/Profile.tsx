import { ChevronRight, User, Bell, Shield, LogOut } from "lucide-react"

export function Profile() {
  return (
    <div className="min-h-screen bg-[#F2F2F7]">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <h1 className="text-2xl font-semibold">Profile</h1>
      </div>

      {/* User Card */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm">
          <div className="w-14 h-14 rounded-full bg-[#007AFF]/20 flex items-center justify-center">
            <User className="w-7 h-7 text-[#007AFF]" />
          </div>
          <div>
            <div className="text-[17px] font-semibold">Francisco Roggero</div>
            <div className="text-[13px] text-[#6B6B6F]">
              Event organizer
            </div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="px-6 space-y-4">
        <Section>
          <Row icon={<Bell />} label="Notifications" />
          <Row icon={<Shield />} label="Privacy & Security" />
        </Section>

        <Section>
          <Row
            icon={<LogOut />}
            label="Log out"
            danger
          />
        </Section>
      </div>
    </div>
  )
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl divide-y divide-[#E5E5EA] shadow-sm">
      {children}
    </div>
  )
}

function Row({
  icon,
  label,
  danger,
}: {
  icon: React.ReactNode
  label: string
  danger?: boolean
}) {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div
        className={`flex items-center gap-3 ${
          danger ? "text-red-500" : ""
        }`}
      >
        {icon}
        <span className="text-[16px]">{label}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-[#C7C7CC]" />
    </div>
  )
}
