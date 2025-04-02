interface AppointmentCardProps {
  appointment: {
    id: number
    memberId: number
    clientName: string
    startTime: string
    endTime: string
    column: number
  }
  memberIndex: number
  bgColor: string
}

export default function AppointmentCard({ appointment, memberIndex, bgColor }: AppointmentCardProps) {
  // Calculate position based on member index and column
  const top = 60 * memberIndex + 10 // 60px per row, 10px padding
  const left = (appointment.column - 1) * (100 / 9) + 1 // Adjust based on column and grid
  const width = 100 / 9 - 2 // Slightly less than one column width

  return (
    <div
      className={`absolute border rounded-md p-2 text-xs overflow-hidden ${bgColor}`}
      style={{
        top: `${top}px`,
        left: `calc(150px + ${left}%)`, // 150px is the width of the team member column
        width: `calc(${width}%)`,
        zIndex: 10,
      }}
    >
      <div className="font-medium">{appointment.clientName}</div>
      <div className="text-gray-500">
        {appointment.startTime} - {appointment.endTime}
      </div>
    </div>
  )
}

