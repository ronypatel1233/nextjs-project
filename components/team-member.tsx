interface TeamMemberProps {
  member: {
    id: number
    name: string
    color: string
  }
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="w-[150px] px-4 py-2 border-r border-b flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${member.color}`}></div>
      <span className="text-sm">{member.name}</span>
    </div>
  )
}

