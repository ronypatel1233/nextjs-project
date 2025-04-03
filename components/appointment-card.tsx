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
 
  const top = 60 * memberIndex + 5 
  const left = (appointment.column - 1) * (100 / 9) + 1 
  const width = 100 / 7 - 2 

  return (
    <div
      className={`absolute border rounded-md p-2 text-xs overflow-hidden ${bgColor}`}
      style={{
        top: `${top}px`,
        left: `calc(140px + ${left}%)`, 
        width: `calc(${width}%)`,
        zIndex: 10,
      }}
    >
      <div className="font-medium">{appointment.clientName}</div>
      <div className="text-gray-400">
        {appointment.startTime} - {appointment.endTime}
      </div>
    </div>
  )
}

